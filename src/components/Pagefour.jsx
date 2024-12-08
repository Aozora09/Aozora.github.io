import { useEffect, useRef, useState } from "react";
import iotImg from "../assets/iotImage.svg"

const Pagefour = () =>{
    const [isTransitionVisible, setIsTransitionVisible] = useState(false);
    const transitionRef = useRef(null);

    useEffect(() => {
        const observerOptions ={
            root:null,
            rootMargin:'0px',
            threshold:0.8
        };

        const observer = new IntersectionObserver((entries) =>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                setIsTransitionVisible(true);
                observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        if (transitionRef.current){
            observer.observe(transitionRef.current)
        }
    }, [])

return(
    

    <div className="flex flex-row font-figtree">

        <div className="mr-4 w-[100%] space-y-4">
            <p
            ref={transitionRef}
            className={`h-[80px] bg-gradient-to-r from-[#f67b08] bg-clip-text text-transparent to-[#ffecda] text-[#f67b08] text-7xl font-medium ${ isTransitionVisible ? 'slide-in-top': 'opacity-0'}`}>Internet Of Things</p>
            <p
            ref={transitionRef}
            className={`text-justify ${isTransitionVisible ? 'slide-in-right': 'opacity-0'}`}>Tokyo’s IoT network <span className="text-[#f67b08]">seamlessly</span> connects infrastructure, transport, and public services, utilizing cutting-edge sensors and devices to optimize efficiency, enhance safety, and manage resources, positioning the city at the forefront of smart urban innovation.</p>
        </div>
        
        <div
        ref={transitionRef}
        className={`bg-cover w-[90%] h-[350px] ${ isTransitionVisible ? 'slide-in-bottom': 'opacity-0' }`}
        style={{backgroundImage:`url(${iotImg})`}}>
        </div>
    </div>
)

}

export default Pagefour;