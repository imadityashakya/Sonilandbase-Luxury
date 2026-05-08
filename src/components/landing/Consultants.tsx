import { motion } from "framer-motion";
import { fadeUp, stagger } from "./motion";
import { SectionHeading } from "./SectionHeading";

const list = [
  {
    name: "Aedas",
    role: "Principal Architect & Interior Design",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&auto=format&fit=crop&q=80",
  },
  {
    name: "Coopers Hill",
    role: "Landscape Consultant",
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&auto=format&fit=crop&q=80",
  },
  {
    name: "Green Tree",
    role: "Green Building Consultant",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&auto=format&fit=crop&q=80",
  },
  {
    name: "RWDI",
    role: "Wind Tunnel Consultant",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&auto=format&fit=crop&q=80",
  },
  {
    name: "BES Consultants",
    role: "Facade Consultant",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80",
  },
  {
    name: "Geocon",
    role: "Geotechnical Consultant",
    img: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=1200&auto=format&fit=crop&q=80",
  },
];

export function Consultants() {
  return (
    <section id="consultants" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="GLOBAL TEAM"
          title="Built by the"
          italic="World's Best."
          description="Every detail entrusted to globally acclaimed specialists."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {list.map((item) => (
            <motion.div
              key={item.name}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative overflow-hidden bg-white rounded-xl shadow-sm transition-all duration-500"
              style={{
                border: "2px solid #8a6a1a",
              }}
            >
              {/* IMAGE */}
              <div className="h-40 md:h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 text-center relative">
                {/* gold hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
                  style={{
                    boxShadow:
                      "0 0 0 1px #8a6a1a, 0 0 22px rgba(138,106,26,0.35)",
                  }}
                />

                <div className="relative">
                  <div className="font-display text-xl md:text-2xl text-ink group-hover:text-[#8a6a1a] transition-colors duration-300">
                    {item.name}
                  </div>

                  <div className="mt-2 font-bold text-[0.65rem] tracking-[0.2em] text-muted-foreground group-hover:text-ink transition-colors">
                    {item.role.toUpperCase()}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}