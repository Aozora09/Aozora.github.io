import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Technology', href: '#Pagetwo' },
    { name: 'Tourism', href: '#Tourism' },
    { name: 'Culture', href: '#Culture' },
    { name: 'Nature', href: '#Nature' },
  ];

  return (
    <div className="fixed mt-4 left-1/2 transform -translate-x-1/2 pt-1 drop-shadow-xl font-figtree w-full px-4 sm:px-6 z-50">
      <div
        className="h-auto w-full px-3 py-2 bg-white/60 bg-opacity-30 rounded-xl shadow justify-center items-center font-['Figtree']"
        style={{
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
        }}
      >
        <nav className="flex items-center justify-between w-full">
          <ul className="flex gap-3">
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
          
          <div className="hidden md:flex gap-4 font-figtree">
            {navItems.map((item) => (
              <li key={item.name} className="text-lg relative group transition duration-300 list-none">
                <a
                  href={item.href}
                  className="text-black font-semibold hover:text-orange-500"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </div>
          
          <div className="hidden md:block cursor-pointer w-[150px] h-[45px] bg-[#f67b08] rounded-[10px] flex justify-center items-center font-figtree">
            <span className="text-white text-lg font-semibold">
              Discover more
            </span>
          </div>
          
          <button onClick={toggleMenu} className="md:hidden text-black">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.name} className="text-lg relative group transition duration-300">
                  <a
                    href={item.href}
                    className="text-black font-semibold hover:text-orange-500"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 cursor-pointer w-full h-[45px] bg-[#f67b08] rounded-[10px] flex justify-center items-center font-figtree">
              <span className="text-white text-lg font-semibold">
                Discover more
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

