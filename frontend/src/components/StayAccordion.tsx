import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const rooms = [
  { name: "Kitchen", content: "Kitchen devices or settings..." },
  { name: "Living room", content: "Living room content..." },
  { name: "Bedrooms", content: "Bedroom settings..." },
  { name: "Bath", content: "Bath temperature..." },
  { name: "Garden", content: "Garden lights/sensors..." },
];

const StayAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm text-white mb-4 uppercase">STAYS</h3>

      {rooms.map((room, index) => (
        <div key={room.name} className="m-0">
          <div
            className="flex justify-between items-center py-3 cursor-pointer hover:bg-[#182D55] px-2 rounded transition"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-sm text-white">{room.name}</span>
            {activeIndex === index ? (
              <FiChevronUp className="text-white text-base" />
            ) : (
              <FiChevronDown className="text-white text-base" />
            )}
          </div>

          {/* Divider (except last) */}
          {index < rooms.length - 1 && (
            <div className="border-b border-[#4C5F7F]" />
          )}

          {/* Expanded content */}
          {activeIndex === index && (
            <div className="text-xs text-white px-2 py-2">{room.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StayAccordion;
