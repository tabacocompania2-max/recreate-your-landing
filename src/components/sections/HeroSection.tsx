import ebookCover from '@/assets/ebook-cover.webp';
import heroBg from '@/assets/hero-bg.webp';
import { Lock, Star, Users } from 'lucide-react';

const HeroSection = () => (
  <section
    className="relative py-10 px-4 overflow-hidden"
    style={{
      backgroundImage: `linear-gradient(to bottom, hsl(25 20% 8% / 0.85), hsl(25 15% 10% / 0.95)), url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="container max-w-2xl mx-auto text-center">
      <p className="text-2xl mb-2">
        😮 <span className="text-gold-light text-sm tracking-widest uppercase">Vous l'avez demandé, nous l'avons fait ! 🇫🇷</span>
      </p>

      <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-2">
        La{' '}<span className="gold-text-gradient">Pharmacie de Grand-Mère</span>
      </h1>
      <p className="text-gold-light text-lg mb-4">est enfin disponible en français !</p>

      <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
        <img
          src={ebookCover}
          alt="Pharmacie de Grand-Mère — Guide complet PDF avec 250 remèdes naturels"
          className="w-48 md:w-56 rounded-lg shadow-2xl flex-shrink-0"
          fetchPriority="high"
          width={224}
          height={224}
        />

        <div className="text-left space-y-1.5">
          <p className="text-parchment font-semibold text-sm mb-2">🌿 250 remèdes naturels transmis de génération en génération</p>
          <p className="text-parchment text-sm mb-1 font-medium">Voici un aperçu de ce que vous allez découvrir :</p>
          {[
            'Détox antiparasitaire',
            '« Ibuprofène » naturel',
            'Anti-douleur maison',
            'Infusion pour une tension saine',
            'Sérum pour la pousse des cheveux',
            'Antibiotique de grand-mère',
            'Sirop Amish contre la toux',
          ].map((item, i) => (
            <p key={i} className="text-parchment text-sm flex items-center gap-2">
              <span className="text-herb-green">✅</span> {item}
            </p>
          ))}
          <p className="text-gold font-bold text-sm flex items-center gap-2 pt-1">
            <span className="text-herb-green">✅</span> Et bien plus encore à l'intérieur...
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mb-4">
        <div className="flex items-center gap-2 text-gold-light">
          <Users className="w-5 h-5" />
          <span className="text-sm font-bold">+2 400 familles équipées</span>
        </div>
        <div className="flex items-center gap-2 text-gold-light">
          <Star className="w-5 h-5 fill-current" />
          <span className="text-sm font-bold">4.9/5 (avis vérifiés)</span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 text-gold-light text-sm font-semibold mb-4">
        <span>⏰ Code unique : <strong className="text-gold">X24BL44</strong></span>
        <span>—</span>
        <span>Cette offre expire BIENTÔT</span>
      </div>

      <a
        href="#offer"
        onClick={(e) => { e.preventDefault(); document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' }); }}
        className="cta-button-green inline-block text-center no-underline text-lg md:text-xl"
      >
        📥 ACCÉDER AUX 250 REMÈDES MAINTENANT
      </a>
      <p className="mt-3 text-sm text-muted-foreground flex items-center justify-center gap-2">
        <Lock className="w-4 h-4" />
        Accès instantané par email — Téléchargement en 30 secondes
      </p>
    </div>
  </section>
);

export default HeroSection;
