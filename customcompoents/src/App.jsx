
import { useState } from 'react'
import './App.css'
import Accoridan from './Components/Accoridan'
import {motion} from "framer-motion"
import Poppers from './Components/Poppers'


const content = [{
  id: 1,
  title: "title 1",
  content: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." ,
},

{
  id: 2,
  title: "title 2",
  content: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." ,
},

{
  id: 3,
  title: "title 3",
  content: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." ,
}
]

function App() {



  return (
    <>
      <div className='App'>
        {/* <Accoridan content={content} /> */}


        <Poppers item={content[0]} />

        <Poppers item={content[1]} />

        {/* <motion.div animate={{x: x}} className='box'>

        </motion.div>


        <button onClick={() => seTx(x+100)}>click</button> */}

      </div>
    </>
  )
}

export default App
