import { useEffect, useRef, useState } from "react";
import TourismImg from "../assets/tourismImage.svg";
import NatureImg from "../assets/natureImage.svg"
import CultureImg from "../assets/cultureImage.svg"
//import backgroundImage from '../assets/background-light.svg';
import walking from "../assets/walk.svg"
//import nightMountain from "../assets/Mountainight.svg"
import buildNature from "../assets/naturebuild.svg"
import touristIcon from "../assets/touristicon.svg"
import walkHover from "../assets/hover/walkhover.svg"
import buildnatureHover from "../assets/hover/naturebuildhover.svg"
import touristiconHover from "../assets/hover/touristiconHover.svg"

const ThreeCard = () => {
    // State untuk menentukan elemen yang aktif
    const [activeCard, setActiveCard] = useState("Tourist");
    const [isTransitionVisible, setIsTransitionVisible] = useState(false)
    const TransitionRef = useRef(null)
    const [isHoveredWalk, setIsHoveredWalk] = useState(false);
    const [isHoveredNature, setIsHoveredNature] = useState(false);
    const [isHoveredCulture, setIsHoveredCulture] = useState(false);

    useEffect(()=>{
        const observerOptions ={
            root:null,
            rootmargin:'0px',
            threshold:0.8

        }
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    setIsTransitionVisible(true);
                    observer.unobserve(entry.target);
                }
            })
        }, observerOptions)
        if (TransitionRef.current) {
            observer.observe(TransitionRef.current)
        }
    }, [])  

    // Fungsi untuk menangani klik pada elemen
    const handleCardClick = (id) => {
        setActiveCard(id);
    };

    // Fungsi untuk menentukan ukuran dan backgroundSize berdasarkan apakah elemen aktif atau tidak
    const getCardStyle = (id) => ({
        width: activeCard === id || activeCard === null ? '58.22%' : '10%',
        height: '388.9px',
        backgroundSize: activeCard === id || activeCard === null ? 'cover' : 'cover',
        backgroundPosition: 'center',
        transition: 'width 0.6s ease, background-size 0.6s ease',  // Animasi untuk perubahan ukuran dan background
        //boxShadow: activeCard === id ? '0px 0px 15px 5px rgba(0, 123, 255, 0.8)' : 'none', // Efek cahaya biru
        //borderRadius: '8px'
    });

    const getResponsiveCardStyle = (id) => ({
        width: activeCard === id || activeCard === null ? "60%" : "20%",
        height: "280px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "width 0.6s ease, background-size 0.6s ease",
      });

    return (
        <div id="">
        <div id="Tourism" className="h-[100px]"></div>
        <div className="flex flex-row justify-center sm:mx-4 lg:mr-20 lg:ml-20 space-x-4 rounded-lg font-figtree">
            <div
            id="Tourist"
            ref={TransitionRef}
            className={`flex rounded-xl bg-cover cursor-pointer contrast-100 ${isTransitionVisible ? 'slide-in-left' : 'opacity-0'}`}
            style={{
                backgroundImage: `url(${TourismImg})`,
                ...(window.innerWidth >= 1024 ? getCardStyle("Tourist") : getResponsiveCardStyle("Tourist")),
            }}
            onClick={() => handleCardClick("Tourist")}
            >
            <div className="flex text-white flex-row self-end">
                <div className="relative">
                <img
                    src={walking}
                    alt="walk"
                    className={`absolute transition-opacity duration-500 ease-in-out ${
                    isHoveredWalk ? "opacity-0" : "opacity-100"
                    } ${activeCard === "Tourist" || activeCard === null ? 'mt-6' : 'self-center ml-2 mb-4'}`}
                    onMouseEnter={() => setIsHoveredWalk(true)}
                    onMouseLeave={() => setIsHoveredWalk(false)}
                />
                <img
                    src={walkHover}
                    alt="walk-hover"
                    className={`transition-opacity duration-500 ease-in-out ${
                    isHoveredWalk ? "opacity-100" : "opacity-0"
                    } ${activeCard === "Tourist" || activeCard === null ? 'mt-6' : 'self-start ml-2 mb-4'}`}
                    onMouseEnter={() => setIsHoveredWalk(true)}
                    onMouseLeave={() => setIsHoveredWalk(false)}
                />
                </div>
                <div className={`${activeCard === "Tourist" || activeCard === null ? 'mt-14 text-white text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wider' : 'hidden'}`}>
                <div>
                    <p>Shibuya Crossing</p>
                    <p className="mt-2 tracking-wide text-[#EEF7FF] text-[22px] font-medium">World’s busiest pedestrian intersection.</p>
                </div>
                </div>
            </div>
            </div>

            <div
            id="Natures"
            ref={TransitionRef}
            className={`flex rounded-xl bg-cover cursor-pointer ${isTransitionVisible ? 'slide-in-bottom' : 'opacity-0'}`}
            style={{
                backgroundImage: `url(${NatureImg})`,
                ...(window.innerWidth >= 1024 ? getCardStyle("Natures") : getResponsiveCardStyle("Natures")),
            }}
            onClick={() => handleCardClick("Natures")}
            >
            <div className="flex text-white flex-row self-end">
                <div className="relative">
                <img
                    src={buildNature}
                    alt="buildNature"
                    className={`absolute transition-opacity duration-500 ease-in-out ${
                    isHoveredNature ? "opacity-0" : "opacity-100"
                    } ${activeCard === "Natures" || activeCard === null ? 'mt-12' : 'self-center mt-4 ml-2 mb-4'}`}
                    onMouseEnter={() => setIsHoveredNature(true)}
                    onMouseLeave={() => setIsHoveredNature(false)}
                />
                <img
                    src={buildnatureHover}
                    alt="buildNatureHover"
                    className={`transition-opacity duration-500 ease-in-out ${
                    isHoveredNature ? "opacity-100" : "opacity-0"
                    } ${activeCard === "Natures" || activeCard === null ? 'mt-12' : 'self-center mt-4 ml-2 mb-4'}`}
                    onMouseEnter={() => setIsHoveredNature(true)}
                    onMouseLeave={() => setIsHoveredNature(false)}
                />
                </div>
                <div className={`${activeCard === "Natures" || activeCard === null ? 'mt-14 text-[#FFFFFF] drop-shadow-lg text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wider' : 'hidden'}`}>
                    <p>Tokyo Tower</p>
                    <p className="mt-2 tracking-wide text-[22px] font-medium">Japan’s iconic landmark offering panoramic city views.</p>
                </div>
            </div>
            </div>

            <div
            id="Cultures"
            ref={TransitionRef}
            className={`flex rounded-xl bg-cover cursor-pointer ${isTransitionVisible ? 'slide-in-top' : 'opacity-0'}`}
            style={{
                backgroundImage: `url(${CultureImg})`,
                ...(window.innerWidth >= 1024 ? getCardStyle("Cultures") : getResponsiveCardStyle("Cultures")),
            }}
            onClick={() => handleCardClick("Cultures")}
            >
            <div className="flex text-white flex-row self-end">
                <div className="relative">
                <img
                    src={touristIcon}
                    alt="touristIcon"
                    className={`absolute transition-opacity duration-500 ease-in-out cursor-pointer ${
                    isHoveredCulture ? "opacity-0" : "opacity-100"
                    } ${activeCard === "Cultures" || activeCard === null ? 'ml-2' : 'self-center mr-2 ml-2 mb-4'}`}
                    onMouseEnter={() => setIsHoveredCulture(true)}
                    onMouseLeave={() => setIsHoveredCulture(false)}
                />
                <img
                    src={touristiconHover}
                    alt="touristiconHover"
                    className={`transition-opacity duration-500 ease-in-out ${
                    isHoveredCulture ? "opacity-100" : "opacity-0"
                    } ${activeCard === "Cultures" || activeCard === null ? ' ml-2' : 'self-center mr-2 ml-2 mb-4'}`}
                    onMouseEnter={() => setIsHoveredCulture(true)}
                    onMouseLeave={() => setIsHoveredCulture(false)}
                />
                </div>
                <div className={`${activeCard === "Cultures" || activeCard === null ? 'self-end text-white drop-shadow-lg text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wider' : 'hidden'}`}>
                <p>Senso-ji Temple</p>
                <p className="mt-2 tracking-wide text-white text-[22px] font-medium backdrop-opacity-5">Tokyo’s oldest temple, blending history with culture.</p>
                </div>
            </div>
            </div>
        </div>
        <div className="flex col justify-center text-black text-[102.40px] font-medium mt-4">
            <p className="justify-self-center">Tourism</p>
        </div>
        </div>

        
    );
}

export default ThreeCard;
