import React from 'react'
import "./Loader.css"
import {motion , AnimatePresence} from 'framer-motion'
export default function Loader() {


  return (
    <div className='Loader-container' id='intro'>
        <AnimatePresence >

        <motion.svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" className='logo' fill="transparent">
        <g  strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
            <motion.path 
            initial={{  
                        pathLength:0
                    }}
            animate={{  opacity: 1,
                        pathLength:1 
                    }}
            transition={{
                duration: 2,
                ease: "easeInOut",
            }}
            exit={{opacity: 0 , transition:{ease:"easeOut"}}}

            stroke='#EAEAEA'
            strokeWidth={1.3}
            fill="tranparent"
                d="M19.875 6.27A2.225 2.225 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1-2.184 0l-6.75-4.27A2.225 2.225 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"/>
            <motion.path
            initial={{  opacity: 0,
                        pathLength:0
                    }}
            animate={{  opacity: 1,
                        pathLength:1 
                    }}
            transition={{
                delay:2,
                duration: 1,
                ease: "easeInOut",
            }}
            exit={{opacity: 0 , transition:{ease:"easeOut"}}}
            fill="tranparent"
            stroke='#EAEAEA'
            strokeWidth={1.5}
          d="m10 8l2 5l2-5m-2 8v-3"/>
        </g>
    </motion.svg>
    </AnimatePresence>
    </div>
  )
}
