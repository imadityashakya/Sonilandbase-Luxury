import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/* ================= IMAGES ================= */
import one from "@/assets/one.jpeg";
import zone from "@/assets/zone.png";
import tower from "@/assets/tower3.jpeg"
import lift from "@/assets/6lifts.png"
import glass from "@/assets/metal.jpeg"
import balcony from "@/assets/balcony.jpeg"

/* ================= DATA ================= */
const stats = [
  {
    num: "3",
    label: "Iconic Towers",
    sub: "Ultra-private residences",
    img: tower,
  },
  {
    num: "4 Units",
    label: "Per Floor",
    sub: "Exclusive per tower",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200",
  },
  {
    num: "~85 ft",
    label: "Running Balcony",
    sub: "Wraparound panorama",
    img: balcony,
  },
  {
    num: "4.23 Acres",
    label: "Total Project",
    sub: "Master plan footprint",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200",
  },
  {
    num: "6 Lifts",
    label: "Per Tower",
    sub: "Express + service",
    img: lift,
  },
  {
    num: "1.35 L Sqft",
    label: "Club & Landscape",
    sub: "Lifestyle decks",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200",
  },
  {
    num: "2 Configs",
    label: "2,600 & 2,900 Sqft",
    sub: "3 BHK + Study",
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200",
  },

  /* NEW CARD */
  {
    num: "My One",
    label: "Construction Certified",
    sub: "Premium quality assurance",
    img: one,
  },

  /* NEW CARD */
  {
    num: "Seismic Zone V",
    label: "Structural Safety",
    sub: "Advanced earthquake resistance",
    img: zone,
  },

  {
    num: "IGBC Platinum",
    label: "Pre-Certified",
    sub: "Green building",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200",
  },
  {
    num: "Aedas SG",
    label: "Principal Architect",
    sub: "World-class design",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
  },
  {
    num: "No Shared Walls",
    label: "4 Units/Floor",
    sub: "Maximum privacy",
    img: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?q=80&w=1200",
  },
  {
    num: "Glass & Metal",
    label: "Facade",
    sub: "Premium envelope",
    img: glass,
  },
];

/* ================= COMPONENT ================= */
export function Snapshot() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrame: number;
    const speed = 0.6;

    const scroll = () => {
      if (!el) return;

      el.scrollLeft += speed;

      /* Infinite loop */
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#f3e3d2] to-[#e7c9ab] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1612] tracking-tight">
            Project{" "}
            <span className="text-[#B8914A] italic">
              Highlights
            </span>
          </h2>

          <div className="mt-4 w-24 h-[3px] bg-[#B8914A] rounded-full" />
        </div>

        {/* Auto Scroll Container */}
        <div
          ref={scrollRef}
          className="
            flex gap-6 md:gap-8
            overflow-x-scroll
            no-scrollbar
            scroll-smooth
            pb-4
          "
        >
          {[...stats, ...stats].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.03,
                y: -6,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                relative
                min-w-[260px]
                sm:min-w-[290px]
                md:min-w-[320px]
                h-[330px]
                md:h-[360px]
                rounded-[28px]
                overflow-hidden
                flex-shrink-0
                border-[3px]
                border-[#B8914A]
                bg-black
                shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                group
              "
            >
              {/* Background Image */}
              <img
                src={s.img}
                alt={s.label}
                loading="lazy"
                className="
                  absolute inset-0
                  w-full h-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />

              {/* Golden Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[#B8914A]/10" />

              {/* Border Shine */}
              <div className="absolute inset-0 rounded-[28px] ring-1 ring-white/10" />

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-7">

                {/* Number */}
                <div className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                  {s.num}
                </div>

                {/* Label */}
                <div className="mt-2 text-sm md:text-base font-bold uppercase tracking-[0.18em] text-[#E6C07B]">
                  {s.label}
                </div>

                {/* Sub Text */}
                <div className="mt-3 text-xs md:text-sm text-gray-200 leading-relaxed max-w-[90%]">
                  {s.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hide Scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}