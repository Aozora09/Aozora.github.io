import { useEffect } from 'react';
import "../../App.css"
import "../../index.css"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

//import Background from "../../assets/chocolate/bg.png"
import katana from "../../assets/chocolate/katana.png"
//import Sushiii from "../../assets/chocolate/sushiiii.png"
// import Choco from "../../assets/chocolate/choclate.png"
import Sakura from "../../assets/chocolate/sakura.png"
// import Choco2 from "../../assets/chocolate/sushi3.png"
// import Choco3 from "../../assets/chocolate/choclate3.png"
import Suhsii1 from "../../assets/chocolate/Sushi1.png"
import Sushi2 from "../../assets/chocolate/sushi2.png"
import Sushi3 from "../../assets/chocolate/sushi3.png"
import Footer from "../../assets/chocolate/footer1.jpg"
import Hanjii from "../../assets/chocolate/Hanji.png"

gsap.registerPlugin(ScrollTrigger);

function Chocolate() {
  useEffect(() => {
    // Animasi katana (berputar seperti pedang)
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "0% 95%",
        end: "70% 50%",
        scrub: true,
        // markers: true,
      }
    });
  
    tl.to("#katana", {
      top: "100%",
      left: "12%",
      rotate: "360deg", // Rotasi penuh (berputar)
      x: 50,            // Gerakan horizontal
      y: -30,           // Gerakan vertikal
    }, 'katana')
      .to("#sakura", {
        top: "160%",
        left: "23%",
        width:"40%"
      }, 'katana')
      .to("#sushi3", {
        width: "25%",
        top: "160%",
        right: "10%",
        rotate: "-15deg"
      }, 'katana')
      .to("#sushi1", {
        top: "110%",
        rotate: "130deg",
        left: "70%"
      }, 'katana')
      .to("#sushi2", {
        top: "110%",
        rotate: "130deg",
        left: "0%"
      }, 'katana');
  
    // Animasi lainnya (product section)
    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".product",
        start: "0% 95%",
        end: "20% 50%",
        scrub: true,
        // markers: true,
      }
    });
  
    tl2.to("#sakura", {
      width: "28%",
      left: "42%",
      top: "214%"
    }, 'katana')
      .to("#sushi3", {
        width: "20%",
        left: "25%",
        top: "245%"
      }, 'katana')
      .to("#katana", {
        width: "30%",
        top: "190%",
        left: "35%",
        rotate: "0deg",
        x: 0,   // Reset posisi horizontal
        y: 0    // Reset posisi vertikal
      }, 'katana');
  }, []);
  

  return (
    <div id="main">
      <div id='Culture' className="header">
        <h1 className='masked'>Culture</h1>
        <img id="sakura" className='absolute top-8% left-42% width-25% z-index: 1 transition: all cubic-bezier(0.19, 1, 0.22, 1)0.5s;' src={Sakura} alt="" />
        <img 
        onClick={() => window.open("https://www.toki.tokyo/blogt/2020/5/27/sword-of-the-samurai#:~:text=The%20first%20original%20Japanese%20swords,period%20(1603%E2%80%931868).", "_blank")}
        id="katana" src={katana} alt="" />
        <img id="sushi3" src={Sushi3} alt="" />
        <img id="sushi2" src={Sushi2} alt="" />
        <img id="sushi1" src={Suhsii1} alt="" />
      </div>
      <div
      className="about"
      style={{backgroundImage:"linear-gradient(90deg, #3b0000, #690505, #4a0909)", display: "flex", width: "100%", height: "100vh"}}>
        <div className="about-left">
          <div className='imagemask'>
            <img src={Hanjii} alt="" />
          </div>
        </div>
        <div className="about-right">
          <h1>名言</h1>
          <p>自分を他の人と比べないでください。あなたがいつも向き合う相手は、自分自身です。<br />Don&#39;t compare yourself to others, the only opponent you&#39;ll always face is yourself.</p>
        </div>
      </div>
      <div className="product">
        <img src={Footer} alt="" />
      </div>
    </div>
  );
}

export default Chocolate;
