// Contact.js
import React from 'react';
import imageSrc from '../aspects/maps.jpg'
function Contact() {
  return (
    <div>
      <div className="card text-bg-dark border-0" >
        <img src={imageSrc} className="card-img" alt='background' height='650px' />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
        </div>
      </div>
    </div>
  );
}

export default Contact;
