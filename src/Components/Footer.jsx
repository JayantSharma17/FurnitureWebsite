import React from 'react'
import '../ComponentsCSS/Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footera">
                    <h3>CONTACT US</h3>
                    <p> <b>Address:</b> Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p> <b>Phone number:</b> 8997821545</p>
                    <p> <b>Email:</b> loremp@hmail.com</p>
                </div>
                <div className="footerb">
                    <h3>ACCOUNTS</h3>
                    <ul>
                        <li>Accounts</li>
                        <li>Shipping</li>
                        <li>Cart</li>
                        <li>Feedback</li>
                        <li>Profile</li>
                    </ul>
                </div>
                <div className="footerc">
                    <h3>SHIPPING</h3>
                    <ul>
                        <li>Accounts</li>
                        <li>Shipping</li>
                        <li>Cart</li>
                        <li>Feedback</li>
                        <li>Profile</li>
                    </ul>
                </div>
                <div className="footerd">
                    <h3>YOUR CHOICE PRODUCTS</h3>
                    <div className='footerda'>
                        <img src="https://template.hasthemes.com/hurst-v1/hurst/img/product/3.jpg" alt="#" />
                        <img src="https://template.hasthemes.com/hurst-v1/hurst/img/product/1.jpg" alt="#" />
                    </div>
                </div>

            </div>
            <div className="lastfooter">
                <img src="https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2022/06/27150459/rupay-1.jpg" alt="#" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGddgbLMSjSWR1gxoLhnRPTDTgmRJjh-x1EEEjCEkOzKu-U84anujJ90md-t1bTVhOakY&usqp=CAUg" alt="#" />
                <img src="https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2021/12/16092213/Horizontal-Thumbnail-7.jpg" alt="#" />
            </div>
        </>
    )
}

export default Footer