import ScrollReveal from '@/components/ScrollReveal';
import { ArrowRight } from 'lucide-react';

const ProblemSection = () => (
  <section className="py-14 px-4 bg-parchment">
    <div className="container max-w-xl mx-auto text-center">
      <ScrollReveal>
        <p className="text-wood-dark text-lg md:text-xl leading-relaxed font-serif italic mb-4">
          Avant, quand on était malade, on n'allait pas à la pharmacie.
        </p>
        <p className="text-wood-dark text-lg md:text-xl leading-relaxed font-serif italic mb-4">
          On allait chez grand-mère.
        </p>
        <p className="text-wood-dark text-lg md:text-xl leading-relaxed font-serif italic mb-4">
          Elle savait quoi faire. Elle avait toujours une plante, une tisane, un remède.
        </p>
        <p className="text-wood-dark text-lg md:text-xl leading-relaxed font-serif italic mb-4">
          Aujourd'hui, ce savoir a presque disparu.
        </p>
        <p className="text-gold text-xl md:text-2xl font-bold mt-6">
          Ce guide le ramène.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <a
          href="#offer"
          onClick={(e) => { e.preventDefault(); document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' }); }}
          className="cta-button-green inline-flex items-center gap-2 no-underline mt-8"
        >
          📥 ACCÉDER AUX 250 REMÈDES
          <ArrowRight className="w-5 h-5" />
        </a>
      </ScrollReveal>
    </div>
  </section>
);

export default ProblemSection;
