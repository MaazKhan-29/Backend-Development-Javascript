import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error)=>{
        console.log(error);
        
      })
  })


  return (
    <>
      <h1>Welcome to MK Jokes</h1>
      <p>JOKES: {jokes.length}</p>
      {
        jokes.map((joke)=>(
          <div key={joke.id}>
            <h1>{joke.title}</h1>
            <h3>{joke.content}</h3>
          </div>
        ))
      }
    </>
  )
}

export default App
