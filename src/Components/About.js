// About.js
import React, { useState, useEffect } from 'react';
import { getData } from './db';

function About() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getData(); // Assuming getData is an async function that fetches data
        setUserData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUserData();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div className='bg-info py-4'>
      <div className='container'>
        <div className='row justify-content-center'>
          {userData.map(singleUser => (
            <div className='col-md-4 mb-4' key={singleUser.id}>
              <div className='card bg-light'>
                <div className='card-body'>
                  <h5 className='card-title text-primary  ' >{singleUser.name}</h5>
                  <ul className="list-unstyled">
                    <li><strong>Name:</strong> {singleUser.name}</li>
                    <li><strong>Mobile No:</strong> {singleUser.mobileNo}</li>
                    <li><strong>Email Address:</strong> {singleUser.email}</li>
                    <li><strong>State:</strong> {singleUser.address.city}</li>
                    <li><strong>Land-Mark:</strong> {singleUser.address.street}</li>
                    <li><strong>House No:</strong> {singleUser.address.houseNo}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
