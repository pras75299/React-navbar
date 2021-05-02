import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  return <nav>
  <div className="nav-center">
    <div className="nav-header">
      <img src={logo} alt="Logo" />
      <button className="nav-toggle"><FaBars/></button>
    </div>
    <div className="links-container show-container">
      <ul className="links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
    <ul className="social-icons">
      <li>
        <a href="https://twitter.com/home"><FaTwitter/></a>
      </li>
      <li>
        <a href="https://twitter.com/home">Contact</a>
      </li>
      <li>
        <a href="https://twitter.com/home">Contact</a>
      </li>
    </ul>
  </div>
  </nav>
}

export default Navbar
