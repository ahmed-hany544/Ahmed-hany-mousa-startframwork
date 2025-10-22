import React from 'react'
import { NavLink } from 'react-router-dom'
import style from '../Navbar/Navbar.module.css'
export default function Navbar() {
  return <>
   <nav  className={`${style.navbar} navbar-expand-lg navbar p-4  fixed-top mb-5 `  } >
  <div className="container">
    <a className={`${style.brand}`} href="#">START  FRAMEWORK</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse
    " id="navbarSupportedContent">
      <ul className=" ms-auto py-3 mb-2 navbar-nav
       mb-lg-0">
        <li className="nav-item">
          <NavLink className={`${style.link} `}
        aria-current="page" to={'about'} >ABOUT</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className= {`${style.link} `} to={'portfolio'}>PORTFOLIO</NavLink>
          
        </li>
         <li className="nav-item">
          <NavLink className={`${style.link} `}  to={'contact'}>CONTACT</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>


  </>
}
