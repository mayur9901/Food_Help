import React from 'react';
import { Route, Link, Routes } from "react-router-dom";
import "../App.css";
import image1 from '../image-1.jpg'
import Navbar from './Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <h1 style={{ color: 'green' }}>Welcome To Food Help</h1>
      <div style={{}}>
      <div style={{ fontSize: '17px' }}>We believe that no one should go hungry</div>
      <div style={{ fontSize: '17px' }}>We are working to make a difference in the lives of those struggling with food insecurity</div><br />
      <img src={image1} alt="image1" id='img1' /><br />
      </div>
      <button className='donation'><Link to='/makedonation' className='donation'>Make Donation</Link></button>
    </>
  )
}

export default Home
