import {
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/bptpLogo.png";

export function FooterDark() {
  return (
    <footer className="bg-black text-white/70 pt-16 md:pt-20 pb-8 border-t border-white/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* LOGO SECTION */}
        <div className="sm:col-span-2">

          {/* LOGO */}
          <img
            src={logo}
            alt="The Soni Landbase"
            className="h-12 md:h-16 w-auto object-contain"
          />

          {/* DESCRIPTION */}
          <p className="mt-5 text-sm leading-relaxed max-w-md text-white/80">
            <span className="font-bold text-white">
              The Soni Landbase
            </span>{" "}
            is a timeless address crafted for those who value{" "}
            <span className="font-extrabold text-white">legacy</span>,{" "}
            <span className="font-extrabold text-[#8a6a1a]">
              luxury
            </span>
            , and architectural excellence.
          </p>

          {/* SOCIAL ICONS */}
          <div className="mt-7 flex gap-4 flex-wrap">

            {/* INSTAGRAM */}
            <a
              href="#"
              aria-label="Instagram"
              className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-all duration-300 hover:border-[#8a6a1a] hover:bg-[#8a6a1a]/10"
            >
              <Instagram
                size={18}
                className="text-white/70 group-hover:text-[#8a6a1a] transition-colors"
              />
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-xl bg-[#8a6a1a]/30 transition" />
            </a>

            {/* FACEBOOK */}
            <a
              href="#"
              aria-label="Facebook"
              className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-all duration-300 hover:border-[#8a6a1a] hover:bg-[#8a6a1a]/10"
            >
              <Facebook
                size={18}
                className="text-white/70 group-hover:text-[#8a6a1a] transition-colors"
              />
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-xl bg-[#8a6a1a]/30 transition" />
            </a>

            {/* LINKEDIN */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-all duration-300 hover:border-[#8a6a1a] hover:bg-[#8a6a1a]/10"
            >
              <Linkedin
                size={18}
                className="text-white/70 group-hover:text-[#8a6a1a] transition-colors"
              />
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-xl bg-[#8a6a1a]/30 transition" />
            </a>

            {/* WHATSAPP */}
            <a
              href="#"
              aria-label="WhatsApp"
              className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-all duration-300 hover:border-[#8a6a1a] hover:bg-[#8a6a1a]/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="h-5 w-5 text-white/80 group-hover:text-[#8a6a1a] transition-colors"
              >
                <path d="M19.11 17.53c-.28-.14-1.65-.82-1.9-.9-.26-.1-.45-.14-.64.14-.19.28-.73.9-.9 1.09-.17.19-.33.21-.61.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.5.14-.17.19-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.64-1.54-.88-2.12-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.35-.26.28-1 1-1 2.43 0 1.43 1.03 2.81 1.18 3 .14.19 2.03 3.1 4.93 4.35.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.65-.67 1.88-1.31.23-.64.23-1.19.16-1.31-.07-.12-.26-.19-.54-.33z" />
                <path d="M16 3C9.38 3 4 8.25 4 14.7c0 2.3.7 4.44 1.9 6.22L4.8 29l8.3-1.2c1.7.8 3.6 1.2 5.5 1.2 6.62 0 12-5.25 12-11.7S22.62 3 16 3zm0 21.6c-1.7 0-3.35-.44-4.8-1.27l-.34-.2-4.93.71.74-4.8-.22-.35A9.6 9.6 0 0 1 6.4 14.7C6.4 9.6 10.82 5.4 16 5.4S25.6 9.6 25.6 14.7 21.18 24.6 16 24.6z" />
              </svg>

              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-xl bg-[#8a6a1a]/30 transition" />
            </a>
          </div>
        </div>

        {/* EXPLORE */}
        <div>
          <h4 className="font-extrabold text-[0.75rem] tracking-[0.25em] text-[#8a6a1a] mb-5">
            EXPLORE
          </h4>

          <ul className="space-y-3 text-sm">
            {[
              { label: "About", href: "#positioning" },
              { label: "Amenities", href: "#amenities" },
              { label: "Gallery", href: "#gallery" },
              { label: "Contact", href: "#leadform" },
              { label: "Privacy Policy", href: "/privacy" },
            ].map((link) => (
              <li key={link.href}>
                {link.href.startsWith("#") ? (
                  <a
                    href={link.href}
                    className="font-semibold text-white/70 hover:text-[#8a6a1a] transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    className="font-semibold text-white/70 hover:text-[#8a6a1a] transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-extrabold text-[0.75rem] tracking-[0.25em] text-[#8a6a1a] mb-5">
            CONTACT
          </h4>

          <ul className="space-y-4 text-sm">

            <li className="font-bold text-white hover:text-[#8a6a1a] transition">
              +91 95885 86160
            </li>

            <li className="font-bold text-white hover:text-[#8a6a1a] transition">
              +91 98738 84671
            </li>

            <li className="font-semibold text-white/70 hover:text-white transition break-all">
              <a href="mailto:contact@thesonilandbase.com">
                contact@thesonilandbase.com
              </a>
            </li>

            <li className="font-semibold text-white/70 hover:text-white transition">
              <a
                href="https://thesonilandbase.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Soni Landbase
              </a>
            </li>

            <li className="font-medium text-white/60 leading-relaxed">
              The Soni Landbase, DLF Phase 5, Sector 43,
              Gurugram, Haryana 122009
            </li>
          </ul>
        </div>
      </div>

      {/* RERA SECTION */}
      <div className="mt-12 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-5">
          <p className="text-center text-[11px] sm:text-xs md:text-sm leading-relaxed text-white/50">
            Managed by{" "}
            <span className="font-bold text-white">
              The Soni Landbase
            </span>{" "}
            | RERA No:{" "}
            <span className="font-semibold text-[#8a6a1a] break-all">
              RC/HARERA/GGM/4069/3664/2026/104
            </span>
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">

          <span className="font-semibold text-white/50 text-xs sm:text-sm leading-relaxed">
            © {new Date().getFullYear()}{" "}
            <span className="font-bold text-white">
              The Soni Landbase
            </span>
            . All rights reserved.
          </span>

          <span className="font-bold tracking-[0.2em] text-[#8a6a1a] text-[10px] sm:text-xs">
            CRAFTED WITH PRECISION
          </span>
        </div>
      </div>
    </footer>
  );
}