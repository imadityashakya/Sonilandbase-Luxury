import { memo, useState } from "react";

/* ================= IMAGES ================= */

import new1 from "@/assets/new1.jpg";
import new2 from "@/assets/new2.jpg";
import new3 from "@/assets/new3.jpg";
import new4 from "@/assets/new4.jpg";
import new5 from "@/assets/new5.jpg";
import new6 from "@/assets/new6.jpg";
import new7 from "@/assets/new7.jpg";
import new8 from "@/assets/new8.jpg";
import new9 from "@/assets/new9.jpg";
import new10 from "@/assets/new10.jpg";
import new11 from "@/assets/new11.jpg";
import new12 from "@/assets/new12.jpg";
import new13 from "@/assets/new13.jpg";
import new14 from "@/assets/new14.jpg";
import new15 from "@/assets/new15.jpg";
import new16 from "@/assets/new16.jpg";
import new17 from "@/assets/new17.jpg";
import new18 from "@/assets/new18.jpg";
import new19 from "@/assets/new19.jpg";
import new20 from "@/assets/new20.jpg";
import new21 from "@/assets/new21.jpg";
import new22 from "@/assets/new22.jpg";
import new23 from "@/assets/new23.jpg";

/* ================= DATA ================= */

const images = [
  new1,
  new2,
  new3,
  new4,
  new5,
  new6,
  new7,
  new8,
  new9,
  new10,
  new11,
  new12,
  new13,
  new14,
  new15,
  new16,
  new17,
  new18,
  new19,
  new20,
  new21,
  new22,
  new23,
];

/* ================= FAST IMAGE ================= */

const FastImage = memo(function FastImage({
  src,
}: {
  src: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-full w-full overflow-hidden bg-neutral-200">
      
      {/* Skeleton */}
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-neutral-300" />
      )}

      {/* Image */}
      <img
        src={src}
        alt=""
        draggable={false}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`
          h-full w-full object-cover
          transition-all duration-700 ease-out
          will-change-transform

          ${
            loaded
              ? "scale-100 opacity-100 blur-0"
              : "scale-105 opacity-0 blur-xl"
          }
        `}
      />

      {/* Overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-black/25 via-transparent to-transparent
        "
      />
    </div>
  );
});

/* ================= SINGLE STRIP ================= */

const Strip = memo(function Strip() {
  return (
    <div className="relative overflow-hidden">

      {/* LEFT FADE */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-8 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-r from-white to-transparent" />

      {/* RIGHT FADE */}
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-8 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-l from-white to-transparent" />

      {/* MARQUEE */}
      <div className="animate-marquee flex w-max gap-2 sm:gap-3 md:gap-5">

        {[...images, ...images].map((img, i) => (
          <div
            key={i}
            className="
              group
              relative
              flex-shrink-0
              overflow-hidden
              rounded-2xl
              bg-black

              shadow-[0_10px_30px_rgba(0,0,0,0.10)]

              h-[180px] w-[130px]

              xs:h-[200px] xs:w-[145px]

              sm:h-[240px] sm:w-[180px]

              md:h-[300px] md:w-[220px]

              lg:h-[370px] lg:w-[280px]
            "
          >
            <FastImage src={img} />

            {/* Hover Zoom */}
            <div
              className="
                absolute inset-0
                transition-transform duration-700
                group-hover:scale-[1.02]
              "
            />
          </div>
        ))}

      </div>
    </div>
  );
});

/* ================= MAIN ================= */

export const RealisticStrip = memo(function RealisticStrip() {
  return (
    <section
      className="
        relative
        overflow-hidden

        py-2 sm:py-4 md:py-6
        mt-6 sm:mt-10 md:mt-16
      "
    >

      {/* HEADER */}
      <div className="mb-5 sm:mb-8 md:mb-10 text-center px-4">

        <p
          className="
            text-[10px]
            sm:text-xs
            md:text-sm

            font-bold
            tracking-[0.28em]
            text-gold
          "
        >
          REALISTIC CAPTURES
        </p>

        <h2
          className="
            mt-2 sm:mt-3

            text-[26px]
            leading-tight

            sm:text-4xl
            md:text-5xl

            font-light
            tracking-tight
            text-black
          "
        >
          Crafted Like
          <span className="ml-2 italic text-gold">
            Reality.
          </span>
        </h2>
      </div>

      {/* STRIP */}
      <div className="relative left-1/2 w-screen -translate-x-1/2">
        <Strip />
      </div>

      {/* CSS */}
      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 75s linear infinite;
          will-change: transform;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 45s;
          }
        }

        @media (max-width: 480px) {
          .animate-marquee {
            animation-duration: 38s;
          }
        }
      `}</style>
    </section>
  );
});