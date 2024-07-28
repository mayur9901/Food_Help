import React, { useEffect } from 'react';
import { Route, Link, Routes } from "react-router-dom";
import Navbar3 from './Navbar3';
import image1 from "../../image-1.jpg";

const NGOhome = () => {
    useEffect(() => {
        document.title = "Food Help - NGO Home";
    }, []);
    return (
        <>
            <Navbar3 /><br /><br />
            <img src={image1} alt="image1" id='img1' /><br /><br />
            <button className='donation'><Link to='/availabledonation' className='donation'>Available Donation</Link></button>
        </>
    )
}

export default NGOhome
