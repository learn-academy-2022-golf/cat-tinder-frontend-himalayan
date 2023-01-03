import React, { useState } from 'react'


const PigNew = () => {
  const [name, setName] = useState('')
  const [breed, setBreed] = useState('')
  const [habits, setHabits] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    // Add the guinea pig to the database here
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br />
      <label htmlFor="breed">Breed:</label>
      <input
        type="text"
        id="breed"
        value={breed}
        onChange={(event) => setBreed(event.target.value)}
      />
      <br />
      <label htmlFor="habits">Habits:</label>
      <input
        type="text"
        id="habits"
        value={habits}
        onChange={(event) => setHabits(event.target.value)}
      />
      <br />
      <button type="submit">Add Guinea Pig</button>
      <br />
      <a href="/pigedit" style={{ color: 'purple' }}>
        Edit Guinea Pig
      </a>
      <br />
      <a href="http://localhost:3000/" style={{ color: 'green' }}>
        Back to Home
      </a>
    </form>
  )
}

export default PigNew
