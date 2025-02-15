import React from 'react';
import './Footer.css';
import logo_dark from '../../assets/logo_dark.svg';

const Footer = () => {
  return (
    <footer className='footer' id='Footer'>
      <div className='footer-content'>
        <div className='footer-section'>
          <img src={logo_dark} alt='Company Logo' className='footer-logo' />
          <p className='footer-description'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>

        <div className='footer-section'>
          <h2 className='footer-heading2 company'>Company</h2>
          <nav>
            <ul className='footer-links'>
              <li><a href='#home'>Home</a></li>
              <li><a href='#about'>About us</a></li>
              <li><a href='#contact'>Contact us</a></li>
              <li><a href='#privacy'>Privacy Policy</a></li>
            </ul>
          </nav>
        </div>

        <div className='footer-section'>
          <h2 className='footer-heading'>Subscribe to our newsletter</h2>
          <p className='footer-newsletter-text'>
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className='newsletter-form'>
            <input type='email' placeholder='Enter your email' className='newsletter-input' />
            <button type='button' className='subscribe-button'>Subscribe</button>
          </div>
        </div>
      </div>

      <hr className='footer-divider' />

      <p className='footer-copyright'>
        Copyright 2025 © Mohammad Jawad Hamdan. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;