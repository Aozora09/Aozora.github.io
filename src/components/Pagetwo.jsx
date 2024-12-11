import { useEffect, useRef, useState } from 'react';
import shinkansenImg from "../assets/shinkansenbg.svg";

const Pagetwo = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8, // Aktifkan saat 50% teks terlihat
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsTextVisible(true); // Aktifkan efek transisi
          observer.unobserve(entry.target); // Hentikan pengamatan setelah terlihat pertama kali
        }
      });
    }, observerOptions);

    if (textRef.current) {
      observer.observe(textRef.current);
    }

  }, []);

  return (
    <div id="Pagetwo" className="w-full font-figtree p-0 sm:p-6 lg:p-4 ">
        <h1 ref={textRef}
          className={`ml-2 text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium leading-tight sm:leading-[96px] lg:leading-[112px] xl:leading-[128px] text-black transition-opacity duration-700 ${
            isTextVisible ? 'slide-in-bottom' : 'opacity-0'
          }`}
        >
        Shinkansen</h1>

        <div className="bg-cover bg-center self-stretch mt-2 sm:mt-6 lg:mt-6" style={{ backgroundImage: `url(${shinkansenImg})`,
        height: window.innerWidth < 640 
        ? '100px' // Small screens
        : window.innerWidth < 768 
        ? '240px' // Medium screens
        : window.innerWidth < 1024 
        ? '300px' // Large screens
        : '324px',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center' }}>
        </div>
        <div className="text-base sm:text-lg lg:text-xl mt-4 sm:mt-6 lg:mt-2">
            <span> The 
                <span className="text-orange-500"> Shinkansen </span>, also known as the bullet train, is Japan’s high-speed rail network, renowned for its precision, efficiency, and cutting-edge technology, offering seamless travel across the country</span>
        </div>
    </div>
  );
};

export default Pagetwo;
