import { motion } from "framer-motion";
import { Waves, Dumbbell, TreePine, Shield, Coffee, Car, Users, Sparkles } from "lucide-react";
import { fadeUp, stagger } from "./motion";
import { SectionHeading } from "./SectionHeading";

const amenities = [
  { icon: Waves, label: "Infinity Pool" },
  { icon: Dumbbell, label: "Private Gym" },
  { icon: TreePine, label: "Landscaped Gardens" },
  { icon: Shield, label: "24/7 Security" },
  { icon: Coffee, label: "Clubhouse & Lounge" },
  { icon: Car, label: "Valet Parking" },
  { icon: Users, label: "Concierge Service" },
  { icon: Sparkles, label: "Spa & Wellness" },
];

export function Amenities() {
  return (
    <section id="amenities" className="py-24 md:py-32 bg-ink text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_30%_20%,_var(--gold),_transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="WORLD-CLASS"
          title="Amenities Beyond"
          italic="Compare"
          description="Every detail considered. Every comfort delivered. A lifestyle reserved for very few."
          light
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7"
        >
          {amenities.map((a) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.label}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group flex flex-col items-center text-center p-7 border border-white/10 hover:border-gold/50 transition-all duration-500 bg-white/[0.02] hover:bg-white/[0.05]"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gold/20 blur-2xl scale-0 group-hover:scale-100 transition-transform duration-500" />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-gold/5 text-gold group-hover:scale-110 group-hover:border-gold transition-all duration-500">
                    <Icon size={26} />
                  </div>
                </div>
                <span className="mt-5 font-body text-sm text-white/85">{a.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}