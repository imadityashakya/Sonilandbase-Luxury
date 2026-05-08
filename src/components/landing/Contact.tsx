import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Mail, MapPin, Phone } from "lucide-react";
import { z } from "zod";
import { fadeUp, stagger } from "./motion";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().regex(/^\d{10}$/, "Phone must be exactly 10 digits"),
  email: z.string().trim().email("Please enter a valid email").max(160),
  message: z.string().trim().max(500).optional(),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        if (i.path[0]) errs[String(i.path[0])] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
    setForm({ name: "", phone: "", email: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-ink text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_70%_30%,_var(--gold),_transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
            <span className="gold-divider" />
            <span className="font-button text-[0.7rem] text-gold">GET IN TOUCH</span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1]"
          >
            Begin Your <span className="gradient-gold-text italic">Journey</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-white/70 leading-relaxed max-w-md">
            Schedule a private viewing or speak with our concierge. Our team responds within 24 hours.
          </motion.p>

          <motion.div variants={stagger} className="mt-10 space-y-5">
            {[
              { icon: Phone, label: "Call us", value: "+91 98765 43210" },
              { icon: Mail, label: "Write to us", value: "concierge@thesonilandbase.com" },
              { icon: MapPin, label: "Sales gallery", value: "The Soni Landbase, Sector 21" },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <motion.div key={c.label} variants={fadeUp} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-gold/15 text-gold border border-gold/30">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="font-button text-[0.6rem] text-gold">{c.label.toUpperCase()}</p>
                    <p className="mt-1 text-white/90">{c.value}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="bg-white/[0.04] backdrop-blur-sm border border-white/10 p-7 md:p-10"
        >
          <div className="space-y-5">
            {(["name", "phone", "email"] as const).map((field) => (
              <div key={field}>
                <label className="font-button text-[0.62rem] text-gold/90 block mb-2">
                  {field === "name" ? "FULL NAME" : field === "phone" ? "PHONE (10 DIGITS)" : "EMAIL"}
                </label>
                <input
                  type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  maxLength={field === "phone" ? 10 : field === "email" ? 160 : 80}
                  className="input-luxe w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/30 font-body"
                  placeholder={field === "name" ? "Mr. Soni" : field === "phone" ? "9876543210" : "you@example.com"}
                />
                {errors[field] && (
                  <p className="mt-1.5 text-xs text-destructive">{errors[field]}</p>
                )}
              </div>
            ))}
            <div>
              <label className="font-button text-[0.62rem] text-gold/90 block mb-2">MESSAGE (OPTIONAL)</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={3}
                maxLength={500}
                className="input-luxe w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/30 resize-none font-body"
                placeholder="Tell us what you're looking for..."
              />
            </div>

            <button
              type="submit"
              className="mt-4 w-full font-button text-[0.7rem] py-4 bg-gold text-ink hover:shadow-gold transition-all duration-500 hover:-translate-y-0.5"
            >
              {sent ? (
                <span className="inline-flex items-center gap-2"><Check size={16} /> Message sent</span>
              ) : (
                "Submit Enquiry"
              )}
            </button>
          </div>
        </motion.form>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant hover:scale-110 transition-transform duration-500"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.516 5.26l-.999 3.648 3.972-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>
    </section>
  );
}