import { useState } from 'react'
import { motion } from 'framer-motion'
// import { Else, If, Then } from 'react-if'
import Buttons from './buttons/buttons'
import './menu.css'

function Menu() {

  const titleVariants = {
    initial:{
        opacity: 0,
        y: -100
    },
    animate:{
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
  }

  return (
    <div className="menu">

        <div>
            <motion.h2 initial="initial" whileInView="animate" variants={titleVariants}>OUR MENU</motion.h2>
            
            
        </div>

        <Buttons />

    </div>
  )
}

export default Menu