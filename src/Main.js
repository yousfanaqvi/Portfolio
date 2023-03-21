import React , {useEffect, Suspense} from "react";
import Loader from "./Loader";
import Home from "./home";
import Skills from "./skills/skills";
import Nav from "./Nav";
import Projects from "./Projects";
import Contact from "./Contact"
import {motion,useScroll, AnimatePresence} from "framer-motion"
import AnimatedCursor from "react-animated-cursor"

const Main = () => {
    const[showIntro,setIntro]=React.useState(true);

    useEffect(()=>{
        setTimeout(()=>{
              setIntro(false);      
        },2800)
    })


return(
    <div id="main"> 
            <AnimatedCursor 
                innerSize={12}
                outerSize={18}
                color='248, 228, 174'/>
        <AnimatePresence >
        {showIntro?
                <motion.div
                key="intro"
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                exit={{ opacity:0}}
                transition={{ duration: 1, ease:'easeOut' }}>
                        <Loader/>
                       

                </motion.div>
        :
        <>
        
            
        <Nav/>
        
        <Home />
        <Skills />
        <Projects/>
        <Contact/> 
        <footer>
            <p>
            Designed and created by <a href="/">Yousfa Naqvi</a>.
            </p>
        </footer>
        </>
        } 
        </AnimatePresence>        
     
    </div>
);
}
 export default Main;