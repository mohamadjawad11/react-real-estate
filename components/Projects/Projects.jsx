import React, { useState } from 'react';
import './Projects.css';
import rightArrow from '../../assets/right-arrow.png';
import leftArrow from '../../assets/left-arrow.png';
import { projectsData } from '../../assets/assets.js';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(projectsData.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(projectsData.length / 3)) % Math.ceil(projectsData.length / 3));
  };

  return (
    <div className='projects' id='Projects'>
      <button onClick={prevSlide}><img src={leftArrow} alt='' className='back-btn button-arrow' /></button>
      <button onClick={nextSlide}><img src={rightArrow} alt='' className='next-btn button-arrow' /></button>

      <div className='slider' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        <ul>
          {Array.from({ length: Math.ceil(projectsData.length / 3) }).map((_, slideIndex) => (
            <li key={slideIndex}>
              <div className='card-container'>
                {projectsData.slice(slideIndex * 3, slideIndex * 3 + 3).map((project, index) => (
                  <div key={index} className='project-card'>
                    <img src={project.image} alt={project.title} />
                    <div className='card-content'>
                      <h2>{project.title}</h2>
                      <p>{project.price} | {project.location}</p>
                     
                    </div>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;