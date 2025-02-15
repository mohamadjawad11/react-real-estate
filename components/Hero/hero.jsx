import React from 'react'
import './hero.css'
const hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      let offset = 260; 
      if (id === 'Contact') {
        offset = 140; 
      }
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className='hero-container' id='Footer'>
        <div className='hero-text'>
            <h1>Explore homes that <span>fits your dream</span></h1>
            <div className='button-section'>
                 <button className='btn-projects' onClick={() => scrollToSection('Projects')}>Projects </button>
                 <button className='btn-contact' onClick={() => scrollToSection('Contact')}>Contact Us </button>
                  
            </div>
        </div>
    </div>
  )
}

export default hero
