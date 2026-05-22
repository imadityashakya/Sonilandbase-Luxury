import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import mainLogo from "@/assets/bptpLogo.png";

export const Route = createFileRoute("/thankyou")({
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center px-4 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full text-center space-y-8"
      >
        <div className="flex justify-center">
          <img
            src={mainLogo}
            alt="Logo"
            className="h-20 w-auto object-contain"
          />
        </div>

        <div className="flex justify-center">
          <div className="p-4 rounded-full bg-[#B8914A]/20 text-[#B8914A]">
            <CheckCircle2 size={64} />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#B8914A]">
            THANK YOU
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            Your request has been successfully submitted. <br />
            The Soni Landbase team will contact you shortly.
          </p>
        </div>

        <div className="pt-8">
          <a
            href="/"
            className="inline-block rounded-md bg-[#B8914A] px-8 py-3 text-xs font-bold tracking-widest text-white transition hover:bg-[#D4AA6A]"
          >
            BACK TO HOME
          </a>
        </div>
      </motion.div>
    </div>
  );
}
