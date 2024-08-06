import React, { useEffect, useState } from 'react';
import Navbar2 from './Navbar2';

const Makedonation = () => {
    useEffect(() => {
        document.title = "Food Help - Make Donation";
    }, []);

    const [formData, setFormData] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch('http://127.0.0.1:8000/api/donate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            // const data = await response.json();
            // console.log(data);
            console.log('add');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Navbar2 />
            <h1 className='donation '>Food Donation Details</h1><br />
            <form action="" onSubmit={handleSubmit}>
                <input className='donation' name='foodName' type="text" placeholder='Food Name' onChange={handleChange} required/><br />
                <input className='donation' name='foodQuantity' type="text" placeholder='Food Quantity' onChange={handleChange} required/><br />
                <input className='donation' name='address' type="text" placeholder='Address' onChange={handleChange} required/><br />
                <input className='donation' name='phoneNumber' type="text" placeholder='Phone Number' maxLength={10} minLength={10} onChange={handleChange} required/><br />
                <div className='donation'><b>Food Type :</b></div><br />
                <div className='donation'>
                    <input type="radio" name="foodType" id="veg" onChange={handleChange} value='Veg'/>
                    <label htmlFor="veg">Veg</label>
                    <input style={{ marginLeft: '20px' }} type="radio" name="foodType" id="nonveg" onChange={handleChange} value='Non-Veg'/>
                    <label htmlFor="nonveg">Non-Veg</label>
                </div><br /><br />
                <button className='donate' type="submit">Donate</button>
            </form>
        </>
    )
}

export default Makedonation
