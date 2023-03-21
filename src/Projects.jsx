import React from 'react'
import "./project.css"
import "../src/skills/skills.css"
import css from "./skills/css.png"
import html from "./skills/html.png"
import js from "./skills/js.png"
import emailjs from "./skills/emailjs.jpg"
import spoonacular from "./skills/spoonacular.svg"
import bs from "./skills/bs.png"
import react from "./skills/react.png"
import stripe from "./skills/stripe.png"
import mongodb from "./skills/mongodb.png"
import redux from "./skills/Redux.png"
import node from "./skills/node.png"
import express from "./skills/express.png"
import passport from "./skills/passport.png"

import AOS from 'aos';
import 'aos/dist/aos.css';
import Tilt from 'react-parallax-tilt';
import blog1 from "./assets/blog1.png"
import zara from "./assets/zara3.png"
import recipefinder from "./assets/recipefinder.png"
import vineyard from "./assets/vineyard.png"
import portfolio from "./assets/portfolio.png"
import c from "./assets/web.png"

function Projects() {
    AOS.init();

  return (
    <div id="projects"  >
      <span className='heading-span' data-aos="fade-up" data-aos-duration="1000">
        <img src={c} className='icon'/>
        <h2 className='heading' >My work</h2>
      </span>        
      <div className='projects-container'>
            <div className='container'>
              <Tilt>
              <a href="https://blog-cdu1ljp5q-yousfanaqvi.vercel.app/" target="blank"><div className='img-container' data-aos="fade-right" data-aos-duration="1200" >
               <img src={blog1} className='project-thumbnail'/>        
              </div></a>  
              </Tilt>
            </div>
            <div className='desc-container' data-aos="fade-left" data-aos-duration="1200"> 
            <h2>User Authentication and CRUD BLOG Application</h2>
                <p className='desc-para'>
                    A web application that allows users to create accounts, log in securely, and publish blog posts.
                    The application ensures that <span className='highlight-text'>only registered users</span> can access certain features.
                    Once logged in, users can create and edit blog posts.
                    This application <span className='highlight-text'>encrypts user passwords</span> to protect them from unauthorized access.
                    The blog can be organized into categories for easy navigation and
                    the application also include user profiles that display information about each user which can be updated. This application is connected to database to store all user data and posts.
                </p>
                <div className='project-tools'>
                    <img src={react}  title="React" className="tools-thumbnail" alt='React'/>
                    <img src={mongodb}  title="Mongo DB" className="tools-thumbnail" alt='Mongodb'/>
                    <img src={express}  title="Express.js" className="tools-thumbnail" alt='express.js'/>
                    <img src={passport}  title="Passport.js" className="tools-thumbnail" alt='passport.js'/>

                </div>
                <div className='project-cta'>
                  <a className='p-cta-btn' href='https://github.com/yousfanaqvi/Blog.git' target="blank">Github</a>
                  <a className='p-cta-btn' href="https://blog-cdu1ljp5q-yousfanaqvi.vercel.app/" target="blank">Live demo</a>
                </div>
            </div>
          
          <div className='desc-container' data-aos="fade-right" data-aos-duration="1200"> 
              <h2>Shopping Cart</h2>
              <p className='desc-para'>
              The application displays a list of available products, organized by categories.
              Users can browse the products, view their details and choose the size they wish to purchase.
              Users can add products to their cart as they browse the store. The application keeps track of the items in the cart and allow users to modify the quantity,
              remove items from the cart before checkout. The application is integrated with <span className='highlight-text'>Stripe</span> to process the payments.
              </p>
              <div className='project-tools'>
                    <img src={react}  title="React" className="tools-thumbnail" alt='React'/>
                    <img src={node}  title="Node.js" className="tools-thumbnail"/>
                    <img src={express}  title="Express.js" className="tools-thumbnail"/>
                    <img src={redux}  title="Redux" className="tools-thumbnail"/>
                    <img src={bs}  title="Bootstrap" className="tools-thumbnail"/>
                    <img src={stripe} style={{width:'40px'}} title="Stripe" className="tools-thumbnail"/>


                </div>
                <div className='project-cta'>
                  <a className='p-cta-btn' href='https://github.com/yousfanaqvi/shoppingcart.git' target="blank">Github</a>
                  <a className='p-cta-btn' href='https://shoppingcart-beta.vercel.app/' target="blank">Live demo</a>
                </div>
          </div>
          <div className='container'>
          <Tilt>
            <a href='https://shoppingcart-beta.vercel.app/' target="blank"><div className='img-container' data-aos="fade-left" data-aos-duration="1200">
             <img src={zara} className='project-thumbnail'/>       
            </div> 
            </a>   
          </Tilt>
          </div>

          <div className='container'>
        <Tilt>
          <a href='https://recipe-finder-yousfanaqvi.vercel.app/' target="blank"><div className='img-container' data-aos="fade-right" data-aos-duration="1200">
          <img src={recipefinder} className='project-thumbnail'/>        
          </div>
          </a> 
        </Tilt>
        </div>
          <div className='desc-container' data-aos="fade-left" data-aos-duration="1200"> 
              <h2>Recipe Finder</h2>
              <p className='desc-para'>
                The application is integrated with <span className='highlight-text'>Spoonacular API</span> that allows the user to search for recipes using keywords, ingredients, dietary restrictions, generates meal plan, and other relevant criteria.
                Search results displays the recipe name, image, and a link to the complete recipe.
                The application provides the detailed recipe instructions, including the ingredient list, preparation time, cooking time, serving size, and nutrition information. 
                It allows users to  generate a meal plan by giving total calories for a day. 
              </p>
              <div className='project-tools'>
                    <img src={react}  title="React" className="tools-thumbnail" alt='React'/>
                    <img src={spoonacular}  title="Spoonacular API" className="tools-thumbnail" />
                    <img src={css}  title="CSS" className="tools-thumbnail" />
                    <img src={js} style={{backgroundColor:'white'}} title="Javascript" className="tools-thumbnail" />

                </div>
                <div className='project-cta'>
                  <a className='p-cta-btn' href='https://github.com/yousfanaqvi/recipeFinder.git' target="blank">Github</a>
                  <a className='p-cta-btn' href='https://recipe-finder-yousfanaqvi.vercel.app/' target="blank">Live demo</a>
                </div>
          </div>
          
          <div className='desc-container' data-aos="fade-right" data-aos-duration="1200"> 
            
              <h2>Vineyard landing page</h2>
              <p className='desc-para'>
                  A landing page web application with parallax effect using Framer motion animations.
                  It is designed and developed using Figma and React.js, has a responsive, accessible and dynamic layout to enable users to easily navigate the site.
                  The web application is integrated with emailjs to send messages directly to the owner's email and linked with Whatsapp and other social media to make contact.
              </p>
              <div className='project-tools'>
                    <img src={react}  title="React" className="tools-thumbnail" alt='React'/>
                    <img src={emailjs} style={{width:'60px'}} title="Emailjs" className="tools-thumbnail" />
                    <img src={css}  title="CSS" className="tools-thumbnail" />
                    <img src={js} style={{backgroundColor:'white'}} title="Javascript" className="tools-thumbnail" />

                </div>
                <div className='project-cta'>
                  <a className='p-cta-btn' href='https://github.com/yousfanaqvi/landing-page-vineyard.git' target="blank">Github</a>
                  <a className='p-cta-btn' href='https://landing-page-vineyard.vercel.app/' target="blank">Live demo</a>
                </div>
          </div>
          <div className='container'>
          <Tilt>
            <a href='https://landing-page-vineyard.vercel.app/' target="blank"><div className='img-container' data-aos="fade-left" data-aos-duration="1200">
              <img src={vineyard} className='project-thumbnail'/>         
            </div></a>
          </Tilt>
          </div>
          
          <div className='container'>
        <Tilt>
          <a href='https://portfoliotemplatemplate.vercel.app/' target="blank"><div className='img-container' data-aos="fade-right" data-aos-duration="1200">
            <img src={portfolio} className='project-thumbnail'/>      
          </div>
          </a>    
        </Tilt>
        </div>
          <div className='desc-container' data-aos="fade-left" data-aos-duration="1200"> 
           <h2>Personal Portfolio</h2>
              <p className='desc-para'>
              A personal portfolio that showcases an individual's skills, achievements, and work experience with animations to catch the user's attention and draw them into the content.
              The application is designed to be responsive and accessible on different devices.
              </p>
              <div className='project-tools'>
                    <img src={html}  title="Html" className="tools-thumbnail" />
                    <img src={css}  title="CSS" className="tools-thumbnail" />
                    <img src={js} style={{backgroundColor:'white'}} title="Javascript" className="tools-thumbnail" />

                </div>
                <div className='project-cta'>
                  <a className='p-cta-btn' href='https://github.com/yousfanaqvi/portfoliotemplate.git' target="blank">Github</a>
                  <a className='p-cta-btn' href='https://portfoliotemplatemplate.vercel.app/' target="blank">Live demo</a>
                </div>
          </div>
          
        </div>
       

        
    </div>
  )
}

export default Projects