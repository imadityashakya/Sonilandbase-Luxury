import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

/* ================== Animation ================== */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* ================== Count Up Hook ================== */
function useCountUp(end: number, inView: boolean, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = time - startTime;
      const value = Math.min((progress / duration) * end, end);
      setCount(Math.floor(value));

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, inView]);

  return count;
}

/* ================== Data ================== */
const stats = [
  { value: 20, suffix: "+", label: "Years of Legacy" },
  { value: 25000, suffix: "+", label: "Happy Families" },
  { value: 50, suffix: "Mn+", label: "Sq. Ft. Delivered" },
  { value: 2000, suffix: "+", label: "Acres Land Bank" },
];

/* ================== Helper ================== */
function formatNumber(num: number) {
  if (num >= 1000000) return (num / 1000000).toFixed(0) + "M";
  if (num >= 1000) return (num / 1000).toFixed(0) + "K";
  return num;
}

/* ================== Component ================== */
export function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 bg-[#ebd3b9] overflow-hidden"
    >
      {/* Soft Glow */}
      <div className="hidden md:block absolute w-[400px] h-[400px] bg-[#B8914A]/10 blur-[120px] top-[-100px] left-[-100px]" />
      <div className="hidden md:block absolute w-[350px] h-[350px] bg-[#B8914A]/10 blur-[120px] bottom-[-100px] right-[-100px]" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8"
      >
        {stats.map((stat, i) => {
          const count = useCountUp(stat.value, inView);

          return (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -6 }}
              className="group relative p-5 md:p-6 rounded-xl md:rounded-2xl bg-white/40 backdrop-blur-md border border-[#B8914A]/30 text-center transition-all duration-300 hover:border-[#B8914A]"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#B8914A]/20 to-transparent blur-xl" />

              {/* Number */}
              <h3 className="relative font-extrabold text-3xl md:text-5xl text-[#1A1612]">
                {formatNumber(count)}
                <span className="text-[#B8914A] text-lg md:text-2xl ml-1 font-bold">
                  {stat.suffix}
                </span>
              </h3>

              {/* Divider */}
              <div className="w-10 h-[2px] bg-gradient-to-r from-transparent via-[#B8914A] to-transparent mx-auto my-4 opacity-70" />

              {/* Label */}
              <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-[#3a332a] leading-tight">
                {stat.label}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}