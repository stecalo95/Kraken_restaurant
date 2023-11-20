import React from 'react'
import './header.css'

import { motion } from 'framer-motion'

function Header() {

    const textVariants = {
        initial:{
            x:-500,
            opacity: 0
        }, 
        animate:{
            x:0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1
            }
        }
    }

    const slideVariants = {
        initial:{
            x:0,
            
        }, 
        animate:{
            x:"-220%",
            transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 20,
                staggerChildren: 0.1
            }
        }
    }

  return (

    <div className="header">

        <div className="headerWrapper">
            <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants}>SeaFood Restaurant</motion.h2>
                <motion.h1 variants={textVariants}>KRAKEN</motion.h1>
                <motion.div className="buttons" variants={textVariants}>
                    <motion.button variants={textVariants}>Book a table</motion.button>
                </motion.div>
            </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={slideVariants} initial="initial" animate="animate">
            Sail with us to a sea of flavors
        </motion.div>
        <div className="imageContainer">
            <img className="logo" src="../../src/media/logo2.png" alt="" />
        </div>
    </div>
  )
}

export default Header
