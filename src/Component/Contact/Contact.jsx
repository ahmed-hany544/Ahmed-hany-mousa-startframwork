import React from 'react'
import con from '../Contact/Contact.module.css'
export default function Contact() {
  return <>
 <div className='container mb-5 pb-3 '>
<div className='text-center mb-5'>
<h1 className={`${con.co}`}>CONTACT SECTION</h1>
<div className='d-flex flex-row justify-content-center align-items-center  gap-1 '>
  <div className={`${con.pc}`}></div>
<div className="p-3  d-flex justify-content-center align-items-center text-center text-info"><i  className={`fa-solid fa-star ${con.ii}`} ></i></div>
  <div className={`${con.pc}`}></div>
</div>
 </div>
 <div className={`${con.mk} mx-auto`}>
  <form>
    <input className={`form-control mb-3 border-0 border-bottom shadow-none ${con.hj} `} type="text" placeholder="userName" />
<input className={`form-control mb-3 border-0 border-bottom shadow-none ${con.hj} `} type="number" placeholder="userAge" />
  <input className={`form-control mb-3 border-0 border-bottom shadow-none ${con.hj} `} type="email" placeholder="userEmail" />
<input className={`form-control mb-3 border-0 border-bottom shadow-none ${con.hj} `} type="password" placeholder="userPassword" />
<button className={` ${con.bbtn} text-white border-0 px-3 py-2 mb-5 mt-2`}> send Massege</button>
  </form>


 </div>
  </div>
  
  
  
  </>
  
  
}
