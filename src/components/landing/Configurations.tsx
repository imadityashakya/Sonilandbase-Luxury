import { motion } from "framer-motion";
import { fadeUp, slideLeft, slideRight } from "./motion";
import { SectionHeading } from "./SectionHeading";

import bhk2 from "@/assets/2bhk.jpg";
import bhk3 from "@/assets/3bhk.jpg";
import panHouse from "@/assets/pantHouse.jpg";

/* ================= DATA ================= */
const configs = [
  {
    img: bhk2,
    title: "3 BHK + Study + Servant Quarter",
    size: "~2,538 Sq. Ft.",
    points: [
      "Master Bedroom · 2 Bedrooms · Study/Puja",
      "Kitchen · Living/Dining",
      "Multiple Balconies",
    ],
  },
  {
    img: bhk3,
    title: "3 BHK + Family Lounge + Servant Quarter",
    size: "~2,918 Sq. Ft.",
    points: [
      "Master Bedroom · 2 Bedrooms · Kids/Family Lounge",
      "Kitchen · Living/Dining",
      "Multiple Balconies",
    ],
  },
  {
    img: panHouse,
    title: "Ultra Luxury Penthouse",
    size: "~5,900 & 6,900 Sq. Ft.",
    points: [
      "Exclusive Full-Floor Penthouse Residences",
      "Private Lounge · Premium Deck Spaces",
      "Information Available On Request",
    ],
  },
];

/* ================= COMPONENT ================= */
export function Configurations() {
  return (
    <section
      id="configurations"
      className="bg-white py-16 sm:py-20 md:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        
        {/* Heading */}
        <SectionHeading
          eyebrow="CONFIGURATIONS"
          title="Designed for the"
          italic="Way You Live."
          description="Every residence faces outward. Only 4 homes per floor. No shared walls. An ~85 ft wraparound balcony on every unit."
        />

        {/* Cards */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-7 md:gap-8">
          {configs.map((c, i) => (
            <motion.article
              key={c.title}
              variants={
                i === 0
                  ? slideLeft
                  : i === 1
                  ? slideRight
                  : fadeUp
              }
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{
                y: window.innerWidth > 768 ? -10 : 0,
              }}
              transition={{ duration: 0.5 }}
              className="
                group
                overflow-hidden
                rounded-2xl
                border-[2px] sm:border-[3px] md:border-[4px]
                border-[#B8914A]
                bg-white
                shadow-md
                hover:shadow-2xl
                hover:border-[#a67c3b]
                transition-all
                duration-500
              "
            >
              {/* Image */}
              <div className="relative h-[220px] sm:h-[260px] md:h-72 overflow-hidden bg-secondary">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-[1.2s]
                    ease-out
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 md:p-7">
                
                {/* Size */}
                <p
                  className="
                    text-[10px]
                    sm:text-xs
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#B8914A]
                  "
                >
                  {c.size}
                </p>

                {/* Title */}
                <h3
                  className="
                    mt-2 sm:mt-3
                    text-xl
                    sm:text-2xl
                    md:text-3xl
                    font-extrabold
                    leading-tight
                    text-[#1A1612]
                  "
                >
                  {c.title}
                </h3>

                {/* Points */}
                <ul
                  className="
                    mt-4 sm:mt-5
                    space-y-2
                    text-sm
                    sm:text-[15px]
                    leading-relaxed
                    text-[#3a332a]
                    font-medium
                  "
                >
                  {c.points.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#leadform"
                  className="
                    mt-6 sm:mt-7
                    inline-flex
                    text-xs
                    sm:text-sm
                    font-bold
                    tracking-[0.08em]
                    text-[#B8914A]
                    border-b-2
                    border-transparent
                    hover:border-[#B8914A]
                    transition-all
                    duration-300
                  "
                >
                  View Floor Plan
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}