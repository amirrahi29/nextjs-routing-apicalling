import React, { useState } from 'react'

const Home = () => {

  const [counter, setCounter] = useState(0);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh', 
        textAlign: 'center',
      }}>
      <div>Home</div>
      <h3>{counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Submit</button>
    </div>
  )
}

export default Home