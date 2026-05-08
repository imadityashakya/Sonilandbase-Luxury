export function StickyBottomBar() {
  return (
    <>
      {/* ================= MOBILE STICKY BAR ================= */}
      <div
        className="
          md:hidden fixed bottom-0 left-0 right-0 z-40
          bg-white/95 backdrop-blur-xl
          border-t-2
          flex items-center justify-between
          px-4 py-3
          shadow-[0_-10px_30px_rgba(0,0,0,0.08)]
          animate-[slideUp_0.6s_ease]
        "
        style={{ borderColor: "var(--gold)" }}
      >
        <div>
          <p className="font-button text-[0.55rem] tracking-[0.22em] text-gold">
            EOI OPEN
          </p>
          <p className="font-display text-base text-ink leading-tight">
            ₹19,990/sq.ft
          </p>
        </div>

        <a
          href="#leadform"
          className="
            relative overflow-hidden
            font-button
            text-[0.65rem]
            tracking-[0.2em]
            px-5 py-3
            bg-gold text-white
            rounded-md
            transition-all duration-500
            hover:scale-105
            hover:shadow-[0_10px_30px_rgba(0,0,0,0.18)]
          "
        >
          <span className="relative z-10">ENQUIRE NOW</span>
          <span
            className="
              absolute inset-0
              -translate-x-full
              bg-gradient-to-r
              from-transparent
              via-white/30
              to-transparent
              animate-[shine_3s_infinite]
            "
          />
        </a>
      </div>

      {/* ================= WHATSAPP FLOAT ================= */}
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
          <path d="M19.11 17.2c-.29-.14-1.69-.83-1.95-.93-.26-.1-.45-.14-.64.14-.19.29-.73.93-.89 1.12-.16.19-.33.22-.62.07-.29-.14-1.2-.44-2.29-1.42-.85-.76-1.42-1.69-1.58-1.98-.17-.29-.02-.44.12-.58.13-.13.29-.33.43-.49.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.13-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.44 0 1.43 1.03 2.81 1.18 3 .14.19 2.03 3.1 4.92 4.34.69.29 1.22.47 1.63.6.68.21 1.3.18 1.79.11.55-.08 1.69-.69 1.93-1.35.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.55-.33z" />
          <path d="M16.01 3C8.83 3 3 8.82 3 16c0 2.54.75 5.01 2.16 7.13L3 29l6.06-2.08A12.92 12.92 0 0016.01 29C23.18 29 29 23.18 29 16S23.18 3 16.01 3zm0 23.67c-2.14 0-4.23-.58-6.05-1.69l-.43-.25-3.6 1.23 1.17-3.51-.28-.45A10.6 10.6 0 015.33 16c0-5.88 4.79-10.67 10.68-10.67 2.84 0 5.5 1.1 7.51 3.11a10.56 10.56 0 013.11 7.51c0 5.89-4.79 10.72-10.62 10.72z" />
        </svg>
        <span className="absolute inset-0 rounded-full border-4 border-[#25D366] animate-ping opacity-30" />
      </a>

      <style>{`
        @keyframes whatsappPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }

        @keyframes shine {
          100% { transform: translateX(200%); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(100%); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
