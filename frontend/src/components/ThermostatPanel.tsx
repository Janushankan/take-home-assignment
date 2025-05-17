import React, { useState } from "react";

const ThermostatPanel: React.FC = () => {
  const [temp, setTemp] = useState(25);
  const [targetTemp, setTargetTemp] = useState(19);
  const [auto, setAuto] = useState(true);

  return (
    <div className="p-1">
      <h3 className="text-sm text-white uppercase mb-4">THERMOSTAT</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left: Temperature Box */}
        <div className="border border-[#4C5F7F] rounded-xl p-4 flex flex-col items-center justify-center">
          <div className="text-xl font-medium">{temp}°C</div>
          <div className="text-xl text-gray-300 mt-2">{targetTemp}°C</div>
        </div>

        {/* Right: Buttons and Toggle */}
        <div className="flex flex-col justify-between gap-4">
          {/* + / - buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => setTargetTemp(targetTemp + 1)}
              className="w-8 h-8 rounded border border-gray-500 text-white hover:bg-[#5c6984]"
            >
              +
            </button>
            <button
              onClick={() => setTargetTemp(targetTemp - 1)}
              className="w-8 h-8 rounded border border-gray-500 text-white hover:bg-[#5c6984]"
            >
              −
            </button>
          </div>

          {/* Toggle + Label */}
          <div className="flex items-center justify-between">
            {/* Toggle */}
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={auto}
                onChange={() => setAuto(!auto)}
                className="sr-only peer"
              />
              <div className="border-2 border-[#4C5F7F] w-11 h-6 bg-[#3C4B6F] rounded-full peer-checked:bg-[#3B4C6F] relative">
                <div
                  className={`absolute top-1/2 left-1 w-4 h-4 rounded-full transform -translate-y-1/2 transition-transform ${
                    auto ? "translate-x-[18px] bg-[#6DE0FF]" : "bg-[#8A94AA]"
                  }`}
                />
              </div>
            </label>

            {/* Label */}
            <span className="text-sm text-white ml-4">
              Automatic regulation
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThermostatPanel;
