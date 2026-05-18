import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#d4d0c8] font-sans font-light leading-[1.8]">
      {/* Header */}
      <header className="bg-[#161616] border-b border-[#c9a84c]/20 px-6 py-6 md:px-12 flex items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <div className="font-serif text-xl md:text-2xl font-semibold text-[#c9a84c] tracking-[2px] uppercase">
            BPTP Downtown 66
          </div>
          <div className="text-[10px] tracking-[3px] text-[#8a8680] uppercase">
            Sector 66 · Golf Course Extension Road · Gurugram
          </div>
        </div>
        <Link
          to="/"
          className="text-[12px] tracking-[2px] uppercase text-[#c9a84c] border border-[#c9a84c]/20 px-5 py-2 transition-all duration-300 hover:bg-[#c9a84c] hover:text-[#0d0d0d]"
        >
          ← Back to Site
        </Link>
      </header>

      {/* Hero Strip */}
      <div className="relative bg-[#1e1e1e] border-b border-[#c9a84c]/20 px-6 py-12 md:px-12 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />
        <div className="absolute -right-5 top-1/2 -translate-y-1/2 font-serif text-[70px] md:text-[120px] font-semibold text-[#c9a84c]/5 tracking-[10px] pointer-events-none whitespace-nowrap uppercase">
          Privacy
        </div>

        <div className="relative z-10">
          <div className="text-[10px] tracking-[4px] uppercase text-[#c9a84c] mb-4">
            Legal · Compliance
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold text-white leading-[1.1] mb-5">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#8a8680] tracking-[1px]">
            Last Updated: <span className="text-[#c9a84c]">May 18, 2026</span> &nbsp;|&nbsp; Effective Date: <span className="text-[#c9a84c]">May 18, 2026</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[860px] mx-auto px-6 py-16 md:px-12 md:py-24">

        <div className="bg-[#1e1e1e] border border-[#c9a84c]/20 border-l-[3px] border-l-[#c9a84c] p-7 mb-14 text-sm text-[#d4d0c8]">
          This Privacy Policy governs the manner in which <strong className="text-white">The Soni Landbase</strong> ("we", "our", or "us"), the authorised channel partner for BPTP Downtown 66, collects, uses, maintains, and discloses information collected from users ("you") of the website <strong className="text-white">newlaunchesgurgaon.in</strong> ("Site"). By using this Site and submitting your information, you agree to the terms of this Privacy Policy.
        </div>

        <div className="space-y-14">
          {/* Section 1 */}
          <section className="pb-14 border-b border-[#c9a84c]/10">
            <div className="text-[10px] tracking-[3px] text-[#c9a84c] uppercase mb-2">01</div>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-5 tracking-px">Information We Collect</h2>
            <p className="text-sm mb-4">We collect personal information that you voluntarily provide to us when you submit an enquiry form on our Site. The information collected may include:</p>
            <ul className="space-y-2 mb-4">
              {[
                "Full name",
                "Mobile / phone number",
                "Email address",
                "Any message or query you submit through the enquiry form"
              ].map((item, i) => (
                <li key={i} className="text-sm relative pl-5 py-2 border-b border-white/5">
                  <span className="absolute left-0 text-[#c9a84c]">—</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm">We may also automatically collect certain non-personally identifiable information when you visit our Site, including your IP address, browser type, operating system, referring URLs, and pages visited. This data is used solely for analytics and improving user experience.</p>
          </section>

          {/* Section 2 */}
          <section className="pb-14 border-b border-[#c9a84c]/10">
            <div className="text-[10px] tracking-[3px] text-[#c9a84c] uppercase mb-2">02</div>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-5 tracking-px">How We Use Your Information</h2>
            <p className="text-sm mb-4">The information you provide is used exclusively for the following purposes:</p>
            <ul className="space-y-2 mb-4">
              {[
                "To contact you via phone call, SMS, email, or WhatsApp regarding your enquiry about BPTP Downtown 66",
                "To provide you with project details, pricing information, and sales updates",
                "To schedule site visits or consultations as per your request",
                "To respond to your queries and provide customer support",
                "To comply with applicable legal and regulatory requirements"
              ].map((item, i) => (
                <li key={i} className="text-sm relative pl-5 py-2 border-b border-white/5">
                  <span className="absolute left-0 text-[#c9a84c]">—</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm">We will only contact you if you have expressly authorised us to do so by checking the consent box on our enquiry form.</p>
          </section>

          {/* Section 3 */}
          <section className="pb-14 border-b border-[#c9a84c]/10">
            <div className="text-[10px] tracking-[3px] text-[#c9a84c] uppercase mb-2">03</div>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-5 tracking-px">Sharing of Information</h2>
            <p className="text-sm mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information in the following limited circumstances:</p>
            <ul className="space-y-2 mb-4">
              {[
                { label: "With BPTP Realty", text: "— the developer of Downtown 66 — for the purpose of processing your enquiry and providing project-related communications" },
                { label: "With our authorised sales team", text: " who may contact you on our behalf" },
                { label: "As required by law", text: " — if disclosure is required by any applicable statute, regulation, or court order" }
              ].map((item, i) => (
                <li key={i} className="text-sm relative pl-5 py-2 border-b border-white/5">
                  <span className="absolute left-0 text-[#c9a84c]">—</span>
                  <strong className="text-white">{item.label}</strong>{item.text}
                </li>
              ))}
            </ul>
            <p className="text-sm">All parties with whom we share your data are bound to maintain the confidentiality of your information and may not use it for any other purpose.</p>
          </section>

          {/* Section 4 */}
          <section className="pb-14 border-b border-[#c9a84c]/10">
            <div className="text-[10px] tracking-[3px] text-[#c9a84c] uppercase mb-2">04</div>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-5 tracking-px">Cookies & Tracking Technologies</h2>
            <p className="text-sm mb-4">Our Site uses cookies and similar tracking technologies, including the Facebook Pixel, to understand user behaviour, measure the effectiveness of our advertising campaigns, and improve our services.</p>
            <p className="text-sm mb-4">Cookies are small data files stored on your device. You may choose to disable cookies through your browser settings; however, doing so may affect certain features of the Site.</p>
            <p className="text-sm">By continuing to use our Site, you consent to the use of cookies in accordance with this policy.</p>
          </section>

          {/* Section 5 */}
          <section className="pb-14 border-b border-[#c9a84c]/10">
            <div className="text-[10px] tracking-[3px] text-[#c9a84c] uppercase mb-2">05</div>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-5 tracking-px">Data Security</h2>
            <p className="text-sm mb-4">We adopt appropriate data collection, storage, and processing practices and security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.</p>
            <p className="text-sm">While we implement commercially reasonable safeguards, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security of your data.</p>
          </section>

          {/* Section 6 */}
          <section className="pb-14 border-b border-[#c9a84c]/10">
            <div className="text-[10px] tracking-[3px] text-[#c9a84c] uppercase mb-2">06</div>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-5 tracking-px">Your Rights</h2>
            <p className="text-sm mb-4">You have the right to:</p>
            <ul className="space-y-2 mb-4">
              {[
                "Request access to the personal information we hold about you",
                "Request correction of any inaccurate or incomplete information",
                "Withdraw your consent for us to contact you at any time",
                "Request deletion of your personal data, subject to any legal obligations we may have to retain it"
              ].map((item, i) => (
                <li key={i} className="text-sm relative pl-5 py-2 border-b border-white/5">
                  <span className="absolute left-0 text-[#c9a84c]">—</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm">To exercise any of these rights, please contact us using the details provided below.</p>
          </section>

          {/* Section 7 */}
          <section className="pb-14 border-b border-[#c9a84c]/10">
            <div className="text-[10px] tracking-[3px] text-[#c9a84c] uppercase mb-2">07</div>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-5 tracking-px">Third-Party Links</h2>
            <p className="text-sm">Our Site may contain links to third-party websites for your convenience. These sites have their own privacy policies, and we have no responsibility or liability for their content or activities. We encourage you to review the privacy policies of any third-party sites you visit.</p>
          </section>

          {/* Section 8 */}
          <section className="pb-14 border-b border-[#c9a84c]/10">
            <div className="text-[10px] tracking-[3px] text-[#c9a84c] uppercase mb-2">08</div>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-5 tracking-px">Changes to This Policy</h2>
            <p className="text-sm">We reserve the right to update this Privacy Policy at any time. When we do, we will revise the "Last Updated" date at the top of this page. We encourage you to periodically review this page to stay informed about how we are protecting your information.</p>
          </section>

          {/* Section 9 */}
          <section className="pb-14 border-b border-[#c9a84c]/10">
            <div className="text-[10px] tracking-[3px] text-[#c9a84c] uppercase mb-2">09</div>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-5 tracking-px">RERA Disclaimer</h2>
            <p className="text-sm mb-4">This website is operated by an authorised channel partner of BPTP Downtown 66. The project is registered under HRERA with Registration No. <strong className="text-white">RC/REP/HARERA/GGM/981/713/2025/84</strong>.</p>
            <p className="text-sm">All images, floor plans, specifications, and pricing shown on this Site are indicative and subject to change without prior notice. This Site is for information purposes only and does not constitute a legal offer. Please refer to the official RERA project page for definitive project details.</p>
          </section>

          {/* Section 10 — Contact */}
          <section>
            <div className="text-[10px] tracking-[3px] text-[#c9a84c] uppercase mb-2">10</div>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-5 tracking-px">Contact Us</h2>
            <p className="text-sm mb-6">If you have any questions about this Privacy Policy, wish to exercise your data rights, or want to withdraw your consent, please contact us:</p>

            <div className="bg-[#1e1e1e] border border-[#c9a84c]/20 p-8">
              <div className="font-serif text-xl text-[#c9a84c] mb-4 font-semibold">
                The Soni Landbase
              </div>
              <div className="space-y-2">
                <div className="flex gap-3 items-start text-sm">
                  <span className="text-[#8a8680] min-w-[80px] text-[11px] uppercase tracking-widest pt-0.5">Website</span>
                  <span className="text-[#d4d0c8]">
                    <a href="https://thesonilandbase.com" target="_blank" rel="noopener noreferrer" className="text-[#c9a84c] hover:underline">thesonilandbase.com</a>
                  </span>
                </div>
                <div className="flex gap-3 items-start text-sm">
                  <span className="text-[#8a8680] min-w-[80px] text-[11px] uppercase tracking-widest pt-0.5">Project</span>
                  <span className="text-[#d4d0c8]">BPTP Downtown 66, Sector 66, Golf Course Extension Road, Gurugram, Haryana</span>
                </div>
                <div className="flex gap-3 items-start text-sm">
                  <span className="text-[#8a8680] min-w-[80px] text-[11px] uppercase tracking-widest pt-0.5">HRERA No.</span>
                  <span className="text-[#d4d0c8]">RC/REP/HARERA/GGM/981/713/2025/84</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#161616] border-t border-[#c9a84c]/20 px-6 py-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-[12px] text-[#8a8680] tracking-[1px] text-center md:text-left">
          © 2026 The Soni Landbase. All rights reserved. Authorised Channel Partner — BPTP Downtown 66.
        </div>
        <div className="text-[11px] text-[#8a8680] tracking-[1px] text-center md:text-right">
          HRERA Reg. No. <span className="text-[#c9a84c]">RC/REP/HARERA/GGM/981/713/2025/84</span>
        </div>
      </footer>
    </div>
  );
}
