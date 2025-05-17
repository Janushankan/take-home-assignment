import React, { useState } from "react";

const EnergyToggle: React.FC = () => {
  const [solar, setSolar] = useState(true);
  const [reserve, setReserve] = useState(false);

  return (
    <div className="space-y-4">
      {/* ENERGY Heading and Usage */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-1 md:gap-y-0">
        <span className="text-sm text-white uppercase">ENERGY</span>
        <span className="text-xs text-[#6DE0FF]">
          CURRENT CONSUMPTION - <span className="font-medium">12.4 kWh</span>
        </span>
      </div>

      {/* Solar Panel Toggle */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-white">Solar panels</span>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={solar}
            onChange={() => setSolar(!solar)}
          />
          <div className="border-2 border-[#4C5F7F] w-11 h-6 bg-[#3C4B6F] rounded-full peer-checked:bg-[#3B4C6F] relative">
            <div
              className={`absolute top-1/2 left-1 w-4 h-4 rounded-full transform -translate-y-1/2 transition-transform ${
                solar ? "translate-x-[18px] bg-[#6DE0FF]" : "bg-[#8A94AA]"
              }`}
            />
          </div>
        </label>
      </div>

      {/* Power Reserve Toggle */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-white">Power reserve</span>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={reserve}
            onChange={() => setReserve(!reserve)}
          />
          <div className="border-2 border-[#4C5F7F] w-11 h-6 bg-[#3C4B6F] rounded-full peer-checked:bg-[#3B4C6F] relative">
            <div
              className={`absolute top-1/2 left-1 w-4 h-4 rounded-full transform -translate-y-1/2 transition-transform ${
                reserve ? "translate-x-[18px] bg-[#6DE0FF]" : "bg-[#8A94AA]"
              }`}
            />
          </div>
        </label>
      </div>
    </div>
  );
};

export default EnergyToggle;
