import React, { useEffect, useState } from "react";

type DeviceCardProps = {
  icon: React.ReactElement;
  title: string;
  time?: string;
  active?: boolean;
  onClick?: () => void;
};

const DeviceCard: React.FC<DeviceCardProps> = ({
  icon,
  title,
  time,
  active = false,
  onClick,
}) => {
  const [currentTime, setCurrentTime] = useState<string>("");

  const getCurrentTime = () => {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    return `${h}:${m}`;
  };

  useEffect(() => {
    if (!active && !time) {
      // set immediately
      setCurrentTime(getCurrentTime());

      // update every minute
      const interval = setInterval(() => {
        setCurrentTime(getCurrentTime());
      }, 60000);

      return () => clearInterval(interval);
    }
  }, [active, time]);

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-xl px-6 py-8 border transition-all text-center flex flex-col items-center space-y-6
        ${
          active
            ? "border-[1px] border-[#6DE0FF] text-[#6DE0FF] rounded-3xl shadow-[0_0_1px_1px_#6DE0FF] transition font-bold"
            : "border-[#4C5F7F] text-[#c8cfdc]  hover:border-[#24375E] hover:bg-[#24375E]"
        }`}
    >
      <div className="text-3xl">{icon}</div>
      <div className="space-y-2">
        <h3 className="font-medium text-sm">{title}</h3>

        {active ? (
          <p className="text-xs text-[#6DE0FF]">Active</p>
        ) : (
          <p className="text-xs text-[#939eb2]">
            Deactivated at {time || currentTime}
          </p>
        )}
      </div>
    </div>
  );
};

export default DeviceCard;
