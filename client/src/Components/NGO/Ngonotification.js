import React, { useEffect } from 'react';
import Navbar3 from './Navbar3';

const Ngonotification = ({ add }) => {
  useEffect(() => {
    document.title = "Food Help - NGO Notification";
  }, []);

  return (
    <div>
      <Navbar3 />
      {Array.isArray(add) && add.map(item => (
        <div className='ngoavailfood'>
          <div key={item.id}>
            <label htmlFor="food name">Food Name : {item.foodName}</label><br />
            <label htmlFor="food quantity">Food Quantity : {item.foodQuantity}</label><br />
            <label htmlFor="address">Address : {item.address}</label><br />
            <label htmlFor="phonenumber">Phone Number : {item.phoneNumber}</label><br />
            <label htmlFor="food type">Food Type : {item.foodType}</label><br />
            <button id='foodreq'>Donated</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Ngonotification
