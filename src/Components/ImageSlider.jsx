import React, { useState } from 'react'
import '../ComponentsCSS/slider.css';
const ImageSlider = ({slides}) => {
    const [ci,si] =useState(0);
const gotoslide=(i)=>{
    si(i);
}
  return (
    <>
    <div className='slider' style={{backgroundImage:`url(${slides[ci].url})`}}><div className="slider1">
        <h1>Discount 50%</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quia sed illo exercitationem asperiores ipsa porro provident soluta unde! </p>
        <button>By Now</button>
        <div className='onsale'><h3><i>On Sale</i></h3>
        <p>$80.00</p>
        </div>
    </div></div>
    <div className="but">
        <img src="/images/dot.png" onClick={()=>gotoslide(0)} alt="#" />
        <img src="/images/dot.png" onClick={()=>gotoslide(1)} alt="#" />
        <img src="/images/dot.png" onClick={()=>gotoslide(2)} alt="#" />
        <img src="/images/dot.png" onClick={()=>gotoslide(3)} alt="#" />
        
    </div>
    </>
  )
}

export default ImageSlider