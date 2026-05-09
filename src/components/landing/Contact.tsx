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
        href="https://wa.me/919873884671?text=Hi%2C%20I%27m%20interested%20in%20the%20project.%20Please%20share%20details."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          fixed bottom-24 md:bottom-6 right-5 z-50
          flex items-center justify-center
          h-16 w-16
          rounded-full
          bg-[#25D366]
          text-white
          shadow-[0_12px_35px_rgba(37,211,102,0.45)]
          transition-all duration-500
          hover:scale-110
          animate-[whatsappPulse_2s_infinite]
        "
      >
        <svg viewBox="0 0 32 32" fill="currentColor" className="h-8 w-8">
          <path d="M19.11 17.2c-.29-.14-1.69-.83-1.95-.93-.26-.1-.45-.14-.64.14-.19.29-.73.93-.89 1.12-.16.19-.33.22-.62.07-.29-.14-1.2-.44-2.29-1.42-.85-.76-1.42-1.69-1.58-1.98-.17-.29-.02-.44.12-.58.13-.13.29-.33.43-.49.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.13-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.44 0 1.43 1.03 2.81 1.18 3 .14.19 2.03 3.1 4.92 4.34.69.29 1.22.47 1.63.6.68.21 1.3.18 1.79.11.55-.08 1.69-.69 1.93-1.35.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.55-.33z"></path>
          <path d="M16.01 3C8.83 3 3 8.82 3 16c0 2.54.75 5.01 2.16 7.13L3 29l6.06-2.08A12.92 12.92 0 0016.01 29C23.18 29 29 23.18 29 16S23.18 3 16.01 3zm0 23.67c-2.14 0-4.23-.58-6.05-1.69l-.43-.25-3.6 1.23 1.17-3.51-.28-.45A10.6 10.6 0 015.33 16c0-5.88 4.79-10.67 10.68-10.67 2.84 0 5.5 1.1 7.51 3.11a10.56 10.56 0 013.11 7.51c0 5.89-4.79 10.72-10.62 10.72z"></path>
        </svg>
        <span className="absolute inset-0 rounded-full border-4 border-[#25D366] animate-ping opacity-30"></span>
      </a>
    </section>
  );
}