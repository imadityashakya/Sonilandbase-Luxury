import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";
import { z } from "zod";

import { fadeUp, stagger } from "./motion";
import { SectionHeading } from "./SectionHeading";

import mainLogo from "@/assets/bptpLogo.png";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().regex(/^\d{10}$/, "Phone must be 10 digits"),
  city: z.string().trim().min(2).max(60),
  type: z.enum(["End User", "Investor", "NRI Buyer"]),
});

type Form = z.infer<typeof schema>;

export function LeadForm() {
  const [form, setForm] = useState<Form>({
    name: "",
    phone: "",
    city: "",
    type: "End User",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  /* POPUP */
  const [showPopup, setShowPopup] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const r = schema.safeParse(form);

    if (!r.success) {
      const errs: Record<string, string> = {};

      r.error.issues.forEach((i) => {
        if (i.path[0]) errs[String(i.path[0])] = i.message;
      });

      setErrors(errs);
      return;
    }

    setErrors({});

    try {
      setSent(true);

      /* SHOW POPUP */
      setShowPopup(true);

      /* RESET FORM */
      setForm({
        name: "",
        phone: "",
        city: "",
        type: "End User",
      });

      /* AUTO CLOSE */
      setTimeout(() => {
        setShowPopup(false);
        setSent(false);
      }, 3500);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* SUCCESS POPUP */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 z-[9999]
              flex items-center justify-center
              bg-black/70 backdrop-blur-sm
              px-4
            "
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="
                relative
                w-full max-w-md
                rounded-2xl
                border border-[#8a6a1a]/40
                bg-[#0B0B0B]
                px-8 py-10
                text-center
                shadow-[0_20px_80px_rgba(0,0,0,0.6)]
              "
            >
              {/* CLOSE */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition"
              >
                <X size={20} />
              </button>

              {/* LOGO */}
              <img
                src={mainLogo}
                alt="Logo"
                className="mx-auto h-16 md:h-20 w-auto object-contain"
              />

              {/* TITLE */}
              <h2
                className="
                  mt-6
                  text-3xl md:text-4xl
                  font-bold
                  tracking-wide
                  text-[#B8914A]
                "
              >
                THANK YOU
              </h2>

              {/* MESSAGE */}
              <p className="mt-4 text-sm md:text-base leading-relaxed text-white/75">
                The Soni Landbase will connect you shortly !
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FORM SECTION */}
      <section id="leadform" className="bg-[#ffffff] py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <SectionHeading
            eyebrow="EOI OPEN"
            title="Own the Landmark."
            italic="Own the Pulse of Gurugram."
            description="EOI window is open. Prices are at launch. This is the moment."
          />

          <motion.form
            onSubmit={onSubmit}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="
              mt-12
              rounded-xl
              border-2
              bg-white
              p-7
              shadow-lg
              md:p-10
            "
            style={{ borderColor: "#8a6a1a" }}
          >
            <motion.div variants={fadeUp} className="space-y-6">

              {/* NAME */}
              <Field label="Full Name *" error={errors.name}>
                <input
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="
                    w-full border-b bg-transparent
                    py-3 text-ink font-medium
                    transition
                    focus:outline-none
                    focus:border-[#8a6a1a]
                  "
                  style={{ borderColor: "var(--border)" }}
                  placeholder="Your name"
                  maxLength={80}
                />
              </Field>

              {/* PHONE */}
              <Field label="Mobile Number *" error={errors.phone}>
                <div
                  className="flex items-center gap-3 border-b py-3"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span className="font-medium text-muted-foreground">
                    +91
                  </span>

                  <input
                    value={form.phone}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        phone: e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 10),
                      })
                    }
                    className="
                      flex-1 bg-transparent
                      text-ink font-medium
                      focus:outline-none
                    "
                    placeholder="9876543210"
                  />
                </div>
              </Field>

              {/* CITY */}
              <Field label="City of Residence *" error={errors.city}>
                <input
                  value={form.city}
                  onChange={(e) =>
                    setForm({ ...form, city: e.target.value })
                  }
                  className="
                    w-full border-b bg-transparent
                    py-3 text-ink font-medium
                    transition
                    focus:outline-none
                    focus:border-[#8a6a1a]
                  "
                  style={{ borderColor: "var(--border)" }}
                  placeholder="Gurugram"
                  maxLength={60}
                />
              </Field>

              {/* TYPE */}
              <div>
                <label
                  className="
                    mb-3 block
                    text-[0.65rem]
                    font-bold
                    tracking-[0.25em]
                    text-[#8a6a1a]
                  "
                >
                  I AM A:
                </label>

                <div className="flex flex-wrap gap-2.5">
                  {(["End User", "Investor", "NRI Buyer"] as const).map(
                    (t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setForm({ ...form, type: t })}
                        className={`
                          rounded-md border px-4 py-2.5
                          text-[0.65rem]
                          font-bold
                          tracking-[0.2em]
                          transition-all duration-300
                          ${
                            form.type === t
                              ? "border-ink bg-ink text-white"
                              : "bg-white text-ink hover:border-[#8a6a1a] hover:text-[#8a6a1a]"
                          }
                        `}
                        style={
                          form.type !== t
                            ? { borderColor: "var(--border)" }
                            : {}
                        }
                      >
                        {t.toUpperCase()}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="
                  mt-4 w-full rounded-md
                  bg-[#8a6a1a]
                  py-4
                  text-[0.75rem]
                  font-bold
                  tracking-[0.25em]
                  text-white
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#6f5413]
                "
              >
                {sent ? (
                  <span className="inline-flex items-center gap-2">
                    <Check size={16} />
                    REQUEST RECEIVED
                  </span>
                ) : (
                  "REQUEST A CALLBACK"
                )}
              </button>

              <p className="text-center text-xs text-muted-foreground">
                By submitting, you consent to being contacted regarding this
                project.
              </p>
            </motion.div>
          </motion.form>

          <p className="mt-6 text-center text-[11px] leading-relaxed text-muted-foreground">
            This page is managed by The Soni Landbase, an authorised
            channel partner. HRERA Reg. No.
            RC/REP/HARERA/GGM/981/713/2025/84. All renders are artistic
            impressions only.
          </p>
        </div>
      </section>
    </>
  );
}

/* ================= FIELD COMPONENT ================= */

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        className="
          mb-2 block
          text-[0.65rem]
          font-bold
          tracking-[0.25em]
          text-[#8a6a1a]
        "
      >
        {label.toUpperCase()}
      </label>

      {children}

      {error && (
        <p className="mt-1.5 text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}