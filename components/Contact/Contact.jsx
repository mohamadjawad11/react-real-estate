import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact-container' id='Contact'>
      <h1>Contact Us</h1>
      <form className='contact-form'>
        <div className='form-group'>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name' placeholder='Enter Your Name' required />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' placeholder='Enter Your Email' required />
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Message</label>
          <textarea id='message' placeholder='Enter Your Message' rows='5' required></textarea>
        </div>
        <button type='submit' className='submit-button'>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;