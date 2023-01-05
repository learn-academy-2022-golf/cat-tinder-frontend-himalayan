import React, { useState } from 'react'

const Home = () => {
  const [guineaPigs, setGuineaPigs] = useState([]) // Initialize empty array to store guinea pigs

  const goToEdit = (index) => {
    //edit page for the guinea pig at the given index
  }

  const seeIndex = () => {
    //index page
  }

  const showExisting = () => {
    //existing guinea pigs from an API and display them
  }

  const addNew = () => {
    //for adding a new guinea pig
  }

  return (
    <div>
      <div style={{ fontSize: '20px', color: 'blue' }}>Welcome To Guinea Pigs of the World</div>
      <button onClick={seeIndex} style={{ backgroundColor: 'green' }}>See The Pigs</button>
      <button onClick={showExisting} style={{ backgroundColor: 'orange' }}>Show All Pigs</button>
      <button onClick={addNew} style={{ backgroundColor: 'purple' }}>Add to the mix</button>
      {guineaPigs.map((guineaPig, index) => (
        <div key={guineaPig.id} style={{ border: '1px solid black' }}>
          <div style={{ fontWeight: 'bold' }}>{guineaPig.name}</div>
          <button onClick={() => goToEdit(index)} style={{ color
     </div>
      ))}
     </div>
  )
}

export default Home
