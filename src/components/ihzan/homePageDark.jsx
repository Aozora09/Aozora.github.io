import { useState } from "react";
import backgroundImage from "../../assets/ihzans/milkyway.png";
import UenoPark from "../../assets/ihzans/uenoPark.svg";
import KiyosumiGarden from "../../assets/ihzans/kiyosumiGarden.svg";
import ShowaKinen from "../../assets/ihzans/showaKinen.svg";
import MtFuji from "../../assets/ihzans/mtFuji.svg";
import FujiDark from "../../assets/ihzans/fujidark.svg";
import ThumbnailImage from "../../assets/ihzans/thumbnail.jpeg";
import NoiseBG from "../../assets/ihzans/noisetxt.svg";
import CultureVideo from "../../assets/ihzans/culturevideo2.mp4";
// import IconClose from "../../assets/ihzans/icons/iconclose.svg";
import Iconmaps from "../../assets/ihzans/icons/point.svg";

const HomePageDark = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleModalOpen = (modal) => {
    setActiveModal(modal);
  };

  const handleModalClose = () => {
    setActiveModal(null);
  };

  const modalData = {
    UenoPark: {
      title: "Ueno Park",
      description:
        "Ueno Park is one of Tokyo's largest and most famous parks, known for cherry blossoms, cultural sites, and the Tokyo National Museum. It’s a popular spot for relaxation, with Shinobazu Pond and Japan's oldest zoo.",
      distances: ["Tokyo Station - 5 km", "Tokyo Tower - 10 km"],
      imageUrl: UenoPark,
      mapLink: "https://maps.app.goo.gl/vqfs6mqtB7thzi4J8",

    },
    KiyosumiGarden: {
      title: "Kiyosumi Garden",
      description:
        "The grounds of Kiyosumi Garden (清澄庭園, Kiyosumi Teien) were originally the residence of an Edo era merchant and eventually changed ownership to a feudal lord who turned them into a garden. During the Meiji Period, the founder of Mitsubishi bought the garden to entertain his guests. It was donated to the city and opened to the public in 1932.",
      distances: ["Tokyo Station - 5 km", "Tokyo Tower - 8 km"],
      imageUrl: KiyosumiGarden,
      mapLink: "https://maps.app.goo.gl/GtWjdJvX4ZkVEedh8",
    },
    ShowaKinen: {
      title: "Showa Kinen Park",
      description:
        "Showa Kinen Park is a large park with beautiful flower gardens, walking paths, and recreational areas. Showa Kinen Park in Tokyo's Tachikawa area is so vast that exploring it all would take an entire day on foot. The park is known for the many kinds of flowers that carpet its grounds throughout the year. Its rows of ginkgo trees are also a beloved fall sightseeing spot.",
      distances: ["Tokyo Station - 10 km", "Tokyo Tower - 12 km"],
      imageUrl: ShowaKinen,
      mapLink: "https://maps.app.goo.gl/gbdEyshuw5YsRBwv7",
    },
    MtFuji: {
      title: "Mt. Fuji",
      description:
        "Mt. Fuji is Japan's iconic mountain, known for its symmetrical cone and beautiful views. Standing at 3,776 meters, Mt. Fuji is the tallest peak in Japan, the result of volcanic activity that began approximately 100,000 years ago.",
      distances: ["Tokyo Station - 100 km", "Tokyo Tower - 110 km"],
      imageUrl: MtFuji,
      mapLink: "https://maps.app.goo.gl/uHHLheatMvWWzMs2A",
    },
  };

  return (
    <div
      id="Nature"
      className="bg-black "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        minHeight: "320vh",
      }}
    >
      {/* text nature */}
      <div className="flex justify-center absolute left-1/2 top-[20%] transform -translate-x-1/2 -translate-y-64">
        <div
          className="font-figtree font-bold text-7xl sm:text-9xl md:text-[11rem] lg:text-[14rem] bg-cover text-transparent text-center"
          style={{
            backgroundImage: `url(${FujiDark})`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          NATURE
        </div>
      </div>

      {/* UenoCuy */}
      <div className="w-screen h-screen flex-col justify-center items-center gap-5 inline-flex translate-y-3/4 mt-96">
      <div className="self-stretch justify-center items-center sm:items-start gap-5 inline-flex flex-col sm:flex-row">
          <div
            onClick={() => handleModalOpen("UenoPark")}
            className="w-[317px] h-[319px] md:w-[381px] lg:w-[508px] lg:h-[399px] xl:w-[635px] xl:h-[399px] px-0.5 pt-0.5 pb-[17px] bg-transparent shadow border rounded-2xl border-white flex-col justify-start items-center gap-5 inline-flex cursor-pointer"
          >
            <img
              className="w-[635px] h-[300px] object-cover rounded-t-xl"
              src={UenoPark}
              alt="Ueno Park"
            />
            <div className="self-stretch h-[49px] px-[30px] flex-col justify-start items-start gap-[5px] inline-flex">
              <div className="self-stretch text-white text-lg font-semibold font-['Figtree']">
                Ueno Park
              </div>
              <div className="w-[280px] text-[#95959c] text-base font-medium font-['Figtree'] leading-snug">
                A park
              </div>
            </div>
          </div>

          {/* Kiyosumi Garden */}
          <div
            onClick={() => handleModalOpen("KiyosumiGarden")}
            className="w-[317px] h-[319px] sm:w-[250px] md:w-[300px] lg:w-[400px] lg:h-[399px] xl:w-[500px] px-0.5 pt-0.5 pb-[17px] bg-gradient-transparent rounded-2xl shadow border border-white flex-col justify-start items-end gap-5 inline-flex"
          >
            <img
              className="w-full object-cover rounded-t-xl"
              style={{ width: "635px", height: "300px" }}
              src={KiyosumiGarden}
              alt="Kiyosumi Garden"
            />
            <div className="self-stretch h-[49px] px-[30px] flex-col justify-start items-start gap-[5px] inline-flex">
              <div className="self-stretch text-white text-lg font-semibold font-['Figtree']">
                Kiyosumi Garden
              </div>
              <div className="w-[220px] text-[#95959c] text-base font-medium font-['Figtree'] leading-snug">
                A Garden
              </div>
            </div>
          </div>
        </div>

        {/* Showa Kinen */}
        <div className="self-stretch justify-center items-center sm:items-start gap-5 inline-flex flex-col sm:flex-row">
          <div
            onClick={() => handleModalOpen("ShowaKinen")}
            className="w-[317px] h-[319px] sm:w-[250px] md:w-[300px] lg:w-[400px] lg:h-[399px] xl:w-[500px] px-0.5 pt-0.5 pb-[17px] bg-transparent rounded-2xl shadow border border-white flex-col justify-start items-end gap-5 inline-flex"
          >
            <img
              className="w-full object-cover rounded-xl"
              style={{ width: "635px", height: "300px" }}
              src={ShowaKinen}
              alt="Showa Kinen"
            />
            <div className="self-stretch h-[49px] px-[30px] flex-col justify-start items-start gap-[5px] inline-flex">
              <div className="self-stretch text-white text-lg font-semibold font-['Figtree']">
                Showa Kinen
              </div>
              <div className="w-[220px] text-[#95959c] text-base font-medium font-['Figtree'] leading-snug">
                A Garden
              </div>
            </div>
          </div>

          {/* Mt. Fuji */}
          <div
            onClick={() => handleModalOpen("MtFuji")}
            className="w-[317px] h-[319px] md:w-[381px] lg:w-[508px] lg:h-[399px] xl:w-[635px] xl:h-[399px] px-0.5 pt-0.5 pb-[17px] bg-transparent rounded-2xl shadow border border-white flex-col justify-start items-center gap-5 inline-flex"
          >
            <img
              className="w-[328px] h-36 object-cover rounded-xl"
              style={{ width: "635px", height: "300px" }}
              src={MtFuji}
              alt="Mt. Fuji"
            />
            <div className="self-stretch h-[49px] px-[30px] flex-col justify-start items-start gap-[5px] inline-flex">
              <div className="self-stretch text-white text-lg font-semibold font-['Figtree']">
                Mt. Fuji
              </div>
              <div className="w-[230.5px] text-[#95959c] text-base font-medium font-['Figtree'] leading-snug">
                A park
              </div>
            </div>
          </div>
        </div>

        {/* Modal Pop-up */}
        {activeModal && (
          <div
            className="fixed inset-0 flex items-center -translate-y-2/3 justify-center bg-black bg-opacity-50 z-50 modal-overlay"
            onClick={(event) => {
              if (event.target.classList.contains("modal-overlay")) {
                handleModalClose();
              }
            }}
          >
            <div  
              className="bg-white rounded-lg p-6 w-11/12 sm:w-[600px] md:w-[720px] lg:w-[864px]"
              style={{
                backgroundImage: `url(${NoiseBG})`,
                border: "2px solid #FFFFFF",
              }}
            >
              <div className="flex h-full flex-col sm:flex-row">
                {/* Kolom Foto */}
                <div className="flex-shrink-0">
                  <img
                    className="w-full sm:w-[300px] md:w-[432px] h-full object-cover rounded-lg"
                    style={{ width: "600px", height: "350px" }}
                    src={modalData[activeModal].imageUrl}
                    alt={modalData[activeModal].title}
                  />
                </div>
                {/* Kolom Informasi */}
                <div className="flex-grow p-4">
                  <h2 className="text-xl text-white font-bold ml-2">
                    {modalData[activeModal].title}
                  </h2>
                  <p className="mt-2 text-neutral-500 text-base ml-2">
                    {modalData[activeModal].description}
                  </p>
                  <p className="mt-4 text-white font-semibold ml-2">
                    <img
                      src={Iconmaps}
                      alt="Ikon Jarak"
                      className="mr-2 w-5 h-5"
                    />
                    Jarak dari landmark:
                  </p>
                  <ul className="list-none list-inside text-white ml-2">
                    {modalData[activeModal].distances.map((distance, index) => (
                      <li key={index}>{distance}</li>
                    ))}
                  </ul>
                  
                  <div style={{
                              marginTop: '1rem',
                              display: 'inline-block',
                              backgroundColor: '#3b82f6',
                              color: 'white',
                              fontWeight: 600,
                              padding: '0.5rem 1rem',
                              borderRadius: '0.25rem'
                              }}>
                    <a href={modalData[activeModal].mapLink} target="_blank" rel="noopener noreferrer">
                      See on Maps </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center translate-y-1/4 mt-10">
          <div className="relative border border-white bg-transparent rounded-2xl shadow-md">
            {isPlaying ? (
              <video
                width="800px"
                height="540px"
                controls
                autoPlay
                className="rounded-2xl w-[340px] sm:w-[600px] md:w-[720px] lg:w-[800px] lg:h-[450px]"
              >
                <source src={CultureVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="relative">
                <img
                  src={ThumbnailImage}
                  alt="Thumbnail"
                  className="w-[340px] sm:w-[600px] md:w-[720px] lg:w-[800px] lg:h-[450px] object-cover rounded-2xl cursor-pointer"
                  onClick={handlePlay}
                />
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-2xl"
                >
                  <span className="text-white text-3xl">▶</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageDark;
