import { useEffect, useRef, useState } from 'react';

import Traffic from "../assets/traffictLight.svg"

const Pagethree = () => {
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
        <div className="flex flex-col sm:flex-row lg:flex-row font-figtree">
            <div
                ref={textRef}
                className={`mr-0 lg:mr-8 bg-cover w-full lg:w-[80%] h-[200px] lg:h-[350px] mb-6 lg:mb-0 ${isTextVisible ? 'slide-in-right' : 'opacity-0'}`}
                style={{
                    backgroundImage: `url(${Traffic})`,
                    height: window.innerWidth < 640
                        ? '450px' // Small screens
                        : window.innerWidth < 768
                            ? '240px' // Medium screens
                            : window.innerWidth < 1024
                                ? '300px' // Large screens
                                : '324px',
                    backgroundSize: window.innerWidth < 640 ? 'contain' : 'cover', // Contain for small screens, cover for others
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
            </div>
            <div
                className={"flex flex-col text-center lg:text-left w-full lg:w-[50%] px-4 lg:px-0"}>
                <p
                    ref={textRef}
                    className={`text-7xl font-medium bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent mb-10 ${isTextVisible ? 'slide-in-right' : 'opacity-0'}`}
                >More Secure </p>
                <p
                    ref={textRef}
                    className={`text-black text-justify text-[18px] font-normal leading-relaxed tracking-wide ${isTextVisible ? 'slide-in-right' : 'opacity-0'}`}
                >
                    Tokyo’s <span className="text-[#f67b08]">public security</span> is supported by an extensive network of CCTV cameras, strategically placed to ensure safety, monitor urban areas, and prevent crime, all while maintaining a balance between security and privacy.
                </p>
            </div>
        </div>
    );
};

export default Pagethree;
