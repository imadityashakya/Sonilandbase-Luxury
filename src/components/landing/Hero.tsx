import { useEffect, useState, memo } from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  AnimatePresence,
} from "framer-motion";
import { useNavigate } from "@tanstack/react-router";

import { ChevronDown, X, Loader2 } from "lucide-react";

import hero from "@/assets/banner1.png";
import hero2 from "@/assets/banner2.png";

const slides = Object.freeze([hero, hero2]);

function HeroComponent() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    consent: false,
  });

  /* =========================
      AUTO SLIDER
  ========================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* =========================
      FORM CHANGE
  ========================= */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    const checked = (e.target as HTMLInputElement).checked;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  /* =========================
      FORM SUBMIT
  ========================= */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.consent) {
      alert("Please accept the consent checkbox.");
      return;
    }

    if (!/^\d{10}$/.test(form.phone)) {
      alert("Please enter valid 10 digit phone number.");
      return;
    }

    setLoading(true);

    try {
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
            email: form.email,
            message: form.message,
            consent: form.consent ? "Yes" : "No",

            _subject: "New Lead - Downtown 66 Website",
            _captcha: "false",
            _template: "table",
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        navigate({ to: "/thankyou" });

        setForm({
          name: "",
          phone: "",
          email: "",
          message: "",
          consent: false,
        });
      } else {
        console.error(data);
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to submit form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-black"
      >
        {/* BACKGROUND IMAGE */}
        <img
          src={slides[index]}
          alt="hero"
          loading="eager"
          decoding="async"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />

        {/* OVERLAY */}
        <div className="pointer-events-none absolute inset-0 bg-black/60" />

        <LazyMotion features={domAnimation}>
          {/* CONTENT */}
          <m.div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-5 pb-36 pt-24 text-center">
            {/* TOP TAG */}
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-[#B8914A] sm:text-xs">
              BPTP REALTY · SECTOR 66, GURUGRAM
            </p>

            {/* TITLE */}
            <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl md:text-7xl">
              The Pulse of Gurugram
              <br />
              Has an Address.
            </h1>

            {/* SUBTITLE */}
            <p className="mt-5 max-w-2xl text-sm font-medium leading-relaxed text-white/85 sm:text-base md:text-lg">
              <span className="font-bold text-[#B8914A]">
                Downtown 66
              </span>{" "}
              — Golf Course Extension Road
              <br />
              3 Iconic Towers · 3 BHK Residences · EOI Now Open
            </p>

            {/* BUTTON */}
            <div className="mt-8">
              <a
                href="#leadform"
                className="relative z-50 inline-flex items-center justify-center rounded-sm bg-[#B8914A] px-7 py-3 text-[11px] font-semibold tracking-wider text-white transition hover:bg-[#D4AA6A]"
              >
                REGISTER YOUR INTEREST
              </a>
            </div>

            {/* HRERA */}
            <p className="mt-5 text-[10px] tracking-wide text-white/60 sm:text-[11px]">
              HRERA Reg. No. RC/REP/HARERA/GGM/981/713/2025/84
            </p>

            {/* DOWN ICON */}
            <div className="absolute bottom-8 animate-bounce text-[#B8914A]">
              <ChevronDown size={26} />
            </div>
          </m.div>
        </LazyMotion>

        {/* PRICE BADGE */}
        <div
          className="
            absolute
            bottom-6
            left-1/2
            z-30
            w-[88%]
            max-w-[260px]
            -translate-x-1/2
            rounded-xl
            border
            border-white/20
            bg-black/50
            px-4
            py-3
            text-center
            backdrop-blur-sm
            md:bottom-8
            md:left-6
            md:w-auto
            md:translate-x-0
            md:text-left
          "
        >
          <p className="text-[10px] tracking-[0.3em] text-[#B8914A]">
            PRICE
          </p>

          <p className="mt-1 text-sm font-bold text-white sm:text-base">
            ₹20,990 / sq. ft
          </p>

          <p className="mt-1 text-[10px] text-green-400 sm:text-xs">
            ₹1,000 Discount Applicable
          </p>
        </div>

        {/* DESKTOP FORM */}
        <div
          id="leadform"
          className="
            absolute
            bottom-8
            right-6
            z-50
            hidden
            w-[320px]
            overflow-hidden
            rounded-2xl
            border
            border-white/15
            bg-black/70
            shadow-xl
            backdrop-blur-sm
            pointer-events-auto
            md:block
          "
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 p-5 text-white"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              autoComplete="off"
              spellCheck={false}
              className="relative z-50 rounded-md border border-white/15 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-[#B8914A]"
            />

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              autoComplete="off"
              spellCheck={false}
              className="relative z-50 rounded-md border border-white/15 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-[#B8914A]"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              autoComplete="off"
              spellCheck={false}
              className="relative z-50 rounded-md border border-white/15 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-[#B8914A]"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows={3}
              className="relative z-50 resize-none rounded-md border border-white/15 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-[#B8914A]"
            />

            <label className="flex items-start gap-2 text-[10px] leading-relaxed text-white/70">
              <input
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={handleChange}
                className="mt-1 accent-[#B8914A]"
              />

              <span>
                I authorize company representatives to contact me via call,
                SMS, WhatsApp & email.
              </span>
            </label>

            <button
              type="submit"
              disabled={loading}
              className="relative z-50 mt-2 flex items-center justify-center gap-2 rounded-md bg-[#B8914A] py-3 text-xs font-semibold tracking-wider text-white transition hover:bg-[#D4AA6A] disabled:opacity-60"
            >
              {loading && <Loader2 size={16} className="animate-spin" />}

              {loading ? "SENDING..." : "ENQUIRE NOW"}
            </button>
          </form>
        </div>
      </section>

      {/* MOBILE FORM */}
      <section className="bg-black px-4 py-8 md:hidden">
        <div className="mx-auto max-w-md overflow-hidden rounded-2xl border border-white/10 bg-black/90 shadow-xl">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 p-4 text-white"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              autoComplete="off"
              className="relative z-50 rounded-md border border-white/15 bg-white/10 px-4 py-3 text-sm outline-none"
            />

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              autoComplete="off"
              className="relative z-50 rounded-md border border-white/15 bg-white/10 px-4 py-3 text-sm outline-none"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              autoComplete="off"
              className="relative z-50 rounded-md border border-white/15 bg-white/10 px-4 py-3 text-sm outline-none"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              className="relative z-50 resize-none rounded-md border border-white/15 bg-white/10 px-4 py-3 text-sm outline-none"
            />

            <label className="flex items-start gap-2 text-[10px] leading-relaxed text-white/70">
              <input
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={handleChange}
                className="mt-1 accent-[#B8914A]"
              />

              <span>
                I authorize company representatives to contact me via call,
                SMS, WhatsApp & email.
              </span>
            </label>

            <button
              type="submit"
              disabled={loading}
              className="relative z-50 mt-2 flex items-center justify-center gap-2 rounded-md bg-[#B8914A] py-3 text-xs font-semibold tracking-wider text-white transition hover:bg-[#D4AA6A] disabled:opacity-60"
            >
              {loading && <Loader2 size={16} className="animate-spin" />}

              {loading ? "SENDING..." : "ENQUIRE NOW"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export const Hero = memo(HeroComponent);