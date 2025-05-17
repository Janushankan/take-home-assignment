import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <header className="w-full bg-[#182D55] px-4 py-3 flex items-center justify-between gap-3 sm:gap-0 border-b-2 border-[#5e6b83]">
      {/* Left: Search */}
      <div className="flex items-center w-full md:w-2/5 lg:w-1/5">
        {isMobile && !showSearch ? (
          <button
            onClick={() => setShowSearch(true)}
            className="text-white text-xl"
          >
            <FiSearch />
          </button>
        ) : (
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-[#182D55] text-white text-sm px-4 pr-10 py-2 rounded-md border border-[#4C5F7F] focus:outline-none placeholder-gray-400"
            />
            {!isMobile && (
              <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-lg" />
            )}
          </div>
        )}
      </div>

      {/* Right: Profile */}
      <div className="flex-shrink-0">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </header>
  );
};

export default Header;
