import React from 'react'
import { Link } from 'react-router-dom'

const PigShow = () => {
  const pigs = [
    { id: 1, name: 'Peanut', breed: 'Abyssinian', habits: 'Eating and sleeping', image:'https://www.google.com/search?q=abyssinian+guinea+pig&client=firefox-b-d&sxsrf=ALiCzsbD8w6KSQKqMX-uGZC-hKURw9qB1A%3A1671348521682&ei=KcGeY4ShKdCOggeQjbnwCg&gs_ssp=eJzj4tLP1TfIMjQuNrI0YPQSTUyqLC7OzMtMzFNIL83MS01UKMhMBwC9bwt2&oq=Abyssinian+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgBMgcILhCxAxBDMgcILhCxAxBDMgQIABBDMgQIABBDMgUIABCABDIECAAQQzIFCAAQgAQyBQgAEIAEMgUIABCABDIECAAQQzoKCAAQRxDWBBCwAzoHCAAQsAMQQzoNCAAQ5AIQ1gQQsAMYAToPCC4Q1AIQyAMQsAMQQxgCOgwILhDIAxCwAxBDGAJKBAhBGABKBAhGGAFQqQJYqQJgxA9oAXABeACAAbABiAGwAZIBAzAuMZgBAKABAcgBD8ABAdoBBggBEAEYCdoBBggCEAEYCA&sclient=gws-wiz-serp' },
    { id: 2, name: 'Mochi', breed: 'Peruvian', habits: 'Playing and cuddling', image: '/path/to/mochi-image.jpg' },
    { id: 3, name: 'Pumpkin', breed: 'Texel', habits: 'Running and jumping', image: '/path/to/pumpkin-image.jpg' },
  ]

  return (
    <div>
      <h1>Guinea Pigs</h1>
      <ul>
        {pigs.map((pig) => (
          <li key={pig.id}>
            <img src={pig.image} alt={pig.name} />
            <br />
            {pig.name} ({pig.breed}): {pig.habits}
            <br />
            <Link to={`/PigEdit/${pig.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
      <Link to="/PigNew">Add New Guinea Pig</Link>
      <br />
      <Link to="/">Home</Link>
    </div>
  )
}

export default PigShow
