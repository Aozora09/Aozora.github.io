const Navbar = () => {
    return (
      <div className="fixed mt-4 left-1/2 transform -translate-x-1/2 pt-1 drop-shadow-xl font-figtree w-full lg:w-[60%] px-4 sm:px-6">
        <div
          className="h-[61px] w-full px-3 py-2 bg-white/60 bg-opacity-30 rounded-xl shadow justify-center items-center gap-4 sm:gap-6 font-['Figtree'] inline-flex"
          style={{
            backdropFilter: "blur(40px)",
            WebkitBackdropFilter: "blur(40px)",
          }}
        >
          <nav className="flex items-center justify-between w-full gap-4 sm:gap-6">
            <ul className="flex gap-3 sm:gap-4">
              <li className="text-lg relative group transition duration-300">
                <a
                  href="#Tokyo"
                  className="text-black font-semibold font-figtree hover:text-orange-500"
                >
                  Tokyo
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
            <ul className="flex gap-8 font-figtree sm:gap-4">
              <li className="text-lg relative group transition duration-300">
                <a
                  href="#Pagetwo"
                  className="text-black font-semibold hover:text-orange-500"
                >
                  Technology
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
                </a>
              </li>
              <li className="text-lg relative group transition duration-300">
                <a
                  href="#Tourism"
                  className="text-black font-semibold hover:text-orange-500"
                >
                  Tourism
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
                </a>
              </li>
              <li className="text-lg relative group transition duration-300">
                <a
                  href="#Culture"
                  className="text-black font-semibold hover:text-orange-500"
                >
                  Culture
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li className="text-lg relative group transition duration-300">
                <a
                  href="#Nature"
                  className="text-black font-semibold hover:text-orange-500"
                >
                  Nature
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
            <div className="cursor-pointer w-[150px] h-[45px] bg-[#f67b08] rounded-[10px] flex justify-center items-center font-figtree">
                <span className="text-white text-lg font-semibold hidden sm:block">
                    Discover more
                </span>
                <span className="text-white text-lg font-semibold sm:hidden">
                    More..
                </span>
            </div>
          </nav>
        </div>
      </div>
    );
  };
  
export default Navbar;
  