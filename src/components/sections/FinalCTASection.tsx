import ScrollReveal from '@/components/ScrollReveal';
import { Lock, ArrowRight } from 'lucide-react';

const FinalCTASection = () => (
  <section className="py-12 px-4 bg-wood-dark">
    <div className="container max-w-2xl mx-auto text-center">
      <ScrollReveal>
        <p className="text-gold-light font-bold text-lg mb-4">
          250 remèdes + 4 bonus OFFERTS — 15,00 € au lieu de 67,00 €
        </p>
        <a
          href="https://pay.hotmart.com/Y105032981Q?checkoutMode=10"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button-green inline-flex items-center gap-2 no-underline text-lg"
        >
          📥 OUI, JE VEUX MES 250 REMÈDES
          <ArrowRight className="w-5 h-5" />
        </a>
        <p className="mt-3 text-sm text-muted-foreground flex items-center justify-center gap-2">
          <Lock className="w-4 h-4" />
          Garantie 30 jours — Remboursement sans conditions
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default FinalCTASection;
