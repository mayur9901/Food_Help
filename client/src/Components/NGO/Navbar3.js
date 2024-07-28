import React from 'react'
import { Route, Link, Routes } from "react-router-dom";
import logo from '../../../src/logo1.png'
import '../Navbar.css'
import { FaUser } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";

const Navbar3 = () => {
    return (
        <>
            <nav id='nav2'>
                <img src={logo} alt="" id='logo' />
                <div>
                    <ul>
                        <li><Link to='/ngonotification'><IoNotifications className='icon' /></Link></li>
                        <li><Link to='/ngoprofile'><FaUser className='icon' /></Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar3
