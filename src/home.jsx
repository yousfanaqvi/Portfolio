import React, { useEffect } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import resume from "./assets/resume.pdf"
import AOS from 'aos';
import {Canvas} from "@react-three/fiber"
import { OrbitControls , MeshDistortMaterial , GradientTexture} from '@react-three/drei';
import {motion,useScroll,useTransform} from "framer-motion"
import "animate.css"
import { Sphere } from '@react-three/drei';
function Home() {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 0.08], [0,-310]);
    const y = useTransform(scrollYProgress, [0, 0.09], [0,-305]);
    const y2 = useTransform(scrollYProgress, [0, 0.1], [0, -300]);
    const y3 = useTransform(scrollYProgress, [0, 0.12], [0, -270]);
    const y4 = useTransform(scrollYProgress, [0, 0.13], [0, -230]);
    const y5 = useTransform(scrollYProgress, [0, 0.14], [0, -180]);
    const y6 = useTransform(scrollYProgress, [0, 0.15], [0, -140]);

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    useEffect(()=>{
      setTimeout(()=>{
        const component = document.getElementById('intro');
        component.parentNode.removeChild(component);
        AOS.refresh();
  },1000)
      
    })

  return (
        <div id="home">
        <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}/>
        <div >
          <motion.div style={{y:y6}} className='right animate__animated  animate__fadeIn animate__slow animate__delay-2s'><Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5}/>
            <directionalLight position={[3,20,1]}/>
            <mesh>
              <Sphere args={[1.1,100,200]} scale={matches ? 2:2.4 }>
              <MeshDistortMaterial
                attach="material"
                distort={matches ?0.6:0.7}
                speed={2.5}
                metalness={1.8}
                >
                <GradientTexture stops={[0.3,0.6,0.9]} colors={['#ED00ED','#08078E','#00FAD7']} size={250} />
                </MeshDistortMaterial>
                </Sphere>
              
            </mesh>
            
          </Canvas>
          </motion.div>
          
        </div>
            <div className='desription-container'>
            <div className='name-title '>
              <motion.div style={{y:x}}><span className='animate__animated animate__fadeInDown animate__slow animate__delay-3s'>Yousfa Naqvi</span></motion.div> 
              <motion.div style={{y:y}} ><h5 className='animate__animated animate__fadeInDown animate__slow animate__delay-3s heading5'>  WEB DEVELOPER</h5></motion.div>    
            </div>
            <div className='home-description-left animate__animated animate__fadeInUp animate__slow animate__delay-4s'>
                <motion.div style={{y:y2}}><span className=''> I am passionate in creating</span></motion.div> 
                <motion.div style={{y:y3}} ><span>Digital experiences that</span> </motion.div> 
                <motion.div style={{y:y4}} ><span>Inspire and enhance</span></motion.div>                
                <span className='cta-btn-span'>
                  <motion.div style={{y:y6}} ><a href="#contact" className="cta-btn  animate__animated animate__zoomIn  animate__slow animate__delay-5s">Let's Talk!</a></motion.div>
                  <motion.div style={{y:y6}} ><a href={resume} download={true} className="cta-btn  animate__animated animate__zoomIn animate__slow animate__delay-5s">Get Resume</a></motion.div>
                </span>
            </div>    
        </div>
        
        </div>

  )
}

export default Home