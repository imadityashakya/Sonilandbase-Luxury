import { motion } from "framer-motion";
import { useRef, useState, useCallback } from "react";

import {
  fadeUp,
  stagger,
  slideLeft,
  slideRight,
} from "./motion";

import { SectionHeading } from "./SectionHeading";
import pool from "@/assets/pool.png";

/* ================= DATA ================= */

const cats = [
  {
    title: "Health & Wellness",
    chips: [
      "Gym",
      "Yoga & Zumba",
      "Meditation Pavilion",
      "Vitality Pool",
      "Indoor Heated Pool",
      "Turkish Hammam",
      "Rain Therapy",
      "Sauna",
      "Reflexology Corner",
      "Treatment Room",
      "Pilates Studio",
      "Locker Room",
    ],
    img: pool,
    caption: "Indoor Wellness Pool",
  },

  {
    title: "Sports & Recreation",
    chips: [
      "Padel Court",
      "Pickleball Court",
      "Indoor Badminton",
      "Squash",
      "Rock Climbing Wall",
      "Boxing Station",
      "Outdoor Pool",
      "Pool Tables",
      "Air Hockey",
      "Foosball",
      "Table Tennis",
      "Chess",
    ],
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2000&auto=format&fit=crop",
    caption: "Sports Arena",
  },

  {
    title: "Leisure & Social",
    chips: [
      "Fine Dining with PDR",
      "Whiskey/Karaoke Lounge",
      "Sports Bar",
      "AV Room",
      "Musical Garden",
      "Reading Zone",
      "Outdoor Dining",
      "Juice Bar",
      "Ballroom & Banquet",
    ],
    img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000&auto=format&fit=crop",
    caption: "Luxury Fine Dining",
  },

  {
    title: "Kids & Family",
    chips: [
      "Kids Pool",
      "Kids Play Zone",
      "Robotics Lab",
      "Dance Studio",
      "Music Studio",
      "Art & Pottery",
      "Coaching Centre",
      "Kids Reading Zone",
    ],
    img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2000&auto=format&fit=crop",
    caption: "Kids Creative Zone",
  },

  {
    title: "Community & Business",
    chips: [
      "Business Centre",
      "Card Room",
      "Pavilion Seating",
      "Senior Citizen Zone",
      "Pre-function Hall",
      "Ballroom",
    ],
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000&auto=format&fit=crop",
    caption: "Business Lounge",
  },

  {
    title: "Luxury Experiences",
    chips: [
      "Private Lounge",
      "Sky Deck",
      "Cigar Room",
      "Cafe Seating",
      "Celebration Lawn",
      "Open Theatre",
    ],
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2000&auto=format&fit=crop",
    caption: "Sky Lounge",
  },
];

/* ================= DESKTOP CARD ================= */

