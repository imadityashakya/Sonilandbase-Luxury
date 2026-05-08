import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import gallery1 from "@/assets/gallery1.mp4";
import gallery2 from "@/assets/gallery2.jpeg";
import gallery3 from "@/assets/gallery3.mp4";
import gallery5 from "@/assets/gallery5.mp4";
import gallery6 from "@/assets/gallery6.mp4";
import gallery7 from "@/assets/gallery7.mp4";
import gallery8 from "@/assets/gallery8.jpeg";

import { fadeUp, stagger } from "./motion";
import { SectionHeading } from "./SectionHeading";

const images = [
  { src: gallery1, h: "row-span-2" },
  { src: gallery2 },
  { src: gallery3 },
  { src: gallery5, h: "row-span-2" },
  { src: gallery6 },
  { src: gallery7 },
  { src: gallery8 },
];

const isVideo = (src: string) => src.endsWith(".mp4");

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="GALLERY"
          title="See It to"
          italic="Believe It."
        />

        {/* 📱 MOBILE SWIPE GALLERY */}
        <div
          className="
            mt-10 flex gap-4 overflow-x-auto
            snap-x snap-mandatory scroll-smooth
            no-scrollbar pb-4
            md:hidden
          "
        >
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className="
                flex-shrink-0 snap-center
                w-[92vw] h-[65vh]
                border-4 border-white
                overflow-hidden bg-black
              "
            >
              {isVideo(img.src) ? (
                <video
                  src={img.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
              ) : (
                <img
                  src={img.src}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>

        {/* 📱 SWIPE HINT (MOBILE ONLY) */}
        <div className="md:hidden mt-4 text-center">
          <p className="text-gold font-bold tracking-wide flex items-center justify-center gap-2">
            SWIPE FOR MORE <span className="text-xl">→</span>
          </p>
        </div>

        {/* 🖥 DESKTOP GRID */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="
            mt-14 hidden md:grid
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            auto-rows-[240px] gap-4
          "
        >
          {images.map((img, i) => (
            <motion.button
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden bg-secondary ${img.h ?? ""}`}
            >
              {isVideo(img.src) ? (
                <video
                  src={img.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
              ) : (
                <img
                  src={img.src}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          All media are artistic impressions for illustrative purposes only.
        </p>
      </div>

      {/* 🔍 FULLSCREEN MODAL */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={28} />
            </button>

            {isVideo(images[active].src) ? (
              <video
                src={images[active].src}
                controls
                autoPlay
                className="max-h-[85vh] max-w-[95vw]"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <img
                src={images[active].src}
                className="max-h-[85vh] max-w-[95vw] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🚫 hide scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>
    </section>
  );
}
