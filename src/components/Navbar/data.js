import React from 'react'
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Project from '../Project/Project';

export const links = [
  {
    id: 1,
    url: '/',
    text: 'Home',
    component: Home
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
    component: About
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
    component: Project
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
    component: Contact
  }
]

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
]
