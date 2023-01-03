import React from 'react'


const PigCard = ({ id, name, breed, habits, image }) => (
  <div className="pig-card">
    <img src={image} alt={name} />
    <h2>{name}</h2>
    <p>Breed: {breed}</p>
    <p>Habits: {habits}</p>
  </div>
)

export default PigCard
