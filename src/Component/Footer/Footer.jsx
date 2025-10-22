import React from 'react'
import mm from '../Footer/Footer.module.css'
export default function Footer() {
  return <>
   <div>
  <footer className={`${mm.test} text-white pt-5 `}>
    <div className="container">
      <div className="row text-center pt-5 pb-5
    ">
        <div className="col-md-4 mb-4">
          <h5 className={ `${mm.wwe}` }>LOCATION</h5>
          <p className="mb-0">2215 John Daniel Drive</p>
          <p className="mt-3"
          >Clark, MO 65243</p>
        </div>
        <div className="col-md-4 mb-4">
          <h5 className={ `${mm.wwe}` }>AROUND THE WEB</h5>
          <div className="d-flex justify-content-center gap-2
  mt-3">
            <a href="#" className="border text-light btn
     rounded-circle">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="btn
     border text-light
    rounded-circle">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="btn border text-light
      rounded-circle">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="#" className="btn border text-light
      rounded-circle">
              <i className="fas fa-globe" />
            </a>
          </div>
        </div>
        <div className="col-md-4
 mb-4">
          <h5 className={ `${mm.wwe}` }>ABOUT FREELANCER</h5>
          <p className={
  `${mm.rr}`
  }
  >Freelance is a free to use, licensed Bootstrap theme created by Route
          </p>
        </div>
      </div>
    </div>
    <div className={`${mm.demo} text-center py-4 mt-4`}>
      <p className="mb-0">Copyright
        © Your Website 2021</p>
    </div>
  </footer>

</div>
</>}