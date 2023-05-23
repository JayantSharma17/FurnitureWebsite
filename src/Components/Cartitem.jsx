import React from 'react'
import '../ComponentsCSS/cartitem.css';
import '../index.css'

const Cartitem = (props) => {
  return (
    <>
        <div id="cartitem">
            <div id="a"><img style={{ height:"65px",width:"120px"}} src={props.i} alt="#" /></div>
            <div id="b"><h5>Dummy Product Name</h5>
            <p>Price : {props.p}</p>
            <p>Qunatity : {props.q}</p></div>
            
        </div>
    </>
  )
}

export default Cartitem