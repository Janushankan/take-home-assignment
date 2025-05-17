import {
  FiLock,
  FiSettings,
  FiCamera,
  FiHome,
  FiUmbrella,
  FiSun,
  FiMonitor,
} from "react-icons/fi";

import { useEffect, useState } from "react";
import DeviceCategoryList from "./components/DeviceCategoryList";
import DeviceCard from "./components/DeviceCard";
import ThermostatPanel from "./components/ThermostatPanel";
import EnergyToggle from "./components/EnergyToggle";
import StayAccordion from "./components/StayAccordion";
import Header from "./components/Header";
import { RxDashboard } from "react-icons/rx";

function App() {
  const [activeCards, setActiveCards] = useState<string[]>([]);
  const [deactivationTimes, setDeactivationTimes] = useState<
    Record<string, string>
  >({});
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  useEffect(() => {
    const storedTimes = localStorage.getItem("deactivationTimes");
    if (storedTimes) {
      setDeactivationTimes(JSON.parse(storedTimes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "deactivationTimes",
      JSON.stringify(deactivationTimes)
    );
  }, [deactivationTimes]);

  const toggleCard = (title: string) => {
    const isActive = activeCards.includes(title);
    if (isActive) {
      setActiveCards((prev) => prev.filter((t) => t !== title));
      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(
        now.getMinutes()
      ).padStart(2, "0")}`;
      setDeactivationTimes((prev) => ({ ...prev, [title]: timeStr }));
    } else {
      setActiveCards((prev) => [...prev, title]);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#182D55] text-white">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-20 bg-[#182D55] flex flex-col items-center py-3.5 space-y-6 border-r border-[#4C5F7F]">
          <div className="w-full border-b-2 border-[#5e6b83] pb-[14px] flex items-center justify-center text-3xl font-medium">
            <span className="text-[#6DE0FF] font-extrabold">G</span>S
          </div>

          <div className="flex flex-col gap-3 text-2xl">
            {["Dashboard", "Lock", "Settings"].map((menu) => {
              const Icon =
                menu === "Dashboard"
                  ? RxDashboard
                  : menu === "Lock"
                  ? FiLock
                  : FiSettings;
              return (
                <div
                  key={menu}
                  onClick={() => setActiveMenu(menu)}
                  className={`p-3 rounded-lg cursor-pointer transition-all flex items-center justify-center ${
                    activeMenu === menu
                      ? "bg-[#6DE0FF] text-[#182D55]"
                      : "text-white hover:bg-[#24375E] hover:text-white"
                  }`}
                  title={menu}
                >
                  <Icon />
                </div>
              );
            })}
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <Header />

          <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
            {/* Left: Device Section */}
            <main className="flex-1 min-w-0 overflow-y-auto p-6">
              <section className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <h1 className="text-2xl sm:text-3xl font-bold">
                    Domotic assistant
                  </h1>
                  <button className="bg-[#6DE0FF] px-4 py-2 rounded-md text-sm font-medium hover:bg-[#24375E] text-[#24375E] hover:text-white w-full sm:w-auto">
                    + Add Device
                  </button>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="md:w-1/3 w-full">
                    <DeviceCategoryList />
                  </div>

                  <div className="md:w-2/3 w-full">
                    <div className="border border-[#4C5F7F] rounded-lg p-8">
                      <div className="text-sm text-white mb-4">
                        HOUSE EXTERIOR DEVICES
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          "Entrance camera",
                          "Stairs camera",
                          "Canopies",
                          "Garage door",
                          "Parasols",
                          "Garden lights",
                        ].map((title, i) => (
                          <DeviceCard
                            key={title}
                            icon={
                              i === 0 || i === 1 ? (
                                <FiCamera />
                              ) : i === 2 ? (
                                <FiMonitor />
                              ) : i === 3 ? (
                                <FiHome />
                              ) : i === 4 ? (
                                <FiUmbrella />
                              ) : (
                                <FiSun />
                              )
                            }
                            title={title}
                            active={activeCards.includes(title)}
                            time={deactivationTimes[title]}
                            onClick={() => toggleCard(title)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>

            {/* Right Panel */}
            <aside
              className="w-full lg:w-[320px] shrink-0 bg-[#24375E] p-4 space-y-6 
                         border-t border-[#4C5F7F] lg:border-t-0 
                         lg:overflow-y-auto max-h-full lg:max-h-screen"
            >
              <h2 className="text-xl text-white font-medium mb-2">
                General commands
              </h2>
              <div className="border-t border-[#4C5F7F]" />
              <div className="space-y-4">
                <ThermostatPanel />
                <div className="border-t border-[#4C5F7F]" />
              </div>
              <div className="space-y-4">
                <EnergyToggle />
                <div className="border-t border-[#4C5F7F]" />
              </div>
              <StayAccordion />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
