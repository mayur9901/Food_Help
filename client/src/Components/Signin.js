import React, { useEffect } from 'react';
import { Route, Link, Routes } from "react-router-dom";
import Navbar from './Navbar';

const Signin = () => {
    useEffect(() => {
        document.title = "Food Help - Sign In";
    }, []);
    return (
        <>
            <Navbar />
            <center><h1>NGO Sign In</h1></center>
            <form action="">
                <input className='login' type="text" placeholder="Enter NGO's Name" /><br />
                <input className='login' type="number" placeholder="Enter NGO's Phone Number" /><br />
                <input className='login' type="text" placeholder="Enter NGO's Address" /><br />
                <input className='login' type="text" placeholder="Enter NGO's License Number" /><br />
                <input className='login' type="number" placeholder='Enter OTP' /><br />
                <button style={{ display: 'block', margin: '0 auto' }}>Send OTP</button><br />
                <button type="submit" className='login' style={{ display: 'block', margin: '0 auto' }}><Link className='login' to="/ngohome">Sign In</Link></button>
            </form>
        </>
    )
}

export default Signin
