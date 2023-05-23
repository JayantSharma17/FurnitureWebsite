import React from 'react'
import '../ComponentsCSS/Cardf.css'

const Cardf = (props) => {
  return (
    <>
      <div className="cardf">
        <div className="cardf1"><img style={{
          height:"228px",width:"255px"
        }} src={props.i} alt="" /></div>
        <div className="cardf2">
          <div className="cardf2a">
            <h5>Dummy Product name</h5>
            <p>Furniture</p>
          </div>
          <div className="cardf2b">
            <p>$56.20</p>
            <div id="star">
              <img src="/images/star.png" alt="#" />
              <img src="/images/star.png" alt="#" />
              <img src="/images/star.png" alt="#" />
              <img src="/images/star.png" alt="#" />
              <img src="/images/star.png" alt="#" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cardf