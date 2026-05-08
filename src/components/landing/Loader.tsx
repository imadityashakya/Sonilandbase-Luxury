import { motion } from "framer-motion";
import logo from "@/assets/logo2.png";

/* ── tiny util: evenly-spaced degrees ── */
const ring = (count: number) =>
  Array.from({ length: count }, (_, i) => (360 / count) * i);

export function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      style={{ background: "var(--color-ink, #0f0d0a)" }}
    >
      {/* ── AMBIENT RADIAL GLOW (background layer) ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(180,138,82,0.13) 0%, rgba(180,138,82,0.04) 50%, transparent 75%)",
        }}
      />

      {/* ── OUTER SLOW-SPIN RING (dashed arc) ── */}
      <motion.div
        initial={{ opacity: 0, rotate: 0, scale: 0.7 }}
        animate={{ opacity: 0.35, rotate: 360, scale: 1 }}
        transition={{
          opacity: { duration: 1, delay: 0.3 },
          scale: { duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
          rotate: { duration: 18, repeat: Infinity, ease: "linear" },
        }}
        className="absolute"
        style={{
          width: 280,
          height: 280,
          borderRadius: "50%",
          border: "1px dashed rgba(212,175,55,0.55)",
        }}
      />

      {/* ── MIDDLE COUNTER-SPIN RING ── */}
      <motion.div
        initial={{ opacity: 0, rotate: 0, scale: 0.7 }}
        animate={{ opacity: 0.22, rotate: -360, scale: 1 }}
        transition={{
          opacity: { duration: 1, delay: 0.5 },
          scale: { duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
          rotate: { duration: 10, repeat: Infinity, ease: "linear" },
        }}
        className="absolute"
        style={{
          width: 210,
          height: 210,
          borderRadius: "50%",
          border: "1px solid rgba(212,175,55,0.3)",
          borderTopColor: "rgba(212,175,55,0.9)",
          borderRightColor: "rgba(212,175,55,0.5)",
        }}
      />

      {/* ── INNER FAST-SPIN ARC ── */}
      <motion.div
        initial={{ opacity: 0, rotate: 0, scale: 0.5 }}
        animate={{ opacity: 1, rotate: 360, scale: 1 }}
        transition={{
          opacity: { duration: 0.6, delay: 0.7 },
          scale: { duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] },
          rotate: { duration: 2.2, repeat: Infinity, ease: "linear" },
        }}
        className="absolute"
        style={{
          width: 148,
          height: 148,
          borderRadius: "50%",
          border: "1.5px solid transparent",
          borderTopColor: "rgba(212,175,55,1)",
          borderRightColor: "rgba(212,175,55,0.4)",
          filter: "drop-shadow(0 0 6px rgba(212,175,55,0.7))",
        }}
      />

      {/* ── ORBIT DOTS on outer ring ── */}
      {ring(8).map((deg, i) => (
        <motion.div
          key={`dot-${i}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0.6], scale: [0, 1, 1] }}
          transition={{ duration: 0.5, delay: 0.9 + i * 0.07 }}
          className="absolute"
          style={{
            width: 280,
            height: 280,
            borderRadius: "50%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            transform: `rotate(${deg}deg)`,
            transformOrigin: "center center",
          }}
        >
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            style={{
              width: i % 2 === 0 ? 4 : 3,
              height: i % 2 === 0 ? 4 : 3,
              borderRadius: "50%",
              background:
                i % 2 === 0
                  ? "rgba(212,175,55,0.95)"
                  : "rgba(212,175,55,0.5)",
              boxShadow:
                i % 2 === 0
                  ? "0 0 6px 2px rgba(212,175,55,0.6)"
                  : "0 0 3px 1px rgba(212,175,55,0.3)",
              marginTop: 6,
            }}
          />
        </motion.div>
      ))}

      {/* ── CORNER ACCENT LINES ── */}
      {[
        { top: "18%", left: "18%", rotate: 0 },
        { top: "18%", right: "18%", rotate: 90 },
        { bottom: "18%", right: "18%", rotate: 180 },
        { bottom: "18%", left: "18%", rotate: 270 },
      ].map((pos, i) => (
        <motion.div
          key={`corner-${i}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="absolute hidden sm:block"
          style={{
            ...pos,
            width: 28,
            height: 28,
            transform: `rotate(${pos.rotate}deg)`,
            borderTop: "1px solid rgba(212,175,55,0.7)",
            borderLeft: "1px solid rgba(212,175,55,0.7)",
          }}
        />
      ))}

      {/* ── LOGO ── */}
      <motion.div className="relative z-10 flex items-center justify-center">

        {/* glow bloom behind logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{
            opacity: [0, 0.6, 0.35, 0.55, 0.35],
            scale: [0.3, 1.1, 1, 1.05, 1],
          }}
          transition={{
            duration: 3.5,
            times: [0, 0.4, 0.6, 0.8, 1],
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute"
          style={{
            width: 160,
            height: 160,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(212,175,55,0.35) 0%, rgba(212,175,55,0.1) 50%, transparent 75%)",
            filter: "blur(12px)",
          }}
        />

        {/* logo image */}
        <motion.img
          src={logo}
          alt="Logo"
          initial={{ scale: 0.65, opacity: 0, y: 16 }}
          animate={{
            scale: [0.65, 1.06, 1.0],
            opacity: [0, 1, 1],
            y: [16, -2, 0],
          }}
          transition={{
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1],
            times: [0, 0.65, 1],
          }}
          style={{
            filter:
              "drop-shadow(0 0 18px rgba(212,175,55,0.55)) drop-shadow(0 0 40px rgba(212,175,55,0.2))",
          }}
          className="relative w-28 sm:w-32 md:w-36 lg:w-40 object-contain"
        />
      </motion.div>

      {/* ── PROGRESS BAR ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="absolute bottom-[12%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5"
      >
        {/* track */}
        <div
          className="relative overflow-hidden rounded-full"
          style={{
            width: 120,
            height: 2,
            background: "rgba(212,175,55,0.15)",
          }}
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 2.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, rgba(212,175,55,0.4), rgba(212,175,55,1), rgba(255,220,100,1))",
              boxShadow: "0 0 8px 2px rgba(212,175,55,0.5)",
            }}
          />
        </div>

        {/* label */}
        <motion.p
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 0.55, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="text-[9px] tracking-[0.35em] uppercase"
          style={{ color: "rgba(212,175,55,0.7)", fontFamily: "inherit" }}
        >
          Loading Experience
        </motion.p>
      </motion.div>

    </motion.div>
  );
}