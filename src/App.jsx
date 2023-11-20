import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Header from './components/header/header'
import Parallax from './components/parallax/parallax'
import AboutUs from './components/aboutUs/aboutUs'
import Menu from './components/menu/menu'
import Foooter from './components/footer/footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import {motion} from 'framer-motion'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      <section id="Home">
        <Navbar />
        <Header />
      </section>
      <section >
        <Parallax type="aboutUs" />
      </section>
      <section id='About'>
        <AboutUs />
      </section>
      <section>
      <Parallax type="menu" />
      </section>
      <section id='Menu'>
        <Menu />
      </section>
      <section id='Contacts'>
        <Foooter />
      </section>
      
      
      
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        
    </>
  )
}

export default App
