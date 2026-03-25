import ScrollReveal from '@/components/ScrollReveal';
import ebookCover from '@/assets/ebook-cover.webp';
import heroBg from '@/assets/hero-bg.webp';
import { Lock, Users, Star, BookOpen } from 'lucide-react';

const HeroSection = () => (
  <section
    className="relative py-16 px-4 overflow-hidden"
    style={{
      backgroundImage: `linear-gradient(to bottom, hsl(25 20% 8% / 0.85), hsl(25 15% 10% / 0.95)), url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="container max-w-3xl mx-auto text-center">
      <ScrollReveal>
        <p className="text-gold-light text-sm tracking-widest uppercase mb-4">
          🌿 Le guide que la médecine moderne ne veut pas que vous ayez
        </p>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          La{' '}<span className="gold-text-gradient">Pharmacie de Grand-Mère</span>
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <p className="text-lg text-parchment mb-10 max-w-2xl mx-auto leading-relaxed">
          En 2024, <strong className="text-gold">plus de 3 000 médicaments étaient en rupture de stock en France.</strong> Le paracétamol, l'amoxicilline, l'ibuprofène… les bases. Votre grand-mère, elle, n'a jamais eu besoin d'une pharmacie. Elle savait soigner une fièvre avec 3 ingrédients de sa cuisine. <em>Ce savoir meurt avec sa génération.</em> Ce guide le sauve.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={300}>
        <div className="mb-10">
          <img
            src={ebookCover}
            alt="Pharmacie de Grand-Mère — Guide complet PDF avec 250 remèdes naturels"
            className="mx-auto w-64 md:w-72 rounded-lg shadow-2xl"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={400}>
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {[
            { icon: BookOpen, label: '250 remèdes vérifiés' },
            { icon: Users, label: '+2 400 familles équipées' },
            { icon: Star, label: '4.9/5 (avis vérifiés)' },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-2 text-gold-light">
              <stat.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={500}>
        <a
          href="#offer"
          onClick={(e) => { e.preventDefault(); document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' }); }}
          className="cta-button inline-block text-center no-underline"
        >
          📥 ACCÉDER AUX 250 REMÈDES MAINTENANT
        </a>
        <p className="mt-4 text-sm text-muted-foreground flex items-center justify-center gap-2">
          <Lock className="w-4 h-4" />
          Accès instantané par e-mail — Téléchargement en 30 secondes
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default HeroSection;
