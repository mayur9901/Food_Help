import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Login = () => {
    useEffect(() => {
        document.title = "Food Help - Log In";
    }, []);
    return (
        <>
            <Navbar />
            <center><h1>NGO Log In</h1></center>
            <form action="">
                <input type="number" className='login' placeholder="Enter NGO's Phone Number" /><br />
                <input type="number" className='login' placeholder='Enter OTP' /><br />
                <button className='border border-black p-[5px] rounded ' style={{ display: 'block', margin: '0 auto' }}>Send OTP</button><br />
                <button type="submit" className='login' style={{ display: 'block', margin: '0 auto' }}><Link className='login' to='/ngohome'>Log In</Link></button>
            </form>
        </>
    )
}

export default Login
