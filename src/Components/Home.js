import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa'; // Import Facebook and Twitter icons
import imageSrc from '../aspects/boss.jpeg';

function Home() {
  return (
    <div>
      <div className="card text-bg-dark border-0">
        <img src={imageSrc} className="card-img" alt='background' height='710px' />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
          <h5 className="card-title display-2 fw-bolder mb-0 " style={{ color: "black" }}>Hello Mark Wood ...! </h5>
            <h5 className="card-title display-3 fw-bolder mb-0 " style={{ color: "pink" }}>PORT </h5>
            <h5 className="card-title display-3 fw-bolder mb-0 " style={{ color: "pink" }}>FOL </h5>
            <h5 className="card-title display-3 fw-bolder mb-0 " style={{ color: "pink" }}>IO </h5>
            <p className="card-text lead fs-2 display-3 fw-bolder " style={{ color: "black" }} >Creative World </p>
            <p style={{ color: "white" }} className='display-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt mollitia </p>
          </div>
        </div>

        {/* Facebook and Twitter icons */}
        <div className="position-absolute top-0 end-0 m-3 mt-3"> {/* Added mt-3 class for top margin */}
          <a href="https://www.facebook.com" className="text-white me-3">
            <FaFacebook size={30} style={{ color: "#3b5998" }} /> {/* Apply Facebook color */}
          </a>
          <a href="https://www.twitter.com" className="text-white">
            <FaTwitter size={30} style={{ color: "#1da1f2" }} /> {/* Apply Twitter color */}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
