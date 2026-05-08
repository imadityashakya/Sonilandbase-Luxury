import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { slideLeft, slideRight } from "./motion";
import { SectionHeading } from "./SectionHeading";

const rows = [
  ["Astaire Gardens", "₹30,000/sq.yd", "₹3,00,000/sq.yd", "10x"],
  ["Freedom Park Life", "₹2,364/sq.ft", "₹16,000/sq.ft", "6.8x"],
  ["Park Serene", "₹2,150/sq.ft", "₹12,000/sq.ft", "5.6x"],
  ["Terra", "₹5,400/sq.ft", "₹13,500/sq.ft", "2.5x"],
];

export function WhyNow() {
  return (
    <section id="why-now" className="bg-white py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        <SectionHeading
          eyebrow="WHY NOW"
          title="The Right Project. The Right Time."
          italic="The Right Price."
          description="BPTP has a proven track record of delivering appreciation that consistently outperforms the market — across every project, every cycle."
        />

        {/* GRID */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">

          {/* TABLE */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-3"
          >
            {/* MOBILE SCROLL WRAPPER */}
            <div className="overflow-x-auto rounded-xl border shadow-sm"
              style={{ borderColor: "var(--border)" }}>

              <table className="w-[700px] md:w-full text-left text-sm">
                <thead className="bg-[#ebd3b9]">
                  <tr>
                    <th className="px-4 md:px-5 py-3 md:py-4 font-bold tracking-[0.15em] md:tracking-[0.2em] text-ink text-xs md:text-sm">
                      PROJECT
                    </th>
                    <th className="px-4 md:px-5 py-3 md:py-4 font-bold tracking-[0.15em] md:tracking-[0.2em] text-ink text-xs md:text-sm">
                      LAUNCH
                    </th>
                    <th className="px-4 md:px-5 py-3 md:py-4 font-bold tracking-[0.15em] md:tracking-[0.2em] text-ink text-xs md:text-sm">
                      CURRENT
                    </th>
                    <th className="px-4 md:px-5 py-3 md:py-4 font-bold tracking-[0.15em] md:tracking-[0.2em] text-ink text-right text-xs md:text-sm">
                      GROWTH
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {rows.map((r) => (
                    <tr
                      key={r[0]}
                      className="border-t transition-all duration-300 hover:bg-[#ebd3b9]/40"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <td className="px-4 md:px-5 py-3 md:py-4 font-semibold text-ink whitespace-nowrap">
                        {r[0]}
                      </td>

                      <td className="px-4 md:px-5 py-3 md:py-4 text-ink/70 whitespace-nowrap">
                        {r[1]}
                      </td>

                      <td className="px-4 md:px-5 py-3 md:py-4 font-medium text-ink whitespace-nowrap">
                        {r[2]}
                      </td>

                      <td className="px-4 md:px-5 py-3 md:py-4 text-right whitespace-nowrap">
                        <span className="inline-flex items-center gap-1 font-bold text-[#8a6a1a] text-base md:text-lg">
                          {r[3]} <TrendingUp size={14} />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>

            <p className="mt-3 text-xs text-muted-foreground">
              Past appreciation is indicative. Not a guarantee of future returns.
            </p>
          </motion.div>

          {/* RIGHT PANEL */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-2"
          >
            <div
              className="bg-white border-2 shadow-lg p-5 md:p-7 rounded-xl"
              style={{ borderColor: "#8a6a1a" }}
            >
              <div className="font-bold tracking-[0.2em] md:tracking-[0.25em] text-[#8a6a1a] text-[10px] md:text-xs">
                EOI WINDOW NOW OPEN
              </div>

              <div className="mt-5 space-y-3 text-sm">

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Launch Price</span>
                  <span className="font-semibold text-ink">₹20,990/sq.ft</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Inaugural Disc.</span>
                  <span className="font-semibold text-ink">– ₹1,000/sq.ft</span>
                </div>

                <div
                  className="border-t pt-3 flex justify-between"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span className="font-bold tracking-[0.15em] md:tracking-[0.2em] text-ink text-[10px] md:text-xs">
                    EFFECTIVE
                  </span>

                  <span className="font-bold text-xl md:text-2xl text-[#8a6a1a]">
                    ₹19,990/sq.ft
                  </span>
                </div>

              </div>

              <div className="mt-6 space-y-2 text-sm text-ink">
                <p>
                  ~2,538 sq.ft from{" "}
                  <span className="font-bold text-base md:text-lg">≈ ₹5.3 Cr*</span>
                </p>
                <p>
                  ~2,918 sq.ft from{" "}
                  <span className="font-bold text-base md:text-lg">≈ ₹6.1 Cr*</span>
                </p>
              </div>

              <a
                href="#leadform"
                className="mt-6 block text-center font-bold tracking-wider text-[0.75rem] py-4 bg-[#8a6a1a] text-white hover:bg-[#6f5413] transition-colors duration-300 rounded-md"
              >
                Register Your Interest
              </a>

              <p className="mt-3 text-[10px] text-muted-foreground">
                *Excl. taxes, PLC & charges
              </p>
            </div>

            <p className="mt-3 text-xs text-[#8a6a1a] text-center font-medium">
              Limited units at this price. EOI closes soon.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}