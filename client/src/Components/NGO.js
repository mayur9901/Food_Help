import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const NGO = () => {
  useEffect(() => {
    document.title = "Food Help - NGO Sign In";
  }, []);
  return (
    <>
      <Navbar />
      <h1 className='login'>NGO Sign In</h1>
      <input className='login' type="text" placeholder="Enter NGO's Name" /><br />
      <input className='login' type="number" placeholder="Enter NGO's Phone Number" /><br />
      <input className='login' type="text" placeholder="Enter NGO's Address" /><br />
      <input className='login' type="text" placeholder="Enter NGO's License Number" /><br />
      <input className='login' type="number" placeholder='Enter OTP' /><br />
      <button style={{ display: 'block', margin: '0 auto' }}>Send OTP</button><br />
      <button type="submit" className='login' style={{ display: 'block', margin: '0 auto' }}><Link className='login' to="/ngohome">Sign In</Link></button>
    </>
  )
}

export default NGO
