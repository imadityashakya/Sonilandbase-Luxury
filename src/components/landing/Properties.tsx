import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import plot from "@/assets/plot.jpg";
import bhk2 from "@/assets/2bhk.jpg";
import bhk3 from "@/assets/3bhk.jpg";
import { fadeUp, stagger, slideLeft, slideRight } from "./motion";
import { SectionHeading } from "./SectionHeading";

const properties = [
  {
    title: "Premium Plots",
    image: plot,
    size: "200 – 500 sq.yd",
    price: "Starting ₹85L",
    desc: "Build your dream on hand-picked plots within a gated, fully-developed community.",
  },
  {
    title: "2 BHK Residences",
    image: bhk2,
    size: "1,200 – 1,400 sq.ft",
    price: "Starting ₹1.2 Cr",
    desc: "Sophisticated apartments designed for couples and small families seeking elegant living.",
    featured: true,
  },
  {
    title: "3 BHK Villas",
    image: bhk3,
    size: "2,400 – 3,200 sq.ft",
    price: "Starting ₹2.8 Cr",
    desc: "Expansive private villas with double-height ceilings, private gardens and signature finishes.",
  },
];

export function Properties() {
  return (
    <section id="properties" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="OUR OFFERINGS"
          title="Curated"
          italic="Residences"
          description="From open-canvas plots to fully appointed villas — three distinct ways to call this address home."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {properties.map((p, idx) => (
            <motion.article
              key={p.title}
              variants={idx === 0 ? slideLeft : idx === 2 ? slideRight : fadeUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden bg-white shadow-soft hover:shadow-elegant transition-all duration-500 border border-transparent hover:border-gold/40 ${
                p.featured ? "md:scale-[1.04] md:-translate-y-2" : ""
              }`}
            >
              {p.featured && (
                <div className="absolute top-4 left-4 z-10 bg-gold text-ink font-button text-[0.62rem] px-3 py-1.5">
                  Featured
                </div>
              )}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-medium text-ink">{p.title}</h3>
                    <p className="mt-1 font-button text-[0.65rem] text-gold">{p.size}</p>
                  </div>
                  <ArrowUpRight className="text-ink group-hover:text-gold group-hover:rotate-45 transition-all duration-500" size={22} />
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                  <span className="font-display text-lg text-ink">{p.price}</span>
                  <a href="#contact" className="font-button text-[0.65rem] text-gold story-link">
                    Enquire
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}