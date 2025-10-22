/**import React from 'react'
import immg from '../../assets/poert1.png'
import inng from '../../assets/port2.png'
import iing from '../../assets/port3.png'
import pon from '../Portfolio/Portfolio.module.css'
export default function Portfolio() {
 return <>
  <div className='container '>
    <div className='text-center '>
    <h1 className={`${pon.co}`}>PORTFOLIO COMPONENT</h1>
    <div className='d-flex flex-row justify-content-center align-items-center  gap-1 '>
      <div className={`${pon.pc}`}></div>
    <div className="p-3  d-flex justify-content-center align-items-center text-center text-info"><i  className={`fa-solid fa-star ${pon.ii}`} ></i></div>
      <div className={`${pon.pc}`}>
        <div className='position-absolute top-50  start-50 translate-middle' >
  <i  class="text-white fa-solid fa-plus fa-6x"></i>
</div>
      </div>
    </div>
     </div>
<div className='row gy-3'>
<div className={`col-md-4 ${pon.item} p-3`}>
  <div className='position-relative '>
    <img src={immg} alt="" className="w-100 rounded-3"></img>
    <div className={`${pon.lay} rounded-3`}>
      <div className='position-absolute top-50  start-50 translate-middle' >
  <i  class="text-white fa-solid fa-plus fa-6x"></i>
</div>
    </div>
</div>


</div>
<div className={`col-md-4 ${pon.item} p-3`}>
  <div className='position-relative '>
    <img src={inng} alt="" className="w-100 rounded-3"></img>
    <div className={`${pon.lay} rounded-3`}>
      <div className='position-absolute top-50  start-50 translate-middle' >
  <i  class="text-white fa-solid fa-plus fa-6x"></i>
</div>
    </div>
</div>


</div>
<div className={`col-md-4 ${pon.item} p-3`}>
  <div className='position-relative '>
    <img src={iing} alt="" className="w-100 rounded-3"></img>
    <div className={`${pon.lay} rounded-3`}>
      <div className='position-absolute top-50  start-50 translate-middle' >
  <i  class="text-white fa-solid fa-plus fa-6x"></i>
</div>
    </div>
</div>


</div>
<div className={`col-md-4 ${pon.item} p-3`}>
  <div className='position-relative '>
    <img src={immg} alt="" className="w-100 rounded-3"></img>
    <div className={`${pon.lay} rounded-3`}>
      <div className='position-absolute top-50  start-50 translate-middle' >
  <i  class="text-white fa-solid fa-plus fa-6x"></i>
</div>
    </div>
</div>


</div>
<div className={`col-md-4 ${pon.item} p-3`}>
  <div className='position-relative '>
    <img src={inng} alt="" className="w-100 rounded-3"></img>
    <div className={`${pon.lay} rounded-3`}>
      <div className='position-absolute top-50  start-50 translate-middle' >
  <i  class="text-white fa-solid fa-plus fa-6x"></i>
</div>
    </div>
</div>


</div>
<div className={`col-md-4 ${pon.item} p-3`}>
  <div className='position-relative '>
    <img src={iing} alt="" className="w-100 rounded-3"></img>
    <div className={`${pon.lay} rounded-3`}>
<div className='position-absolute top-50  start-50 translate-middle' >
  <i  class="text-white fa-solid fa-plus fa-6x"></i>
</div>

    </div>
</div>


</div>
  </div>
  </div>
<div className='d-none justify-content-center align-items-center bg-primary bg-opacity-25 position-fixed top-0 start-0 bottom-0 end-0'>
  <div className={`${pon.box}`}>

  </div>
</div>



  </>
  
  
  
  
  
  
}*/
import React, { useState } from 'react';
import immg from '../../assets/poert1.png';
import inng from '../../assets/port2.png';
import iing from '../../assets/port3.png';
import pon from '../Portfolio/Portfolio.module.css';

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="container py-5">
        
        <div className="text-center mb-5">
          <h1 className={pon.co}>PORTFOLIO COMPONENT</h1>

          <div className="d-flex flex-row justify-content-center align-items-center gap-1">
            <div className={pon.pc}></div>
            <div className="p-3 d-flex justify-content-center align-items-center text-center text-info">
              <i className={`fa-solid fa-star ${pon.ii}`}></i>
            </div>
            <div className={pon.pc}></div>
          </div>
        </div>

        
        <div className="row g-4">
          {[immg, inng, iing, immg, inng, iing].map((src, index) => (
            <div className="col-md-4" key={index}>
              <div
                className={`position-relative overflow-hidden rounded-3 shadow-sm item ${pon.item}`}
                onClick={() => handleImageClick(src)}
              >
                <img
                  src={src}
                  alt={`Portfolio ${index + 1}`}
                  className="w-100 rounded-3"
                />

                
                <div className={`${pon.lay} rounded-3`}>
                  <div className="position-absolute top-50 start-50 translate-middle">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      {selectedImage && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center"
          style={{ zIndex: 1050, cursor: 'pointer' }}
          onClick={handleClose}
        >
          <img
            src={selectedImage}
            alt="Selected"
            className=" shadow-lg"
            style={{
              maxWidth: '55%',
              maxHeight: '60%',
              
            }}
          />
        </div>
      )}
    </>
  );
}
