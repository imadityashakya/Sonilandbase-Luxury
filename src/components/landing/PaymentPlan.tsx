import { motion } from "framer-motion";
import { fadeUp, stagger } from "./motion";
import { SectionHeading } from "./SectionHeading";

const milestones = [
  ["EOI", "Expression of Interest", "₹25 Lakhs"],
  ["30 Days from EOI", "Booking Amount", "10% of TSV"],
  ["90 Days from Allotment", "Installment", "5% of TSV"],
  ["180 Days from Allotment", "Installment", "5% of TSV"],
  ["Casting of 2nd Floor Slab", "Construction", "15% of TSV"],
  ["Casting of 25th Floor Slab", "Construction", "15% of TSV"],
  ["Completion of Top Floor Slab", "Construction", "15% of TSV"],
  ["Window Installation Begins", "Finishing", "15% of TSV"],
  ["Application of OC", "Pre-handover", "15% of TSV"],
  ["Offer of Possession", "Handover", "5% + Possession Charges"],
];

export function PaymentPlan() {
  return (
    <section id="payment" className="bg-[#ebd3b9] py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <SectionHeading
          eyebrow="PAYMENT PLAN"
          title="A Payment Plan Built"
          italic="for Smart Buyers."
          description="Flexible. Milestone-linked. Designed to give you time while the asset appreciates."
        />

        <motion.ol
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 relative pl-8 md:pl-12"
        >
          {/* vertical line */}
          <div
            className="absolute left-2.5 md:left-4 top-2 bottom-2 w-px"
            style={{ background: "var(--gold)" }}
          />

          {milestones.map((m, i) => (
            <motion.li
              key={i}
              variants={fadeUp}
              className="relative pb-10 last:pb-0"
            >
              {/* dot */}
              <span
                className="absolute -left-8 md:-left-12 top-1.5 h-4 w-4 rounded-full border-2 bg-[#ebd3b9]"
                style={{ borderColor: "var(--gold)" }}
              />

              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                <div>
                  <p className="font-display text-xl md:text-2xl font-bold text-ink">
                    {m[0]}
                  </p>
                  <p className="text-sm font-medium text-ink/70">
                    {m[1]}
                  </p>
                </div>

                <span className="font-button text-[0.75rem] tracking-[0.2em] font-bold text-[#8a6a1a] whitespace-nowrap">
                  {m[2]}
                </span>
              </div>

              {/* divider line after each column/item */}
              {i !== milestones.length - 1 && (
                <div
                  className="mt-6 h-px w-full opacity-60"
                  style={{ background: "var(--gold)" }}
                />
              )}
            </motion.li>
          ))}
        </motion.ol>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 p-6 bg-white border-l-4 shadow-soft flex flex-col md:flex-row md:items-center justify-between gap-4"
          style={{ borderColor: "var(--gold)" }}
        >
          <p className="text-ink font-semibold">
            EOI window is open now. Secure your unit before prices revise.
          </p>

          <a
            href="#leadform"
            className="font-button text-[0.75rem] px-6 py-3 font-bold bg-[#8a6a1a] text-white hover:opacity-90 transition-colors"
          >
            Register Your Interest
          </a>
        </motion.div>
      </div>
    </section>
  );
}