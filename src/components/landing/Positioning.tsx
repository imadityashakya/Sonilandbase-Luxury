import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, stagger, slideRight } from "./motion";
import hero from "@/assets/gallery2.jpeg";

export function Positioning() {
  return (
    <section id="positioning" className="bg-cream py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">

        {/* TEXT SECTION */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="lg:col-span-3"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
            <span className="gold-divider" />
            <span className="font-button text-[0.7rem] tracking-[0.25em] text-gold">
              MANHATTAN · DUBAI · SINGAPORE · NOW, GURUGRAM
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.05] text-ink"
          >
            This Is Not Just <br />
            Where You Live. <br />
            <span className="gradient-gold-text italic">
              This Is Where The City Lives.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 md:mt-7 text-base md:text-[17px] text-muted-foreground leading-relaxed max-w-2xl"
          >
            The world's most aspirational cities share one thing — a downtown address that defines the
            city's pulse. BPTP Downtown 66 is Gurugram's answer. Not just a residence. A statement of
            arrival, crafted for those who seek distinction and refined living.
          </motion.p>

          <motion.blockquote
            variants={fadeUp}
            className="mt-6 md:mt-8 pl-5 border-l-2 italic font-display text-xl md:text-3xl text-ink/90 leading-snug"
            style={{ borderColor: "var(--gold)" }}
          >
            "A multi-generational holistic living experience designed for the modern connoisseur."
          </motion.blockquote>

          <motion.a
            variants={fadeUp}
            href="#snapshot"
            className="mt-7 md:mt-8 inline-flex items-center gap-2 font-button text-[0.7rem] text-gold story-link"
          >
            Explore the Project <ArrowRight size={14} />
          </motion.a>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="lg:col-span-2"
        >
          <div className="relative w-full rounded-2xl border-[5px] border-white shadow-elegant overflow-hidden">

            {/* 🔥 Tall premium image */}
            <div className="w-full aspect-[3/5] sm:aspect-[3/5] md:aspect-[4/6] lg:aspect-[3/5] bg-black">
              <img
                src={hero}
                alt="Tower hero render"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}