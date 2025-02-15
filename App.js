import React from 'react';
import  { useEffect } from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar'
import Hero from './components/Hero/hero'
import Title from './components/Title/title'
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0); 
    }, 100); 
  }, []);
  


  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Title subTitle='Passionate About Properties, Dedicated to  Your Vision' title='About'  spanElement='Our Brand'/>
      <About/>
      <Title subTitle='Crafting Spaces, Building Legacies—Explore Our Portfolio' title='Projects ' spanElement='Done' />
      <Projects/>
      <Title subTitle='Real Stories from Those Who Found Home with Us' title='Customer ' spanElement=' Testimonials' />
      <Testimonials/>
     
      <Title subTitle='Ready to Make a Move? Let’s Build Your Future Together' title='Contact ' spanElement=' With Us' />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
