import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';

export const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         if (window.scrollY > 50) {
    //             setSticky(true);
    //         } else {
    //             setSticky(false);
    //         }
    //     });
    // }, []);

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt='logo' className='estate-logo' />
            <ul className='list-container'>
                <div className='without-last'>
                    <li><a href='#Home'>Home</a></li>
                    <li><a href='#About'>About</a></li>
                    <li><a href='#Projects'>Projects</a></li>
                    <li><a href='#Testimonials'>Testimonials</a></li>
                </div>
                <li>
                    <button className='btn'>
                        Sign up
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;