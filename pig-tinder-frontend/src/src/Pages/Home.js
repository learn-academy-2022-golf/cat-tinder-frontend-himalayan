import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='body'>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '80vh'
    }}>
      <h1 style={{ textAlign: 'center', marginTop: '20px', fontSize: '30px' }}>Welcome To the Home Page</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
    Welcome To the Home Page
  </div>
  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
    <Link to="/PigEdit" style={{ textDecoration: 'none', color: '#333', fontSize: '20px', marginRight: '20px', padding: '10px 20px', border: '1px solid #333' }}>
      Edit guinea pig
    </Link>
    <Link to="/PigShow" style={{ textDecoration: 'red', fontSize: '20px', marginRight: '20px', padding: '10px 20px', border: '1px solid #333' }}>
      Index of guinea pigs
    </Link>
    <Link to="/PigNew" style={{ textDecoration: 'none', color: '#333', fontSize: '20px', marginRight: '20px', padding: '10px 20px', border: '1px solid #333' }}>
      New guinea pig
    </Link>
  </div>
</div>
</div>


  )
}







export default Home