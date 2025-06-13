import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function App() {

  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((res) => {
        setJokes(res.data)
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
  })

  return (
    <div>
      <h1>Learn Backend..</h1>
      <h2>JOKES: {jokes.length}</h2>
      {
        jokes.map((joke, index) => (
          <div key={index}>

            <h3>{joke.id}. {joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </div>
  )

}