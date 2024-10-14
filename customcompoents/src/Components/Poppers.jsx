import { motion,AnimatePresence } from "framer-motion";
import { useState } from "react";

const Poppers = ({item}) => {
   
    const [isVisble, setIsVisible] = useState(false);

  return (
    <div className='poppers'>
        <button onClick={() => setIsVisible(!isVisble)}>Click me</button>
        <AnimatePresence>
        {isVisble && <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.5}} className='pop-content'>
            <div className='pop-title'>{item?.title}</div >
            <div className='pop-text'>{item?.content}</div>
        </motion.div>}
        </AnimatePresence>
    </div>
  )
}

export default Poppers