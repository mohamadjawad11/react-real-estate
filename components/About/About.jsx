import React from 'react'
import './About.css'
import brandImage from '../../assets/brand_img.png'
const About = () => {
  return (
    <div className='about' id='About'>

        <div className='left-column'>
        <img src={brandImage} alt='brand_image' />
        </div>

        <div className='right-column'>
            <div className='experience'>
                <div className='experience-content'>
                    <h2>10+</h2>
                    <p>Years of Excellenece</p>
                </div>
                <div className='experience-content'>
                    <h2>50+</h2>
                    <p>Projects Completed</p>
                </div>
            </div>
            <div className='experience'>
            <div className='experience-content'>
                <h2>10+</h2>
                <p>Years of Excellenece</p>
            </div>
            <div className='experience-content'>
                <h2>50+</h2>
                <p>Projects Completed</p>
            </div>
            </div>
            <p>
            Discover your dream home with our premium real estate solutions. We specialize in 
            offering modern, luxurious, and affordable properties tailored to your lifestyle. 
            Whether you're looking for a cozy apartment, a spacious villa, or a commercial space, 
            we ensure top-quality listings with seamless buying and renting experiences.  
            </p>
            <button className='learn-more-btn'>Learn more</button>

        </div>

    </div>
  )
}

export default About
