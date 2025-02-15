import React from 'react';
import './testimonials.css';
import { testimonialsData,assets } from '../../assets/assets.js';

const Testimonials = () => {
  return (
    <div className='testimonials' id='Testimonials'>
      {testimonialsData.map((testimonial, index) => (
        <div key={index} className='testimonial-card'>
          <img src={testimonial.image} alt={testimonial.alt} className='testimonial-image' />
          <div className='testimonial-content'>
            <h3>{testimonial.name}</h3>
            <p className='testimonial-title'>{testimonial.title}</p>
            <div className='testimonial-rating'>
              {[...Array(testimonial.rating)].map((_, i) => (
                <img key={i} src={assets.star_icon} alt='star' className='star-icon' />
              ))}
            </div>
            <p className='testimonial-text'>{testimonial.text}</p>
            <button className='btn-testimonial'>View More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;