import React from 'react';

const Home = () => {
  return (
    <div className="ceo-homepage" style={{ minHeight: '94vh', display: 'flex', flexDirection: 'column' }}>
      <div className="container py-5">
        {/* Clear the text at the top */}
      </div>
      <div className="row mt-4 flex-grow-1">
        <div className="col-md-12 d-flex justify-content-end   align-items-end">
          <div>
            <h2>Achievements</h2>
            <ul>
              <li className='text-success'>[2018] - [Achievement description]</li>
              <li className='text-success'>[2019] - [Achievement description]</li>
              <li className='text-success'>[2020] - [Achievement description]</li>
              {/* You can add more achievements here */}
            </ul>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12">
            <h2 className='text-warning'>About Our Company</h2>
            <p className=' text-color'>Provide details about your company here. This can include information about your company's mission, values, history, team, products, services, etc.</p>
            {/* Add more details about your company as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
