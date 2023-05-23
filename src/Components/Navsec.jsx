import React from 'react'
import '../ComponentsCSS/Navsec.css'

const Navsec = () => {
  return (
    <>
        <div className="navsec">
        <ol>
          <li><a href="#">New arrivals</a> </li>
          <li><a href="#">Best sellers</a> </li>
          <li><a href="#">Most viewed</a> </li>
          <li><a href="#">Discount</a> </li>
        </ol>
      </div>
    </>
  )
}

export default Navsec