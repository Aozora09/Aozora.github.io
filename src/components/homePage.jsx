import { useEffect, useRef, useState } from 'react';
import backgroundImage from '../assets/background-light.svg';
import IOT from '../assets/Iot.svg';
import Transportation from '../assets/transport.svg';
import PublicSecurity from '../assets/publicSecurity.svg';
import Arrow from '../assets/arrow.svg';

const HomePage = () => {
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
    <div
    id="Tokyo"
    ref={textRef}
    className={`flex bg-cover bg-center font-figtree h-screen mb-2 ${isTextVisible ? "transition-opacity":"opacity-0"}`} style={{ backgroundImage: `url(${backgroundImage})`}}>
        <div className="flex items-end mb-12 text-white text-9xl p-14 ">
            <p>City of <br />the Future </p>
        </div>
        
        <div className="absolute right-1/4 top-[40%] translate-x-3/4 ">
            <div className="w-[416px] h-[496px] flex-col justify-start items-end gap-4 inline-flex">
                <div className="grid w-[136px] h-40 relative bg-white rounded-xl shadow border border-white">
                    <div className="left-[12px] top-[100px] absolute text-black text-lg font-semibold font-['Figtree'] leading-tight">Internet of Things</div>
                    <img className="w-[100%] h-[90px] rounded-t-xl top-0 absolute" src={IOT} />
                    <div className="p-1 place-self-end absolute bg-black rounded-tl-lg rounded-br-xl justify-start items-start gap-2 inline-flex">
                        <img className="w-5 h-5 relative" src={Arrow} />
                    </div>
                </div>
                <div className="self-stretch justify-end items-center gap-4 inline-flex">
                    <div className="grid w-[136px] h-40 relative bg-white rounded-xl shadow border border-white">
                        <div className="left-[6px] top-[100px] absolute text-black text-lg font-semibold font-['Figtree'] leading-tight">Transportation.</div>
                        <img className="w-[100%] h-[90px] rounded-t-xl top-0 absolute" src={Transportation} />
                        <div className="p-1 place-self-end absolute bg-black rounded-tl-lg rounded-br-xl justify-start items-start gap-2 inline-flex">
                            <img className="w-5 h-5 relative" src={Arrow} />
                        </div>
                    </div>
                    <div className="grid w-[136px] h-40 relative bg-white rounded-xl shadow border border-white">
                        <div className="left-[12px] top-[100px] absolute text-black text-lg font-semibold font-['Figtree'] leading-tight">Public Security.</div>
                        <img className="w-[100%] h-[90px] rounded-t-xl top-0 absolute" src={PublicSecurity} />
                        <div className="p-1 p-1 place-self-end absolute bg-black rounded-tl-lg rounded-br-xl justify-start items-start gap-2 inline-flex">
                            <img className="w-5 h-5 relative" src={Arrow} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
    </div>
  );
};

export default HomePage;