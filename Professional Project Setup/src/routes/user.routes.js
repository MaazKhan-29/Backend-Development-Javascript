import {Router} from 'express'
import {registerUser, loginUser ,logoutUser} from '../controllers/user.controller.js';
const router=Router()
import {upload} from '../middleware/multer.middleware.js'
// import { verify } from 'jsonwebtoken';
import { verifyJWT } from '../middleware/auth.middleware.js';

router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        },
        {
            name:"coverImage",
            maxCount:1
        }
    ])
    ,registerUser)
// router.route("/register").get(registerUser) just work with browser also

router.route("/login").post(loginUser)
router.route("/logout").post(verifyJWT,logoutUser)


export default router;