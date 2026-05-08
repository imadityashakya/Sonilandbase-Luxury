import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import thumb from "@/assets/video-thumb.jpg";

export function VideoSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative">
      <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <img src={thumb} alt="Watch our story" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-5"
        >
          <span className="font-button text-[0.7rem] text-gold mb-4">FILM</span>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.1] max-w-3xl">
            Experience The Soni Landbase <span className="gradient-gold-text italic">in motion</span>
          </h2>

          <button
            onClick={() => setOpen(true)}
            className="mt-12 relative group"
            aria-label="Play video"
          >
            <span className="absolute inset-0 rounded-full pulse-ring" />
            <span className="relative flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-gold text-ink transition-transform duration-500 group-hover:scale-110">
              <Play size={28} className="ml-1" fill="currentColor" />
            </span>
          </button>

          <p className="mt-6 font-button text-[0.65rem] text-white/70">WATCH THE FILM</p>
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[90] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setOpen(false)}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-white/80 hover:text-gold transition-colors"
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-5xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="The Soni Landbase Film"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}