
import React from 'react';

const Contact = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6">
          <h2>Contact Our CEO</h2>
          <p>Feel free to reach out to our CEO for any inquiries, collaborations, or feedback. Fill out the form below or use the contact details provided.</p>
          {/* Contact Form */}
          <form>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="fullName" placeholder="Enter your full name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email address" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Enter your message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
        <div className="col-lg-6">
          <h2>Contact Details</h2>
          <p>Get in touch with our CEO via email or phone. We're here to assist you!</p>
          <ul className="list-unstyled">
            <li>Email: ceo@example.com</li>
            <li>Phone: +1 (123) 456-7890</li>
          </ul>
          {/* You can add more contact details here */}
        </div>
      </div>
    </div>
  );
};

export default Contact;

