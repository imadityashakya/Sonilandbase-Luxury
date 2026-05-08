import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/bptpLogo.png";

const links = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#positioning" },

  { label: "AMENITIES", href: "#amenities" },
  { label: "GALLERY", href: "#gallery" },
  { label: "LOCATION", href: "#location" },
  { label: "CONTACT", href: "#lead" },
];


export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#ebd3b9]/95 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">

        {/* LOGO */}
        <a href="#home" className="flex items-center">
          <img
            src={logo}
            alt="The Soni Landbase"
            className="h-9 md:h-11 w-auto object-contain"
          />
        </a>

        {/* DESKTOP NAV */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href} className="relative group">
              <a
                href={link.href}
                className={`text-[0.72rem] tracking-[0.2em] transition-colors duration-300 ${
                  scrolled ? "text-[#1A1A1A]" : "text-white"
                }`}
              >
                {link.label}
              </a>

              {/* GOLD UNDERLINE HOVER */}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#B8914A] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* CTA */}
          <a
            href="#leadform"
            className="
              hidden md:inline-flex
              text-[0.65rem] tracking-[0.2em]
              px-5 md:px-6 py-2.5
              bg-[#B8914A] text-white
              transition-all duration-500
              hover:bg-[#D4AA6A]
              hover:shadow-[0_10px_25px_rgba(184,145,74,0.35)]
              hover:-translate-y-0.5
            "
          >
            REGISTER HERE
          </a>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 ${
              scrolled ? "text-[#1A1A1A]" : "text-white"
            }`}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden bg-[#FAF8F4] px-6 py-10"
          >
            <ul className="flex flex-col gap-6 items-center mt-10">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-[#1A1A1A] text-sm tracking-[0.2em] hover:text-[#B8914A] transition"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* MOBILE CTA */}
            <div className="mt-10 flex justify-center">
              <a
                href="#leadform"
                onClick={() => setOpen(false)}
                className="
                  text-[0.7rem]
                  px-6 py-3
                  bg-[#B8914A] text-white
                  hover:bg-[#D4AA6A]
                  transition-all
                "
              >
                REGISTER YOUR INTEREST
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}