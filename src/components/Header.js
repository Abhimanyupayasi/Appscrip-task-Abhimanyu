import React, { use } from 'react'
import { FaBars } from "react-icons/fa";
import { useEffect } from 'react';
import { useState } from 'react';


function Header() {
  const [mobile, setMobile] = React.useState(false)
  const [tablet, setTablet] = React.useState(false)
  const [desktop, setDesktop] = React.useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setMobile(true)
        setTablet(false)
        setDesktop(false)
      } else if (window.innerWidth <= 1024) {
        setMobile(false)
        setTablet(true)
        setDesktop(false)
      } else {
        setMobile(false)
        setTablet(false)
        setDesktop(true)
      }
    };

    handleResize(); // Call the function initially to set the state based on the current window size
    window.addEventListener('resize', handleResize); // Add event listener to handle window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener on component unmount
    };
  }, []);
  
  return (
    <div>

      <header className='header-container'>
      <header className='header'>
            <div>
              {mobile && <FaBars className='bar-header' />} 
            <img src='/logo.png' alt="Logo" className="logo" />
            </div>
            <div className='header-mid'>
                <img src='logo-text.svg' alt="logo-text" className="logo-text" />
            </div>
            <div className='header-right'>
              <div>
                <img src='search.svg' alt="search" className="search-header" />
              </div>
              <div>
                <img src='heart.svg' alt="heart" className="heart-header" />
              </div>
              <div>
                <img src="shopping-bag.svg" alt="shopping-bag" className="shopping-bag-header" />
              </div>
              <div className='responsive-hidden'>
                <img src="profile.svg" alt="profile" className="profile-header" />
              </div>
              <div className='lang-changer responsive-hidden'>
                <p className="lang-changer-text">ENG</p>
                <img src="down-row.svg" alt="down-row" className="down-row" />
              </div>

            </div>
        </header>
        <div className='header-bottom'>
            <div className='header-bottom-under'>
                <p className='header-bottom-text'>SHOP</p>
                <p className='header-bottom-text'>SKILLS</p>
                <p className='header-bottom-text'>STORIES</p>
                <p className='header-bottom-text'>ABOUT</p>
                <p className='header-bottom-text'>CONTACT US</p>
            </div>
            
        </div>
        </header>
      
        
    </div>
  )
}

export default Header