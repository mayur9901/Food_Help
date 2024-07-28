import React, { useEffect, useState } from 'react';
import Navbar3 from './Navbar3';

const Availabledonation = () => {
    useEffect(() => {
        document.title = "Food Help - Available Donation";
    }, []);

    const [donations, setDonations] = useState([]);

    useEffect(() => {
        const fetchDonations = async () => {
            try {
                const response = await fetch('/api/availabledonation');
                const data = await response.json();
                if (Array.isArray(data)) {
                    setDonations(data);
                } else {
                    console.error('Invalid data format:', data);
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        
        fetchDonations();
    }, []);

    return (
        <>
            <Navbar3 />
            <div style={{ display: "flex"}}>
                {donations.map(donation => (
                    <div className='ngoavailfood'>
                        <div key={donation.id}>
                            <label htmlFor="food name">Food Name : {donation.foodName}</label><br />
                            <label htmlFor="food quantity">Food Quantity : {donation.foodQuantity}</label><br />
                            <label htmlFor="address">Address : {donation.address}</label><br />
                            <label htmlFor="phonenumber">Phone Number : {donation.phoneNumber}</label><br />
                            <label htmlFor="food type">Food Type : {donation.foodType}</label><br />
                            <button id='foodreq'>Accept</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Availabledonation
