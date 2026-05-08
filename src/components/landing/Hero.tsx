import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X } from "lucide-react";

import hero from "@/assets/banner1.jpeg";
import hero2 from "@/assets/banner2.jpeg";
import mainLogo from "@/assets/bptpLogo.png";

import { fadeUp, stagger } from "./motion";

const slides = [hero, hero2];

export function Hero() {
  const [index, setIndex] = useState(0);

  const [showPopup, setShowPopup] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    consent: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;

    setForm({
      ...form,
      [target.name]:
        target.type === "checkbox" ? target.checked : target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.consent) {
      alert("Please accept the consent checkbox");
      return;
    }

    // SHOW SUCCESS POPUP
    setShowPopup(true);

    // AUTO CLOSE POPUP
    setTimeout(() => {
      setShowPopup(false);
    }, 3500);

    // RESET FORM
    setForm({
      name: "",
      phone: "",
      email: "",
      message: "",
      consent: false,
    });
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
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="
                relative
                w-full
                max-w-md
                bg-[#0B0B0B]
                border
                border-[#B8914A]/40
                rounded-2xl
                px-8
                py-10
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
                className="h-16 md:h-20 w-auto mx-auto object-contain"
              />

              {/* THANK YOU */}
              <h2
                className="
                  mt-6
                  text-3xl
                  md:text-4xl
                  font-bold
                  tracking-wide
                  text-[#B8914A]
                "
              >
                THANK YOU
              </h2>

              {/* MESSAGE */}
              <p className="mt-4 text-white/75 text-sm md:text-base leading-relaxed">
                The Soni Landbase will connect you shortly !
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen w-full overflow-hidden bg-black"
      >
        {/* BACKGROUND */}
        {slides.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            className="absolute inset-0 h-full w-full object-cover"
            animate={{
              opacity: i === index ? 1 : 0,
              scale: i === index ? 1 : 1.08,
            }}
            transition={{ duration: 1.5 }}
          />
        ))}

        <div className="absolute inset-0 bg-black/60" />

        {/* CONTENT */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center px-5"
        >
          <motion.p
            variants={fadeUp}
            className="text-[#B8914A] font-bold text-[11px] tracking-[0.25em] uppercase mb-4"
          >
            BPTP REALTY · SECTOR 66, GURUGRAM
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-serif text-4xl sm:text-5xl md:text-7xl leading-tight text-white"
          >
            The Pulse of Gurugram <br />
            Has an Address.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-white/80 max-w-xl text-sm md:text-lg font-medium"
          >
            <span className="font-bold text-[#B8914A]">
              Downtown 66
            </span>{" "}
            — Golf Course Extension Road
            <br />
            3 Iconic Towers · 3 BHK RESIDENCE · EOI Now Open
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8">
            <a
              href="#leadform"
              className="bg-[#B8914A] text-white font-semibold px-8 py-3 text-xs tracking-wide hover:bg-[#D4AA6A] transition"
            >
              REGISTER YOUR INTEREST
            </a>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-[11px] text-white/60"
          >
            HRERA Reg. No. RC/REP/HARERA/GGM/981/713/2025/84
          </motion.p>

          <motion.div
            className="absolute bottom-10 text-[#B8914A]"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown size={26} />
          </motion.div>
        </motion.div>

        {/* PRICE BADGE */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 bg-black/40 backdrop-blur-md border-[4px] border-white px-4 py-3 text-white">
          <p className="text-[#B8914A] text-[10px] tracking-widest">
            PRICE
          </p>
          <p className="text-sm font-bold">₹20,990 / sq. ft</p>
          <p className="text-green-400 text-[10px]">
            ₹1,000 Discount Applicable
          </p>
        </div>

        {/* DESKTOP FORM */}
        <div className="hidden md:block absolute bottom-10 right-10 w-[260px] shadow-2xl z-20">
          <div className="bg-white text-black text-[11px] font-bold text-center px-4 py-3 tracking-wide uppercase">
            Talk to Our Property Specialist!
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-black/80 border border-white/20 p-4 flex flex-col gap-2 text-white"
          >
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="bg-white/10 px-2 py-2 text-xs border border-white/20 outline-none"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone"
              required
              className="bg-white/10 px-2 py-2 text-xs border border-white/20 outline-none"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="bg-white/10 px-2 py-2 text-xs border border-white/20 outline-none"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows={2}
              className="bg-white/10 px-2 py-2 text-xs border border-white/20 outline-none resize-none"
            />

            <label className="flex items-start gap-2 text-[10px] text-white/70">
              <input
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={handleChange}
              />
              <span>
                I authorize company representatives to contact me.
              </span>
            </label>

            <button className="bg-[#B8914A] hover:bg-[#D4AA6A] text-white text-[11px] py-2 mt-2 transition">
              ENQUIRE NOW
            </button>
          </form>
        </div>
      </section>

      {/* MOBILE FORM */}
      <div className="md:hidden px-4 py-6 bg-black">
        <div className="max-w-md mx-auto shadow-2xl">
          <div className="bg-white text-black text-[11px] font-bold text-center px-4 py-3 tracking-wide uppercase">
            Talk to Our Property Specialist!
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-black/90 border border-white/20 p-4 flex flex-col gap-2 text-white"
          >
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="bg-white/10 px-2 py-2 text-xs border border-white/20 outline-none"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone"
              required
              className="bg-white/10 px-2 py-2 text-xs border border-white/20 outline-none"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="bg-white/10 px-2 py-2 text-xs border border-white/20 outline-none"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows={2}
              className="bg-white/10 px-2 py-2 text-xs border border-white/20 outline-none resize-none"
            />

            <label className="flex items-start gap-2 text-[10px] text-white/70">
              <input
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={handleChange}
              />
              <span>
                I authorize company representatives to contact me.
              </span>
            </label>

            <button className="bg-[#B8914A] hover:bg-[#D4AA6A] text-white text-[11px] py-2 mt-2 transition">
              ENQUIRE NOW
            </button>
          </form>
        </div>
      </div>
    </>
  );
}