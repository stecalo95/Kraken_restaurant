import './parallax.css'
import { useRef } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'

function Parallax({type}) {

    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target:ref,
        offset:["start start", "end start"]
    });

    const yText=useTransform(scrollYProgress, [0, 1], ["0%", "400%"])
    const yBg=useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div className="parallax" ref={ref} style={{background: type==="aboutUs" ? "linear-gradient(180deg,rgba(20, 33, 61,0.8), rgb(20, 33, 61))" : "linear-gradient(180deg,rgba(20, 33, 61,0.8),rgb(20, 33, 61))"}}>
      <motion.h1 style={{y: yText}}>{type === "aboutUs" ? "About" : "Menu"}</motion.h1>

      <motion.div className="tentacles"></motion.div>
      <motion.div style={{y: yBg}} className="lobster"></motion.div>
    </div>
  )
}

export default Parallax