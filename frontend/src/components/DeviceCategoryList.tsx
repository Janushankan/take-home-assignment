import React, { useState } from "react";
import { FiCamera } from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdOutlineRouter } from "react-icons/md";
import { RiFridgeLine, RiHome3Line } from "react-icons/ri";
import { TbAirConditioning } from "react-icons/tb";

const categories = [
  { label: "House exterior", icon: <RiHome3Line /> },
  { label: "Lights", icon: <HiOutlineLightBulb className="rotate-180" /> },
  { label: "Cams", icon: <FiCamera /> },
  { label: "Router", icon: <MdOutlineRouter /> },
  { label: "Home appliances", icon: <RiFridgeLine /> },
  { label: "Air conditioning", icon: <TbAirConditioning /> },
];

const DeviceCategoryList: React.FC = () => {
  const [active, setActive] = useState("House exterior");

  return (
    <div className="bg-[#24375E] p-4 rounded-lg space-y-5 h-full lg:max-h-screen overflow-y-auto">
      <h2 className="text-sm text-white mb-2">DEVICES</h2>
      {categories.map((cat) => {
        const isActive = active === cat.label;
        return (
          <button
            key={cat.label}
            onClick={() => setActive(cat.label)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-md transition-colors duration-200
              ${
                isActive
                  ? "bg-[#6DE0FF] text-[#182D55] border-[3px] border-[#6DE0FF] rounded-3xl shadow-[0_0_4px_0px_#6DE0FF] font-extrabold"
                  : "text-gray-300 hover:bg-[#182D55] hover:text-white border font-extrabold"
              }
            `}
          >
            <span
              className={`text-lg lg:text-2xl ${
                isActive ? "text-[#182D55]" : "text-gray-300 hover:text-white"
              }`}
            >
              {cat.icon}
            </span>
            <span className="text-sm font-medium">{cat.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default DeviceCategoryList;
