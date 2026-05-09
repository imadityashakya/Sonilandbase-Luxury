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
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="h-10 w-10 object-contain"
        />
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
