import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const PigEdit = (props) => {
  // Initialize the form values with the current guinea pig's data
  const [name, setName] = useState(props.name)
  const [breed, setBreed] = useState(props.breed)
  const [habits, setHabits] = useState(props.habits)

  const handleSubmit = (event) => {
    event.preventDefault()
    // Update the guinea pig in the database with the new values
  }

  return (
    <div style={{ backgroundColor: 'grey' }}>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="input"
        />
        <br />
        <label htmlFor="breed">Breed:</label>
        <input
          type="text"
          id="breed"
          value={breed}
          onChange={(event) => setBreed(event.target.value)}
          className="input"
        />
        <br />
        <label htmlFor="habits">Habits:</label>
        <input
          type="text"
          id="habits"
          value={habits}
          onChange={(event) => setHabits(event.target.value)}
          className="input"
        />
        <br />
        <button type="submit" className="button">
          Save Changes
        </button>
      </form>
      <br />
      {/* Add a button to navigate to the home page */}
      <Link to="/">
        <button className="button">Home</button>
      </Link>
      {/* Add a button to navigate to the PigShow page */}
      <Link to="/PigShow">
        <button className="button">Show Guinea Pigs</button>
      </Link>
    </div>
  )
}

export default PigEdit
