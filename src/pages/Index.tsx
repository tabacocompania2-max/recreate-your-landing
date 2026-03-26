import CouponPopup from '@/components/CouponPopup';
import UrgencyBanner from '@/components/sections/UrgencyBanner';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import WhatsInsideSection from '@/components/sections/WhatsInsideSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import OfferSection from '@/components/sections/OfferSection';
import GuaranteeSection from '@/components/sections/GuaranteeSection';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import FooterSection from '@/components/sections/FooterSection';

const HOTMART_URL = 'https://pay.hotmart.com/Y105032981Q?checkoutMode=10';

const Index = () => {
  return (
    <div className="min-h-screen">
      <CouponPopup />
      <UrgencyBanner />
      <HeroSection />
      <div className="section-divider" />
      <ProblemSection />
      <div className="section-divider" />
      <WhatsInsideSection />
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
