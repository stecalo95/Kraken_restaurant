import { motion } from "framer-motion"


function ToggleButton({setOpen}) {
  return (
    <button onClick={() => setOpen((prev) => !prev)} className="toggleButton">
        <motion.i className="fa-solid fa-bars" variants={{open: {display: "none" , scale: 0}, closed: {display: "block"}}} transition={{duration: 0.5 }}></motion.i>
        <motion.i className="fa-solid fa-x" variants={{ closed: {display: "none" , scale: 0}, open: {display: "block"}}} ></motion.i>
    </button>
  )
}

export default ToggleButton