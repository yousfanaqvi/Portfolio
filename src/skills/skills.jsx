import React , {useEffect}from 'react'
import "./skills.css"
import css from "./css.png"
import html from "./html.png"
import js from "./js.png"
import bs from "./bs.png"
import react from "./react.png"
import json from "./json.png"
import mongodb from "./mongodb.png"
import seo from "./seo.png"
import redux from "./Redux.png"
import node from "./node.png"
import express from "./express.png"
import threejs from "./threejs.png"

import c from "../assets/backend.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills() {
  
  useEffect(() => {
    AOS.init({
        delay: 300,
        easing: 'ease',
        duration:400
    });
    AOS.refresh(); 
  }, []);
  
  return (
        <div id="skills"> 
        <span className='heading-span' data-aos="fade-up" data-aos-duration="1000">
            <img src={c} className='icon'/>
            <h2 className='heading' >About me</h2>
        </span>            
        <div id="about-me">
              
                <p data-aos="fade-up">
                Greetings! I go by <span className='highlight-text' data-aos="fade-up">Yousfa</span> and I love creating content on the internet.<br/> 
                My passion for web development dates back to 2017 when I graduated my College.<br/><br/>Since then, I have invested countless hours honing my skills in <span className='highlight-text' data-aos="fade-up">HTML, CSS, and JavaScript</span>, as well as learning about other web development tools and frameworks like <span className='highlight-text' data-aos="fade-up">React and Express.</span>
                </p>
                <p data-aos="fade-up" data-aos-delay="800">
                Through various personal projects, I have gained experience in creating responsive layouts, incorporating <span className='highlight-text' data-aos="fade-up">User authentication</span>, and implementing dynamic functionality using <span className='highlight-text' data-aos="fade-up">APIs</span>. <br/><br/>
                I am eager to continue learning and growing as a web developer, and I'm excited to work with a team that values innovation, creativity, and teamwork.
                </p>
        
            </div>
            <span className='tools-text'> Tools and platforms I am familiar with </span>
            <div className='wrapper'>
            <div className='marquee-group' > 
                <div className='img-div' > 
                    <img src={html} title="HTML" className="skill-img"/>
                    <h6>HTML</h6>
                </div>
                <div className='img-div' > <img src={css} title="CSS" className="skill-img"/>
                    <h6>Css</h6>
                </div> 
                <div className='img-div' > <img src={js} title="Javascript" className="skill-img"/>
                    <h6>Javascript</h6>
                </div> 
                <div className='img-div' > <img src={bs} title="Bootstrap" className="skill-img"/>
                    <h6>Bootstrap</h6>
                </div> 
                <div className='img-div' > <img src={react} title="React" className="skill-img"/>
                    <h6>React</h6>
                </div>
                <div className='img-div' > <img src={threejs} title="Threejs" className="skill-img"/>
                    <h6>Threejs</h6>
                </div>
                <div className='img-div' > <img src={redux} title="React Redux" className="skill-img"/>
                    <h6>Redux</h6>
                </div>
                <div className='img-div' ><img src={mongodb}  title="MongoDB" className="skill-img"/>
                    <h6>MongoDB</h6>
                </div>
                <div className='img-div' ><img src={node}  title="Node.js" className="skill-img"/>
                    <h6>Node.js</h6>
                </div>
                <div className='img-div' ><img src={express}  title="Express" className="skill-img"/>
                    <h6>Express</h6>
                </div>
                <div className='img-div' > <img src={json} title="Json" className="skill-img"/>
                     <h6>Json</h6>
                </div>
                <div className='img-div' > <img src={seo} title="SEO" className="skill-img"/>
                     <h6>SEO</h6>
                </div>
          </div>
          <div aria-hidden='true' className='marquee-group' > 
                <div className='img-div' > 
                    <img src={html} title="HTML" className="skill-img"/>
                    <h6>HTML</h6>
                </div>
                <div className='img-div' > <img src={css} title="CSS" className="skill-img"/>
                    <h6>Css</h6>
                </div> 
                <div className='img-div' > <img src={js} title="Javascript" className="skill-img"/>
                    <h6>Javascript</h6>
                </div> 
                <div className='img-div' > <img src={bs} title="Bootstrap" className="skill-img"/>
                    <h6>Bootstrap</h6>
                </div> 
                <div className='img-div' > <img src={react} title="React" className="skill-img"/>
                    <h6>React</h6>
                </div>
                <div className='img-div' > <img src={threejs} title="Threejs" className="skill-img"/>
                    <h6>Threejs</h6>
                </div>
                <div className='img-div' > <img src={redux} title="React Redux" className="skill-img"/>
                    <h6>Redux</h6>
                </div>
                <div className='img-div' ><img src={mongodb}  title="MongoDB" className="skill-img"/>
                    <h6>MongoDB</h6>
                </div>
                <div className='img-div' ><img src={node}  title="Node.js" className="skill-img"/>
                    <h6>Node.js</h6>
                </div>
                <div className='img-div' ><img src={express}  title="Express" className="skill-img"/>
                    <h6>Express</h6>
                </div>
                <div className='img-div' > <img src={json} title="Json" className="skill-img"/>
                     <h6>Json</h6>
                </div>
                <div className='img-div' > <img src={seo} title="SEO" className="skill-img"/>
                     <h6>SEO</h6>
                </div>
          </div>
          </div>
           
        </div>
  )
}

export default Skills