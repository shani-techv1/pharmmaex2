import React, { useCallback, useState } from "react";
import dynamic from "next/dynamic";
import UpcomingEvents from "./UpcomingEvents";
import WhyExhibit from "./WhyExhibit";
import VisitorBenefits from "./VisitorBenefits";
import Testimonials from "./Testimonials";
import StatsCounter from "./StatsCounter";
import FAQ from "./FAQ";
import FinalCTA from "./FinalCTA";
import PastEventHighlights from "./PastEventHighlights";
import StickyCTA from "./StickyCTA";
import WhatsAppFloat from "./WhatsAppFloat";
import OurExhibitors from "@/src/components/bannerHome/OurExhibitors";

const LeadFormModal = dynamic(() => import("./LeadFormModal"), { ssr: false });

/**
 * Phase 1 home sections orchestrator.
 * Slots: `exhibitorCategories` (#4) and `sponsors` (#9) are passed in
 * so existing components can be reused while preserving the mandatory order.
 */
const HomeSections = ({ exhibitorCategories, sponsors }) => {
  const [modal, setModal] = useState(null);

  const openStall = useCallback(
    (city) => setModal({ type: "stall", prefill: typeof city === "string" ? { city } : null }),
    []
  );
  const openBrochure = useCallback(() => setModal({ type: "brochure" }), []);
  const openCallback = useCallback(() => setModal({ type: "callback" }), []);
  const closeModal = useCallback(() => setModal(null), []);

  const handleWhyCta = useCallback(
    (kind) => (kind === "stall" ? openStall() : openBrochure()),
    [openStall, openBrochure]
  );

  return (
    <>
      {/* 2. Upcoming Events */}
      <UpcomingEvents onBookStall={openStall} />

      {/* 3. Why Exhibit With Us */}
      <WhyExhibit onCTA={handleWhyCta} />

      {/* 4. Exhibitor Categories */}
      {exhibitorCategories}

      {/* 5. Past Event Highlights */}
      <PastEventHighlights />

      {/* 6. Testimonials */}
      <Testimonials />

      {/* 7. Visitor Benefits */}
      <VisitorBenefits onRegister={openCallback} />

      {/* 8. Statistics */}
      <StatsCounter />

      {/* 9. Sponsors & Partners */}
      {sponsors}

      {/* 9b. Our Exhibitors logo strip */}
      <OurExhibitors />

      {/* 10. FAQ */}
      <FAQ />

      {/* 11. Final CTA */}
      <FinalCTA onBookStall={openStall} onBrochure={openBrochure} />

      {/* Sticky CTA bar + WhatsApp float */}
      <StickyCTA onBookStall={openStall} onCallback={openCallback} />
      <WhatsAppFloat />

      {modal && <LeadFormModal type={modal.type} prefill={modal.prefill} onClose={closeModal} />}
    </>
  );
};

export default HomeSections;
