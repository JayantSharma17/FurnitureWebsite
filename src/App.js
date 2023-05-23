import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import './ComponentsCSS/cartitem.css'
import './index.css'
import './ComponentsCSS/mainbox.css'
import Mainbox from "./Components/Mainbox";
import Cardf from "./Components/Cardf";
import ImageSlider from "./Components/ImageSlider";
import Navsec from "./Components/Navsec";
import Head4 from "./Components/Head4";
import Footer from "./Components/Footer";
import { useState } from "react";

function App() {
  const slides=[{url:"https://template.hasthemes.com/hurst-v1/hurst/img/discount/4.jpg"},
  {url:"https://template.hasthemes.com/hurst-v1/hurst/img/discount/3.jpg"},
  {url:"https://template.hasthemes.com/hurst-v1/hurst/img/discount/4.jpg"},
  {url:"https://template.hasthemes.com/hurst-v1/hurst/img/discount/3.jpg"},]
  const [show,setshow] =useState(false);
  return (
    <>
      <Navbar/>
      <div className="navbar">
                <button id="a"></button>
                <div id="b"></div>
                <button id="c" onClick={()=>setshow(!show)}>""</button>
            </div>
      {
        show?<Cart/>:null
      }
      
      <Mainbox/>
      <h1 className="head1">Featured Products</h1>
      <div className="head2"></div>


      <div className="head3">
      <Cardf i="https://template.hasthemes.com/hurst-v1/hurst/img/product/1.jpg"/>
      <Cardf i="	https://template.hasthemes.com/hurst-v1/hurst/img/product/3.jpg"/>
      <Cardf i="	https://template.hasthemes.com/hurst-v1/hurst/img/product/2.jpg"/>
      <Cardf i="		https://template.hasthemes.com/hurst-v1/hurst/img/product/4.jpg"/>

      </div>
      <ImageSlider slides={slides}/>
      <h1 className="head1">Place Online on hurst</h1>
      <div className="head2"></div>

      <Navsec/>
      <div className="head3">
      <Cardf i="https://template.hasthemes.com/hurst-v1/hurst/img/product/7.jpg"/>
      <Cardf i="	https://template.hasthemes.com/hurst-v1/hurst/img/product/3.jpg"/>
      <Cardf i="	https://template.hasthemes.com/hurst-v1/hurst/img/product/8.jpg"/>
      <Cardf i="			https://template.hasthemes.com/hurst-v1/hurst/img/product/5.jpg"/>

      </div>
      <div className="head3">
      <Cardf i="https://template.hasthemes.com/hurst-v1/hurst/img/product/1.jpg"/>
      <Cardf i="	https://template.hasthemes.com/hurst-v1/hurst/img/product/6.jpg"/>
      <Cardf i="	https://template.hasthemes.com/hurst-v1/hurst/img/product/2.jpg"/>
      <Cardf i="		https://template.hasthemes.com/hurst-v1/hurst/img/product/4.jpg"/>

      </div>
      <h1 className="head1">From the Blog</h1>
      <div className="head2"></div>
      <Head4/>
      <Footer/>
      <div className="entry">
        <input type="text" name="name" id="name"  placeholder="Enter Your Email address"/>
        <button>Submmit</button>
      </div>
    </>
  );
}

export default App;
