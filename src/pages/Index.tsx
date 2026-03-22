import CouponPopup from '@/components/CouponPopup';
import UrgencyBanner from '@/components/sections/UrgencyBanner';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import StorySection from '@/components/sections/StorySection';
import WhatsInsideSection from '@/components/sections/WhatsInsideSection';
import DigitalAdvantageSection from '@/components/sections/DigitalAdvantageSection';
import BonusSection from '@/components/sections/BonusSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import OfferSection from '@/components/sections/OfferSection';
import GuaranteeSection from '@/components/sections/GuaranteeSection';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import FooterSection from '@/components/sections/FooterSection';

const HOTMART_URL = '#';

const Index = () => {
  return (
    <div className="min-h-screen">
      <CouponPopup />
      <UrgencyBanner />
      <HeroSection />
      <div className="section-divider" />
      <ProblemSection />
      <div className="section-divider" />
      <StorySection />
      <div className="section-divider" />
      <WhatsInsideSection />
      <div className="section-divider" />
      <DigitalAdvantageSection />
      <div className="section-divider" />
      <BonusSection />
      <div className="section-divider" />
      <TestimonialsSection />
      <div className="section-divider" />
      <OfferSection hotmartUrl={HOTMART_URL} />
      <div className="section-divider" />
      <GuaranteeSection />
      <div className="section-divider" />
      <FAQSection />
      <div className="section-divider" />
      <FinalCTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
