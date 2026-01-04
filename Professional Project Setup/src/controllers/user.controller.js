import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from '../utils/ApiError.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { uploadOnCloudinary } from '../utils/cloudinary.js'
import { User } from "../models/user.models.js"



const generateAccessAndRefreshToken=async (userId)=>{
    try {
        const user=await User.findById(userId)
        // console.log("TUser:",user)
        const accessToken=user.generateAccessToken()
        // console.log(accessToken)
        const refreshToken=user.generateRefreshToken()

        user.refreshToken=refreshToken
        await user.save({validateBeforeSave:false})
        // user.save({validateBeforeSave:false})

        return {accessToken,refreshToken}

    } catch (error) {
        throw new ApiError(500,"something went wrong while generating access and refresh token")
    }
}








const registerUser = asyncHandler(
    async (req, res) => {

        // ******************* Algorithm for User Registration***********************
        //Step 1:-- Get user details from frontend
        //Step 2:-- Validation - not Empty
        //Step 3:-- Check if user already exists: username , email
        //Step 4:-- Check for images , check for avatar
        //Step 5:-- Upload them into cloudinary, avatar
        //Step 6:-- Create User Object - create entry in db
        //Step 7:-- Remove password and refresh toke`n field from response
        //Step 8:-- Check for user creation
        //Step 9:-- return res



        // ********************** Implementation of Above Algorithm into Code**********************

        /*****************************************************************************\
        *      Step 1:--- Getting User details from frontend / via Postman            *
        \*****************************************************************************/

        const { fullname, email, username, password } = req.body

        console.log(`Name: ${fullname}\n email: ${email}`)



        /*****************************************************************************\
        *      Step 2:--- Validation - not Empty                                      *
        \*****************************************************************************/


        if (
            [fullname, email, username, password].some((field) => field?.trim() === "")
        ) {
            throw new ApiError(400, "All fields are required")
        }



        /*****************************************************************************\
        *      Step 3:--- Check if user already exists: username , email              *
        \*****************************************************************************/

        const existedUser = await User.findOne({
            $or: [{ username }, { email }]    // Logical Or Operation will be Perfom it will check either userame or email exist or not
        })

        if (existedUser) {
            throw new ApiError(400, "User with email or username Already Exists")
        }



        /*****************************************************************************\
        *      Step 4:--- Check for Images  - Check for Avatar                        *
        \*****************************************************************************/

        const avatarLocalPath = req.files?.avatar[0]?.path;
        // const coverImageLocalPath=req.files?.coverImage[0]?.path;

        let coverImageLocalPath;
        if (
            req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0
        ) {
            coverImageLocalPath = req.files.coverImage[0].path;
        }

        // console.log(avatarLocalPath)

        if (!avatarLocalPath) {
            throw new ApiError(400, "Avatar Field is required")
        }



        /*****************************************************************************\
        *      Step 5:--- Upload them into cloudinary, avatar                         *
        \*****************************************************************************/

        const avatar = await uploadOnCloudinary(avatarLocalPath);
        const coverImage = await uploadOnCloudinary(coverImageLocalPath);

        if (!avatar) {
            throw new ApiError(400, "avatar field is required")
        }





        /*****************************************************************************\
        *      Step 6:--- Create User Object - create entry in db                     *
        \*****************************************************************************/

        const user = await User.create({
            fullname,
            avatar: avatar.url,
            coverImage: coverImage?.url || "",
            email,
            password,
            username: username.toLowerCase()
        })



        /*****************************************************************************\
        *      Step 7:--- Remove password and refresh token field from response       *  
        \*****************************************************************************/

        const createdUser = await User.findById(user._id).select(" -password -refreshToken")




        /*****************************************************************************\
        *      Step 8:--- Check for user creation                                     *  
        \*****************************************************************************/


        if (!createdUser) {
            throw new ApiError(500, "something went wrong while registering the user")
        }






        /*****************************************************************************\
        *      Step 9:--- Return Response                                             *  
        \*****************************************************************************/

        return res.status(201).json(
            new ApiResponse(200, createdUser, "User Registered Successfully")
        )
    }
)


const loginUser = asyncHandler(async (req, res) => {

    // res body -> data
    // username or email
    //find the user
    // password check
    //access and refresh Token
    // send cookie


    const { email, username, password } = req.body


    if (!username && !email) {
        throw new ApiError(400, "username or password is required");
    }

    const user= await User.findOne({
        $or:[{email},{username}]
    })


    if(!user){
        throw new ApiError(404,"User does not Exist")
    }


    const isPasswordValid = await user.isPasswordCorrect(password)

    if(!isPasswordValid){
        throw new ApiError(401,"Invalid user credentials")
    }

    // console.log(password,":",isPasswordValid)
    // console.log("userID: " , (String(user._id)===user._id))

    const {accessToken,refreshToken}=await generateAccessAndRefreshToken(String(user._id))

    const loggedInUser= await User.findById(user._id).select("-password -refreshToken")


    const options={
        httpOnly:true,
        secure:true
    }

    return res
    .status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json(
        new ApiResponse(
            200,
            {
                user:loggedInUser,accessToken,refreshToken
            },
            "User logged In SuccessFully"
        )
    )

})

const logoutUser=asyncHandler(async(req,res)=>{

    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set:{
                refreshToken:undefined
            }
        },
        {
            new:true
        }
    )


    const options={
        httpOnly:true,
        secure:true
    }


    return res
    .status(200)
    .clearCookie("accessToken",options)
    .clearCookie("refreshToken",options)
    .json(new ApiResponse(200,{},"User Logged Out"))

})



const refreshAccessToken = asyncHandler(async (req, res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

    if (!incomingRefreshToken) {
        throw new ApiError(401, "unauthorized request")
    }

    try {
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        )
    
        const user = await User.findById(decodedToken?._id)
    
        if (!user) {
            throw new ApiError(401, "Invalid refresh token")
        }
    
        if (incomingRefreshToken !== user?.refreshToken) {
            throw new ApiError(401, "Refresh token is expired or used")
            
        }
    
        const options = {
            httpOnly: true,
            secure: true
        }
    
        const {accessToken, newRefreshToken} = await generateAccessAndRefereshTokens(user._id)
    
        return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", newRefreshToken, options)
        .json(
            new ApiResponse(
                200, 
                {accessToken, refreshToken: newRefreshToken},
                "Access token refreshed"
            )
        )
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid refresh token")
    }

})

export {
    registerUser,
    loginUser,
    logoutUser
}
