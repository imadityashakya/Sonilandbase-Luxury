import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ================= DATA ================= */
const tabs = {
  Connectivity: [
    ["Golf Course Extension Road", "At doorstep"],
    ["Sohna Road", "5 min"],
    ["Southern Peripheral Road", "8 min"],
    ["Golf Course Road", "15 min"],
    ["NH 48", "20 min"],
    ["Proposed Metro (Subhash Chowk GMRL)", "15 min"],
    ["IGI Airport", "40 min"],
    ["Trump Tower", "2 min"],
    ["DLF The Arbour", "5 min"],
  ],
  Work: [
    ["International Financial Centre", "5 min"],
    ["AIPL Business Club", "5 min"],
    ["Kore Tech Park", "10 min"],
    ["Capital Cyberscape", "10 min"],
    ["American Express Campus", "20 min"],
    ["40 Mn+ Sq. Ft. Grade-A offices", "15-20 min"],
  ],
  Retail: [
    ["AIPL Joy Street", "2 min"],
    ["Worldmark Gurgaon", "5 min"],
    ["M3M 65th Avenue", "10 min"],
    ["Elan Epic", "15 min"],
    ["40% of Gurugram's organized retail", "within 20 min"],
  ],
  Health: [
    ["Marengo Asia Hospital", "15 min"],
    ["Artemis Hospital", "18 min"],
    ["Medanta Medicity", "20 min"],
    ["Paras Hospital", "20 min"],
    ["2,000+ hospital beds", "within the corridor"],
  ],
  Schools: [
    ["Heritage Xperiential Learning School", "4 min"],
    ["Sri Chaitanya Global School", "4 min"],
    ["The Shriram Millennium School", "6 min"],
    ["St. Xavier's High School", "10 min"],
    ["GD Goenka", "20 min"],
  ],
} as const;

type TabKey = keyof typeof tabs;

/* ================= COMPONENT ================= */
export function LocationAdvantage() {
  const [active, setActive] = useState<TabKey>("Connectivity");

  return (
    <section id="location" className="bg-[#f8f5f0] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* ================= HEADING ================= */}
        <h2 className="text-3xl md:text-5xl font-semibold text-[#1A1612] leading-tight tracking-wide">
          Everything Gurugram Runs On,
          <br />
          <span className="text-[#B8914A] italic">
            Right Outside Your Door.
          </span>
        </h2>

        {/* ================= LAYOUT ================= */}
        <div className="mt-14 grid lg:grid-cols-2 gap-12">

          {/* ================= LEFT (TABS + TABLE) ================= */}
          <div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-3 mb-8">
              {(Object.keys(tabs) as TabKey[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActive(tab)}
                  className={`px-4 py-2 text-xs md:text-sm font-semibold border transition-all ${
                    active === tab
                      ? "bg-[#B8914A] text-white border-[#B8914A]"
                      : "bg-white text-[#1A1612] border-gray-300 hover:border-[#B8914A]"
                  }`}
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Table */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-[#B8914A]/30 rounded-lg overflow-hidden"
              >
                {tabs[active].map(([place, dist]) => (
                  <div
                    key={place}
                    className="flex items-center justify-between px-5 py-4 border-b last:border-none border-[#B8914A]/20"
                  >
                    {/* Left Text */}
                    <span className="text-sm md:text-base font-medium text-[#1A1612]">
                      {place}
                    </span>

                    {/* Dotted Line */}
                    <span className="flex-1 border-b border-dotted border-gray-300 mx-3 opacity-60" />

                    {/* Right Text */}
                    <span className="text-xs md:text-sm font-bold text-[#B8914A] whitespace-nowrap">
                      {dist}
                    </span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* ================= CALLOUT ================= */}
            <div className="mt-8 p-5 bg-white border-l-4 border-[#B8914A] shadow-sm">
              <p className="text-lg md:text-xl font-semibold text-[#1A1612]">
                A true Walk-to-Life address.
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Work. Shop. Heal. Learn. Play — all within minutes.
              </p>
            </div>
          </div>

          {/* ================= RIGHT (MAP) ================= */}
          <div className="relative rounded-xl overflow-hidden border-4 border-[#B8914A] shadow-lg min-h-[350px] md:min-h-[520px]">
            <iframe
              title="Location Map"
              src="https://maps.google.com/maps?q=Sector%2066%20Gurgaon&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[350px] md:min-h-[520px] grayscale-[0.2] contrast-110"
              loading="lazy"
            />

            {/* Gold overlay for premium feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#B8914A]/20 to-transparent pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}