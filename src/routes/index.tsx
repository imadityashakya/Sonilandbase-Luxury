import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader } from "@/components/landing/Loader";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { Positioning } from "@/components/landing/Positioning";
import { Snapshot } from "@/components/landing/Snapshot";
import { Configurations } from "@/components/landing/Configurations";
// import { Location } from "@/components/landing/Location";

import { LocationAdvantage } from "@/components/landing/LocationAdvantage";
import { AmenitiesLight } from "@/components/landing/AmenitiesLight";
import { WhyNow } from "@/components/landing/WhyNow";
import { PaymentPlan } from "@/components/landing/PaymentPlan";
import { Consultants } from "@/components/landing/Consultants";
import { Gallery } from "@/components/landing/Gallery";
import { LeadForm } from "@/components/landing/LeadForm";
import { FooterDark } from "@/components/landing/FooterDark";
import { StickyBottomBar } from "@/components/landing/StickyBottomBar";
import { CursorDot } from "@/components/landing/CursorDot";
import { RealisticStrip } from "@/components/landing/RealisticStrip";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <CursorDot />
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      {!loading && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Navbar />
          <Hero />
          <TrustBar />
          <Positioning />
          <Snapshot />
          <Configurations />
          {/* <Location /> */}
          <LocationAdvantage />
          <AmenitiesLight />
          <WhyNow />
          <PaymentPlan />
          <Consultants />
          <Gallery />
          <RealisticStrip />
          <LeadForm />
          <FooterDark />
          <StickyBottomBar />
        </motion.main>
      )}
    </>
  );
}
