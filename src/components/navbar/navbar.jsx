import React from 'react'
import './navbar.css'
import { motion } from 'framer-motion'
import Sidebar from '../sidebar/sidebar'


function Navbar() {
  return (
    <div className="navbar">
      {/* Sidebar */}

      <Sidebar />

      <div className="wrapper">
        <motion.span initial={{opacity: 0, y: -100}} animate={{opacity: 1, y: 0}} transition={{duration: 1}}>KRAKEN RESTAURANT</motion.span>

        <div className="social">
          <a href="#"><i className="fab fa-facebook-f fa-2x"></i></a>
          <a href="#"><i className="fab fa-instagram fa-2x"></i></a>
          <a href="#"><i className="fab fa-twitter fa-2x"></i></a>
          <a href="#"><i className="fab fa-youtube fa-2x"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
