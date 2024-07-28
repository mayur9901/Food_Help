import React from 'react'
import logo from '../../src/logo1.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav>
                <img src={logo} alt="" id='logo' />
                <div>
                    <button className='login '><Link className='login' to='/login'>NGO Log In</Link></button>
                    <button className='login'><Link className='login' to='/signin'>NGO Sign In</Link></button><br />
                </div>
            </nav>
        </>
    )
}

export default Navbar
