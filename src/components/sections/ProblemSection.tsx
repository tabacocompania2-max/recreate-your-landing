import ScrollReveal from '@/components/ScrollReveal';
import { ArrowRight } from 'lucide-react';

const ProblemSection = () => (
  <section className="py-12 px-4 bg-wood-dark">
    <div className="container max-w-2xl mx-auto text-center">
      <ScrollReveal>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gold">
          Que ferez-vous le jour où les pharmacies ne pourront plus vous aider ?
        </h2>
        <p className="text-parchment text-base leading-relaxed mb-3">
          En 2024, <strong className="text-gold">plus de 3 000 médicaments étaient en rupture de stock en France.</strong> Le paracétamol, l'amoxicilline, l'ibuprofène… les bases.
        </p>
        <p className="text-parchment text-base leading-relaxed mb-3">
          Votre grand-mère, elle, n'a jamais eu besoin d'une pharmacie. Elle savait soigner une fièvre avec 3 ingrédients de sa cuisine.
        </p>
        <p className="text-gold font-bold text-lg mb-6">
          Ce savoir meurt avec sa génération. Ce guide le sauve.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <a
          href="#offer"
          onClick={(e) => { e.preventDefault(); document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' }); }}
          className="cta-button-green inline-flex items-center gap-2 no-underline"
        >
          📥 ACCÉDER AUX 250 REMÈDES
          <ArrowRight className="w-5 h-5" />
        </a>
      </ScrollReveal>
    </div>
  </section>
);

export default ProblemSection;