function AmenityCard({
  item,
  index,
}: {
  item: (typeof cats)[0];
  index: number;
}) {
  return (
    <motion.div
      variants={index % 2 === 0 ? slideLeft : slideRight}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="
        group
        flex
        flex-col
        lg:grid
        lg:grid-cols-[360px_1fr]
        gap-5
        lg:gap-12
        items-center
      "
    >
      {/* IMAGE CARD */}
      <div
        className="
          relative
          w-full
          overflow-hidden
          rounded-[22px]
          border
          border-[#d8c29d]
          bg-white
          p-2
          shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        "
      >
        <div className="relative overflow-hidden rounded-[18px]">
          <img
            src={item.img}
            alt={item.caption}
            loading="lazy"
            className="
              h-[220px]
              sm:h-[250px]
              md:h-[340px]
              lg:h-[290px]
              w-full
              object-cover
              transition-transform
              duration-[1.3s]
              ease-out
              group-hover:scale-105
            "
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />

          {/* CAPTION */}
          <div
            className="
              absolute
              bottom-3
              left-1/2
              -translate-x-1/2
              w-[88%]
              rounded-full
              border
              border-white/20
              bg-white/95
              backdrop-blur-md
              px-3
              py-2.5
              text-center
              shadow-xl
            "
          >
            <p
              className="
                text-[10px]
                tracking-[0.2em]
                uppercase
                text-[#8f6c3f]
                font-medium
              "
            >
              {item.caption}
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <motion.div
        variants={stagger}
        className="w-full"
      >
        <motion.h3
          variants={fadeUp}
          className="
            font-display
            text-[1.35rem]
            sm:text-[1.7rem]
            lg:text-[2.2rem]
            leading-tight
            text-ink
            mb-4
            text-center
            lg:text-left
          "
        >
          {item.title}
        </motion.h3>

        <motion.div
          variants={stagger}
          className="
            flex
            flex-wrap
            gap-2
            justify-center
            lg:justify-start
          "
        >
          {item.chips.map((chip) => (
            <motion.span
              key={chip}
              variants={fadeUp}
              whileHover={{
                y: -2,
                backgroundColor: "var(--gold)",
                color: "#fff",
              }}
              transition={{ duration: 0.25 }}
              className="
                rounded-full
                border
                border-[#d8c29d]
                bg-white
                px-3
                py-2
                text-[11px]
                sm:text-[12px]
                md:text-[14px]
                text-ink
                shadow-sm
                transition-all
                duration-300
                cursor-default
                leading-none
                whitespace-nowrap
              "
            >
              {chip}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ================= MOBILE SWIPE SLIDER ================= */

function MobileSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    // Each card is 82vw wide + 12px gap; snap center offset is 9vw
    const cardWidth = el.scrollWidth / cats.length;
    const index = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.max(0, Math.min(cats.length - 1, index)));
  }, []);

  const scrollTo = (index: number) => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / cats.length;
    el.scrollTo({ left: cardWidth * index, behavior: "smooth" });
    setActiveIndex(index);
  };

  return (
    <div className="md:hidden mt-10">

      {/* SWIPE HINT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex items-center justify-between px-1 mb-5"
      >
        <div className="flex items-center gap-2">
          <span className="block h-px w-6 bg-[#c9a96e] opacity-50" />
          <p className="text-[9px] tracking-[0.32em] uppercase text-[#9d7b49] font-medium">
            Swipe to explore
          </p>
        </div>
        <p className="text-[11px] text-[#b49060] font-medium tabular-nums">
          {activeIndex + 1} / {cats.length}
        </p>
      </motion.div>

      {/* TRACK */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="
          flex
          gap-3
          overflow-x-auto
          snap-x
          snap-mandatory
          scroll-smooth
          pb-2
          px-4
          -mx-4
          scrollbar-hide
          [&::-webkit-scrollbar]:hidden
          [-ms-overflow-style:none]
          [scrollbar-width:none]
        "
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {/* leading spacer so first card centres nicely */}
        <div className="flex-shrink-0 w-[calc(50vw-41vw)]" />

        {cats.map((item, index) => (
          <div
            key={item.title}
            className="
              flex-shrink-0
              w-[82vw]
              max-w-[340px]
              snap-center
            "
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
              className="
                overflow-hidden
                rounded-[20px]
                border
                border-[#e5d4b7]
                bg-white
                shadow-[0_6px_24px_rgba(0,0,0,0.09)]
                h-full
              "
            >
              {/* IMAGE */}
              <div className="relative w-full h-[200px] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.caption}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                {/* Caption pill — top left */}
                <div className="absolute top-3 left-3 rounded-full border border-white/30 bg-white/88 backdrop-blur-sm px-3 py-[5px]">
                  <p className="text-[8.5px] tracking-[0.22em] uppercase text-[#8f6c3f] font-semibold leading-none">
                    {item.caption}
                  </p>
                </div>

                {/* Title — bottom */}
                <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-10 bg-gradient-to-t from-black/50 to-transparent">
                  <h3 className="font-display text-white text-[1.2rem] leading-tight drop-shadow-sm">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* CHIPS */}
              <div className="px-4 pt-3.5 pb-4 flex flex-wrap gap-[6px]">
                {item.chips.map((chip) => (
                  <span
                    key={chip}
                    className="
                      rounded-full
                      border
                      border-[#ddd0b8]
                      bg-[#fdf9f4]
                      px-3
                      py-[5px]
                      text-[10.5px]
                      font-medium
                      text-[#7a5530]
                      leading-none
                      whitespace-nowrap
                    "
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}

        {/* trailing spacer */}
        <div className="flex-shrink-0 w-[calc(50vw-41vw)]" />
      </div>

      {/* DOT INDICATORS */}
      <div className="flex items-center justify-center gap-[7px] mt-5">
        {cats.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to ${cats[i].title}`}
            className={`
              transition-all duration-300 rounded-full
              ${i === activeIndex
                ? "w-6 h-[6px] bg-[#b48a52]"
                : "w-[6px] h-[6px] bg-[#d8c29d] hover:bg-[#c9a96e]"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}

/* ================= MAIN ================= */

export function AmenitiesLight() {
  return (
    <section
      id="amenities"
      className="
        relative
        overflow-hidden
        bg-secondary
        py-16
        md:py-28
      "
    >
      {/* BACKGROUND EFFECT */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_top_right,#b48a52,transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="THE LIFESTYLE"
          title="1.35 Lakh Sq. Ft. of a Life"
          italic="Completely Well Lived."
          description="Every amenity designed for social, emotional, and physical wellbeing — across every generation, every lifestyle, every hour of the day."
        />

        {/* ── MOBILE HORIZONTAL SWIPE ── */}
        <MobileSlider />

        {/* ── DESKTOP VIEW ── */}
        <div className="hidden md:block mt-16 space-y-24">
          {cats.map((item, index) => (
            <AmenityCard
              key={item.title}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}