import React from 'react'
import Cartitem from './Cartitem'


const Cart = () => {
  return (
    <>
        <div className="cart">
        <div id="a"><p>You have <span>03 items</span> in your shopping bag.</p></div>
        <div id="b"><Cartitem p="100" q="02" i="https://www.pojfurniture.com/storage/products/230922055953-2.jpg"/></div>
        <div id="c"><Cartitem p="200" q="05" i="https://m.media-amazon.com/images/I/51dx6RUA+BL._SL1000_.jpg"/></div>
        <div id="d"><h3>TOTAL$300</h3></div>
        <div id="e"><button>VIEW CART</button>
        <button>CHECK OUT</button></div>

      </div>
    </>
  )
}

export default Cart