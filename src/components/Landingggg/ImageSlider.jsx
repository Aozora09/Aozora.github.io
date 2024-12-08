import { useRef, useState } from "react";
import "./Slider.css";
import Image1 from "./ST.jpg";
import Image2 from "../../assets/LandingPage/sensoji.jpg";
import Image3 from "../../assets/LandingPage/akihabara.jpg";
import Image4 from "../../assets/LandingPage/sakura.jpg";

const ImageSlider = () => {
  const [sliderItems, setSliderItems] = useState([
    {
      img: Image1,
      title: "千本鳥居",
      type: "SENBON TORII",
      description:
        "In Shinto belief, a torii is a boundary between the human world and the realm where the gods (神様) reside",
        more:"https://www.norantravel.com/en/posts/fushimi-inari-taisha"
    },
    {
      img: Image2,
      title: "浅草寺",
      type: "SENSO-JI",
      description:
        "Sensō-ji is an ancient Buddhist temple located in Asakusa, Tokyo, Japan. It is the oldest temple in Tokyo and one of the most important.",
        more:"https://www.japan-guide.com/e/e3001.html"
    },
    {
      img: Image3,
      title: "秋葉原",
      type: "AKIHABARA",
      description:
        "Akihabara is a district in Tokyo, Japan, famous as a hub for electronics, pop culture, and otaku culture.",
        more:"https://www.japan-guide.com/e/e3003.html"
    },
    {
      img: Image4,
      title: "桜",
      type: "SAKURA",
      description:
        "Cherry blossoms symbolize life and death, as the trees and their flowers have a short lifespan and bloom only for a few weeks.",
        more:"https://www.japan.travel/en/au/experience/cherry-blossoms/sakura-history/"
    },
  ]);

  const sliderRef = useRef(null);

  const moveSlider = (direction) => {
    const updatedSliderItems = [...sliderItems];

    if (direction === "next") {
      const firstItem = updatedSliderItems.shift(); // Remove first item
      updatedSliderItems.push(firstItem); // Add it to the end
    } else if (direction === "prev") {
      const lastItem = updatedSliderItems.pop(); // Remove last item
      updatedSliderItems.unshift(lastItem); // Add it to the beginning
    }

    setSliderItems(updatedSliderItems);

    sliderRef.current.classList.add(direction);
    sliderRef.current.addEventListener(
      "animationend",
      () => {
        sliderRef.current.classList.remove("next");
        sliderRef.current.classList.remove("prev");
      },
      { once: true }
    );
  };

  return (
    <div id="Tokyo" className="slider" ref={sliderRef}>
      <div className="list">
        {sliderItems.map((item, index) => (
          <div key={index} className="item">
            <img src={item.img} alt={item.type} />
            <div className="content">
              <div className="title">{item.title}</div>
              <div className="type">{item.type}</div>
              <div style={{fontSize:"20px"}} className="description">
                <p>{item.description}</p>
              </div>
              <div className="button">
                <button onClick={() => window.open(item.more, "_blank")}>
                    SEE MORE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="thumbnail">
        {sliderItems.map((item, index) => (
          <div key={index} className="item">
            <img src={item.img} alt={item.type} />
          </div>
        ))}
      </div>
      
      <div className="nextPrevArrows">
        <button className="prev" onClick={() => moveSlider("prev")}>
          &lt;
        </button>
        <button className="next" onClick={() => moveSlider("next")}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
