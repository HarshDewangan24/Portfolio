import React, { useState } from 'react';
import './Sidebar.css';
import Logo from '../../assets/logo.svg';

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);
  return (
    <>
     <aside className={toggle ? "aside show-menu" : "aside"}>
      <a href="#home" className='nav__logo'>
        <img src={Logo} alt="" />
      </a>

      <nav className='nav'>
        <div className='nav__menu'>
          <div className='nav_list'>
            <li className='nav__item'>
              <a href="#home" className='nav__link'>
                <i className='fa-brand icon-home'></i>
              </a>
            </li>

            <li className='nav__item'>
              <a href="#about" className='nav__link'>
                <i className='fa-brand icon-user-following'></i>
              </a>
            </li>

            <li className='nav__item'>
              <a href="#Services" className='nav__link'>
                <i className='fa-brand icon-briefcase'></i>
              </a>
            </li>

            <li className='nav__item'>
              <a href="#resume" className='nav__link'>
                <i className='fa-brand icon-graduation'></i>
              </a>
            </li>

            <li className='nav__item'>
              <a href="#work" className='nav__link'>
                <i className='fa-brand icon-layers'></i>
              </a>
            </li>

            <li className='nav__item'>
              <a href="#blog" className='nav__link'>
                <i className='fa-brand icon-note'></i>
              </a>
            </li>

            <li className='nav__item'>
              <a href="#contact" className='nav__link'>
                <i className='fa-brand icon-bubble'></i>
              </a>
            </li>
          </div>
        </div>
      </nav>

      <div className='nav__footer'>
        <span className='copyright'>&copy; 2022 - 2023.</span>
      </div>
    </aside>

    <div className={toggle ? "nav__toggle nav__toggle-open" : "nav_toggle"} onClick={() => showMenu(!toggle)}>
      <i className="icon-menu"></i>
    </div>
    </>
  )
}

export default Sidebar