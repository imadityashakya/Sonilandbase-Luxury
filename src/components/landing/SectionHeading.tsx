import { motion } from "framer-motion";
import { fadeUp } from "./motion";

export function SectionHeading({
  eyebrow,
  title,
  italic,
  description,
  light,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  italic?: string;
  description?: string;
  light?: boolean;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={`flex flex-col ${alignCls} max-w-2xl ${align === "center" ? "mx-auto" : ""}`}
    >
      {eyebrow && (
        <div className="flex items-center gap-3 mb-5">
          <span className="gold-divider" />
          <span className="font-button text-[0.7rem] text-gold">{eyebrow}</span>
          {align === "center" && <span className="gold-divider" />}
        </div>
      )}
      <h2
        className={`font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}{" "}
        {italic && <span className="gradient-gold-text italic">{italic}</span>}
      </h2>
      {description && (
        <p className={`mt-5 text-base md:text-lg leading-relaxed ${light ? "text-white/70" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}