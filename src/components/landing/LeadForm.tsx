import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Loader2 } from "lucide-react";
import { z } from "zod";
import { useNavigate } from "@tanstack/react-router";

import { fadeUp, stagger } from "./motion";
import { SectionHeading } from "./SectionHeading";

import mainLogo from "@/assets/bptpLogo.png";

/* ================= VALIDATION ================= */

const schema = z.object({ 
  name: z.string().trim().min(2, "Enter valid name").max(80),
  phone: z.string().trim().regex(/^\d{10}$/, "Phone must be 10 digits"),
  city: z.string().trim().min(2, "Enter valid city").max(60),
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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  /* ================= HANDLE INPUT ================= */

  const updateField = (key: keyof Form, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));

    /* REMOVE ERROR ON TYPE */

    setErrors((prev) => ({
      ...prev,
      [key]: "",
    }));
  };

  /* ================= SUBMIT ================= */

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = schema.safeParse(form);

    if (!result.success) {
      const newErrors: Record<string, string> = {};

      result.error.issues.forEach((issue) => {
        const field = issue.path[0];

        if (field) {
          newErrors[String(field)] = issue.message;
        }
      });

      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      /* ================= EMAIL SEND ================= */

      const response = await fetch(
        "https://formsubmit.co/ajax/contact@thesonilandbase.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            phone: form.phone,
            city: form.city,
            buyerType: form.type,
            _subject: "New Lead From Website",
          }),
        }
      );

      const data = await response.json();

      if (data.success === "true" || response.ok) {
        navigate({ to: "/thankyou" });

        // Meta Ads Lead Conversion
        if (typeof window !== "undefined" && (window as any).fbq) {
          (window as any).fbq("track", "Lead");
        }

        /* RESET */

        setForm({
          name: "",
          phone: "",
          city: "",
          type: "End User",
        });
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ================= FORM SECTION ================= */}

      <section
        id="leadform"
        className="
          relative z-10
          bg-white
          py-24
          md:py-32
        "
      >
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <SectionHeading
            eyebrow="EOI OPEN"
            title="Own the Landmark."
            italic="Own the Pulse of Gurugram."
            description="EOI window is open. Prices are at launch. This is the moment."
          />

          {/* ================= FORM ================= */}

          <motion.form
            onSubmit={onSubmit}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="
              relative z-20
              mt-12
              rounded-xl
              border-2
              border-[#8a6a1a]
              bg-white
              p-7
              shadow-lg
              md:p-10
            "
          >
            <motion.div variants={fadeUp} className="space-y-7">
              {/* NAME */}

              <Field label="Full Name *" error={errors.name}>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    updateField("name", e.target.value)
                  }
                  placeholder="Your Name"
                  maxLength={80}
                  autoComplete="off"
                  className="
                    relative z-30
                    w-full
                    border-b
                    border-[#d4c2a0]
                    bg-transparent
                    py-3
                    font-medium
                    text-black
                    outline-none
                    transition
                    focus:border-[#8a6a1a]
                  "
                />
              </Field>

              {/* PHONE */}

              <Field label="Mobile Number *" error={errors.phone}>
                <div
                  className="
                    relative z-30
                    flex items-center gap-3
                    border-b border-[#d4c2a0]
                    py-3
                  "
                >
                  <span className="font-medium text-gray-500">
                    +91
                  </span>

                  <input
                    type="tel"
                    inputMode="numeric"
                    autoComplete="off"
                    value={form.phone}
                    onChange={(e) =>
                      updateField(
                        "phone",
                        e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 10)
                      )
                    }
                    placeholder="9876543210"
                    className="
                      flex-1
                      bg-transparent
                      font-medium
                      text-black
                      outline-none
                    "
                  />
                </div>
              </Field>

              {/* CITY */}

              <Field
                label="City of Residence *"
                error={errors.city}
              >
                <input
                  type="text"
                  value={form.city}
                  onChange={(e) =>
                    updateField("city", e.target.value)
                  }
                  placeholder="Gurugram"
                  maxLength={60}
                  autoComplete="off"
                  className="
                    relative z-30
                    w-full
                    border-b
                    border-[#d4c2a0]
                    bg-transparent
                    py-3
                    font-medium
                    text-black
                    outline-none
                    transition
                    focus:border-[#8a6a1a]
                  "
                />
              </Field>

              {/* TYPE */}

              <div className="relative z-30">
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
                  {(
                    ["End User", "Investor", "NRI Buyer"] as const
                  ).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() =>
                        updateField("type", t)
                      }
                      className={`
                        rounded-md
                        border
                        px-4 py-2.5
                        text-[0.65rem]
                        font-bold
                        tracking-[0.2em]
                        transition-all duration-300
                        ${
                          form.type === t
                            ? "border-black bg-black text-white"
                            : "border-[#d4c2a0] bg-white text-black hover:border-[#8a6a1a] hover:text-[#8a6a1a]"
                        }
                      `}
                    >
                      {t.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* BUTTON */}

              <button
                type="submit"
                disabled={loading}
                className="
                  mt-4
                  flex w-full items-center justify-center
                  rounded-md
                  bg-[#8a6a1a]
                  py-4
                  text-[0.75rem]
                  font-bold
                  tracking-[0.25em]
                  text-white
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#6f5413]
                  disabled:cursor-not-allowed
                  disabled:opacity-70
                "
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <Loader2
                      size={16}
                      className="animate-spin"
                    />
                    SENDING...
                  </span>
                ) : (
                  "REQUEST A CALLBACK"
                )}
              </button>

              <p className="text-center text-xs text-gray-500">
                By submitting, you consent to being contacted
                regarding this project.
              </p>
            </motion.div>
          </motion.form>

          {/* FOOTER */}

          <p className="mt-6 text-center text-[11px] leading-relaxed text-gray-500">
            This page is managed by The Soni Landbase,
            an authorised channel partner.
            HRERA Reg. No. RC/REP/HARERA/GGM/981/713/2025/84.
            All renders are artistic impressions only.
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
    <div className="relative z-30">
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