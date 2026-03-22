import ScrollReveal from '@/components/ScrollReveal';
import { Lock, ArrowRight } from 'lucide-react';

const FinalCTASection = () => (
  <section className="py-16 px-4 bg-wood">
    <div className="container max-w-3xl mx-auto text-center">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gold">
          Ne laissez pas ces savoirs disparaître
        </h2>
        <p className="text-parchment text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          Chaque jour, des remèdes ancestraux français tombent dans l'oubli. Agissez maintenant pour préserver ces trésors de sagesse et prendre soin de votre famille naturellement.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <p className="text-gold-light font-bold text-xl mb-6">
          250 remèdes + 4 bonus OFFERTS — seulement 29,90 €
        </p>
      </ScrollReveal>

      <ScrollReveal delay={300}>
        <a
          href="#offer"
          onClick={(e) => { e.preventDefault(); document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' }); }}
          className="cta-button inline-flex items-center gap-2 no-underline"
        >
          📥 RECEVOIR MON GUIDE PAR E-MAIL
          <ArrowRight className="w-5 h-5" />
        </a>
        <p className="mt-4 text-sm text-muted-foreground flex items-center justify-center gap-2">
          <Lock className="w-4 h-4" />
          Paiement sécurisé — Livraison instantanée — Garantie 30 jours
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default FinalCTASection;
