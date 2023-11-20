import './aboutUs.css'
import {motion} from 'framer-motion'

function AboutUs() {

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

    const textVariants2 = {
        initial:{
            x:500,
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

  return (    

    <div className="aboutUs">
    
        <div>
        <motion.h1 className='text-center' variants={textVariants} initial="initial" whileInView="animate">ABOUT US</motion.h1>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6"  >
                    <motion.div className="aboutImg" variants={textVariants} initial="initial" whileInView="animate" >
                        <img className="imgCusVert" src="../../src/media/about1.jpeg" alt=""/>
                        <img className="imgCus" src="../../src/media/about 3.jpeg" alt="" />
                    </motion.div>
                    <motion.div className="aboutImg2" variants={textVariants} initial="initial" whileInView="animate" >
                        <img className="imgCus" src="../../src/media/about4.webp" alt="" />
                        <img className="imgCusVert" src="../../src/media/about2.webp" alt="" />
                    </motion.div>
                </div>
                <div className="col-12 col-md-6 aboutText">
                    <motion.h2 variants={textVariants2} initial="initial" whileInView="animate">Our Story</motion.h2>
                    <motion.p variants={textVariants2} initial="initial" whileInView="animate">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, at. Ab esse assumenda ipsam totam. Possimus laborum cumque nisi soluta minima earum sed atque ducimus, iusto delectus quae ullam numquam assumenda similique nemo temporibus rerum ab animi voluptas hic maiores laudantium? Accusamus voluptas dolorem numquam quia iure laboriosam libero inventore!
                    </motion.p>
                </div>
            </div>
            
        </div>
      
    </div>
  )
}

export default AboutUs