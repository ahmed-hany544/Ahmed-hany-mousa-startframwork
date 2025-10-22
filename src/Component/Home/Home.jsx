import React from 'react'
import homy from '../Home/Home.module.css'
import logo from '../../assets/avataaars.svg'
export default function Home() {
  return <>
<div className={`${homy.hero} `}
>
  <div className='text-center ' ><img src={logo} alt="" className={`${homy.ee}`} ></img></div>
  <h1 className={`${homy.he}`}
  >START FRAMEWORK</h1>
  <div className="d-flex flex-row justify-content-center align-items-center gap-3 ">
<div className={`${homy.lo}`}></div>
<div className="h-100 d-flex justify-content-center align-items-center text-center text-light"><i  className="fa-solid fa-star "></i></div>

<div className={`${homy.lo}`}></div>
  </div>
<p className="text-light mt-3">Graphic Artist - Web Designer - Illustrator</p>

</div>

  </>
  
}
