import ScrollReveal from '@/components/ScrollReveal';
import { Lock, ArrowRight } from 'lucide-react';

const FinalCTASection = () => (
  <section className="py-16 px-4 bg-wood">
    <div className="container max-w-3xl mx-auto text-center">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gold">
          Vous avez deux options maintenant.
        </h2>
        <p className="text-parchment text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          <strong className="text-gold">Option 1 :</strong> Vous fermez cette page. Vous oubliez. Et le jour où votre enfant est malade à 2h du matin, où la pharmacie est fermée, où les médicaments manquent — vous cherchez frénétiquement sur Google en espérant trouver une réponse fiable.
          <br /><br />
          <strong className="text-gold">Option 2 :</strong> Vous investissez 29,90 € — moins qu'un repas au restaurant — et dans 30 secondes, vous avez 250 remèdes vérifiés sur votre téléphone. Prêts. Pour toujours. Pour toute votre famille.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <p className="text-gold-light font-bold text-xl mb-6">
          250 remèdes + 4 bonus OFFERTS — 29,90 € au lieu de 166,60 €
        </p>
      </ScrollReveal>

      <ScrollReveal delay={300}>
        <a
          href="#offer"
          onClick={(e) => { e.preventDefault(); document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' }); }}
          className="cta-button inline-flex items-center gap-2 no-underline"
        >
          📥 JE CHOISIS L'OPTION 2
          <ArrowRight className="w-5 h-5" />
        </a>
        <p className="mt-4 text-sm text-muted-foreground flex items-center justify-center gap-2">
          <Lock className="w-4 h-4" />
          Garantie 30 jours — Remboursement sans conditions
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default FinalCTASection;
