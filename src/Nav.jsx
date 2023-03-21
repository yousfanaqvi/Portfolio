import React from 'react'
import {Link} from "react-scroll"
import "animate.css"
export default function Nav() {

  return (
    <header>
      <nav className='animate__animated animate__fadeInDown animate__slow animate__delay-3s' >
      <a href='/' id="logo-link">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><g fill="" stroke="#EAEAEA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M19.875 6.27A2.225 2.225 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1-2.184 0l-6.75-4.27A2.225 2.225 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"/><path d="m10 8l2 5l2-5m-2 8v-3"/>
      </g></svg>
      </a>
      <ul>
        <li>
          <Link to='home' spy={true} activeClass="active" >INTRO</Link>
        </li>
        <li>
          <Link to='skills' spy={true} activeClass="active"  >ABOUT ME</Link>
        </li>
        <li>
         <Link to="projects" spy={true} activeClass="active" >MY WORK</Link> 
        </li>
        <li>
          <Link to="contact" spy={true} activeClass="active" >LET'S TALK</Link>
        </li>
      </ul>
        </nav>
    </header>
  )
}
