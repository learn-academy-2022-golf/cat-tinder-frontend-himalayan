import React, { useState } from 'react'

const Home = () => {
  const [guineaPigs, setGuineaPigs] = useState([]) // Initialize empty array to store guinea pigs

  const goToEdit = (index) => {
    // Navigate to the edit page for the guinea pig at the given index
  }

  const seeIndex = () => {
    // Navigate to the index page
  }

  const showExisting = () => {
    // Fetch a list of existing guinea pigs from an API and display them
  }

  const addNew = () => {
    // Navigate to the page for adding a new guinea pig
  }

  return (
    <div>
      <div style={{ fontSize: '20px', color: 'blue' }}>Welcome To the Home Page</div>
      <button onClick={seeIndex} style={{ backgroundColor: 'green' }}>See Index</button>
      <button onClick={showExisting} style={{ backgroundColor: 'orange' }}>Show Existing</button>
      <button onClick={addNew} style={{ backgroundColor: 'purple' }}>Add New</button>
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
