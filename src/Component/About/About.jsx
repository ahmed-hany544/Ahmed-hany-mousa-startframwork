import React from 'react'
import mido from '../About/About.module.css'
export default function About() {
  return <>
  
  <div className={`${mido.his} `}
  >
    
    <h1 className={`${mido.she} `}
    >ABOUT COMPONENT</h1>
    <div className="d-flex flex-row justify-content-center align-items-center gap-3 ">
  <div className={`${mido.ooo}`}></div>
  <div className="h-100 d-flex justify-content-center align-items-center text-center text-light"><i  className="fa-solid fa-star "></i></div>
  
  <div className={`${mido.ooo}`}></div>
    </div>
    <div className="container ">
  <div className=" row mt-3  ">
<div className='col-sm-6 ps-5 '>
  <p className={`${mido.gg} text-light`}>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
</div>
<div className='col-sm-6'>
  <p className={`${mido.fg} text-light`}>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
  </p>
  </div>
  </div>
  </div>
  </div>
  </>

    

}
