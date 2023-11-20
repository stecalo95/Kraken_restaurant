import './buttons.css'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Switch, Case, Default } from 'react-if';

function Buttons() {

  const [selected, setSelected] = useState(1)

  const [data, setData] = useState([])

  console.log(data);

  useEffect(() => {
    fetch('src/seafood.json').then(response => response.json()).then(data => {setData(data)})
  }, [])

  
  console.log(selected);


  const buttonsVariants = {


    selected:{
        backgroundColor: "var(--sec)",
        color: "var(--black)"
    },
    unselected:{
        backgroundColor: "var(--main)",
        color: "var(--white)",
    },
    transition:{
      duration: 0.5
    }
  }

  const buttonsVariants2 = {

    initial:{
        opacity: 0,
        y: -100
    },
    animate:{
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
    }
    }
    
  }

  const cardVariants = {
    
    initial:{
        x:-100,
        opacity: 0
    }, 
    animate:{
        x:0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1
        }
    }
  }
  return (
    <>
    <motion.div variants={buttonsVariants2} initial="initial" whileInView={"animate"} className="buttons-cus">
        
        <motion.button variants={buttonsVariants} animate={selected == 1 ? "selected" : "unselected"} onClick={() => setSelected(1)} type='button' className="button-cus">All</motion.button>
        <motion.button variants={buttonsVariants} animate={selected == 2 ? "selected" : "unselected"} onClick={() => setSelected(2)} type='button' className="button-cus">Lunch</motion.button>
        <motion.button variants={buttonsVariants} animate={selected == 3 ? "selected" : "unselected"} onClick={() => setSelected(3)} type='button' className="button-cus">Dinner</motion.button>
        <motion.button variants={buttonsVariants} animate={selected == 4 ? "selected" : "unselected"} onClick={() => setSelected(4)}  type='button' className="button-cus">Dessert</motion.button>
      

        
    </motion.div>

<div className="container-fluid">

  <div className="row">

  <Switch>
      <Case condition={selected == 1}>
      {data.map((data) => { return(
        <div className="col-12 col-md-3 my-2"  key={data.id}>
            <motion.div variants={cardVariants} initial="initial" whileInView={"animate"} className="card" style={{width: "18rem", height: "11rem",backgroundColor: "var(--grey)"}} >
            <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">{data.price}</h6>
              <p className="card-text text-truncate">{data.description}</p>
            </div>
          </motion.div>
        </div>
          )
          
        })}
      </Case>
      <Case condition={selected == 2}>
        {data.filter(data => data.category == "lunch").map((data) => { return(
          <div className="col-12 col-md-3 my-2" key={data.id}>
          <motion.div variants={cardVariants} initial="initial" whileInView={"animate"} className="card" style={{width: "18rem", height: "11rem"}} >
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{data.price}</h6>
            <p className="card-text text-truncate">{data.description}</p>
          </div>
        </motion.div>
      </div>
        )})}
      </Case>
      <Case condition={selected == 3}>
        {data.filter(data => data.category == "dinner").map((data) => { return(
          <div className="col-12 col-md-3 my-2" key={data.id}>
          <motion.div variants={cardVariants} initial="initial" whileInView={"animate"} className="card" style={{width: "18rem", height: "11rem"}} >
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{data.price}</h6>
            <p className="card-text text-truncate">{data.description}</p>
          </div>
        </motion.div>
      </div>
        )})}
      </Case>
      <Case condition={selected == 4}>
        {data.filter(data => data.category == "dessert").map((data) => { return(
          <div className="col-12 col-md-3 my-2" key={data.id}>
          <motion.div variants={cardVariants} initial="initial" whileInView={"animate"} className="card" style={{width: "18rem", height: "11rem"}} >
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{data.price}</h6>
            <p className="card-text text-truncate">{data.description}</p>
          </div>
        </motion.div>
      </div>
        )})}
      </Case>
      <Default>
        {data.map((data) => { return(
          <div className="col-12 col-md-3 my-2" key={data.id}>
          <motion.div variants={cardVariants} initial="initial" whileInView={"animate"} className="card" style={{width: "18rem", height: "11rem"}} >
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{data.price}</h6>
            <p className="card-text text-truncate">{data.description}</p>
          </div>
        </motion.div>
      </div>)
        })}
      </Default>
    </Switch>

  </div>

    


      
</div>
    
</>
  )
}

export default Buttons
