import React, { useEffect } from 'react';
import Navbar3 from './Navbar3';

const Ngoprofile = () => {
    useEffect(() => {
        document.title = "Food Help - NGO Profile";
      }, []);
    return (
        <div>
            <Navbar3 />
            <center>
                <div className='ngoprofile'>
                    <label htmlFor="name">Name : </label><br />
                    <label htmlFor="phone">Phone No : </label><br />
                    <label htmlFor="address">Address : </label>
                </div>
            </center>
        </div>
    )
}

export default Ngoprofile
