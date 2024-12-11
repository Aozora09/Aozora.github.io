import { useEffect, useRef, useState } from 'react';
import "./App.css"
import FirstPage from "./components/Landingggg/ImageSlider"
import Navbar from './components/navbar';
import Pagetwo from './components/Pagetwo';
import Pagethree from './components/Pagethree';
import Pagefour from './components/Pagefour';
import Threecard from './components/three_Card';
import Chocolate from './components/parallax/chocolate';
import Sora from "./components/SoraTransition"
import Darkmode from "./components/ihzan/homePageDark";
import Ninja from "./assets/chocolate/ladysamurai.jpeg" 
import "./components/Landingggg/Slider.css"


const App = () => {
  const [isSoraFixed, setIsSoraFixed] = useState(false); // State untuk posisi Sora
  const soraPlaceholderRef = useRef(null); // Ref untuk placeholder Sora
  const soraRef = useRef(null); // Ref untuk elemen Sora


  // Intersection Observer untuk elemen Sora
  useEffect(() => {
    const handleScroll = () => {
      if (soraPlaceholderRef.current && soraRef.current) {
        const placeholderTop = soraPlaceholderRef.current.getBoundingClientRect().top;

        if (placeholderTop <= 100) {
          setIsSoraFixed(true);
        } else {
          setIsSoraFixed(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <div className='flex flex-col width: "100wh", height:"100vh"'>
        <div className="fixed z-50">
          <header>
           <Navbar/>
          </header>
        </div>
        <div style={{paddingBottom:"100px"}} className='Slider'>
          <FirstPage/>
        </div>
        <div className='p-4 space-y-[120px]'>
            <div>
                <Pagetwo/>
            </div>
            <div>
                <Pagethree/>
            </div>
            <div>
                <Pagefour/>
            </div>
            <div className='pb-[100px]'>
                <Threecard/>
            </div>
        </div>
      
        <div style={{ position: "relative", width: "100wh", height:"100vh",top:"40px" }}>
          {/* Nightmode akan berada di bawah */}
          
            <div className="App">
                <Chocolate />
            </div>
            <div className='relative mb-[10%]'>
                <Darkmode/>
            </div>
            <footer>
                <div className='ninjacontainer'>
                    <div className='imagemask2'>
                        <img src={Ninja} alt="Ninja" />    
                    </div>
                </div>

                <div
                ref={soraPlaceholderRef}
                style={{
                    height: soraRef.current?.offsetHeight || 0, // Tinggi placeholder sama dengan tinggi elemen Sora
                }}
                />
                
                {/* Elemen Sora */}
                <div
                ref={soraRef}
                style={{
                    position: isSoraFixed ? 'fixed' : 'relative',
                    top: 0,
                    left: 0,
                    width:'100vw',
                    zIndex: 10,
                }}
                >
                <Sora />
                </div>
            </footer>
        </div>
    </div>
  );
};

export default App;
