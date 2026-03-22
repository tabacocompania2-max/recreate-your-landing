import ScrollReveal from '@/components/ScrollReveal';
import herbsFlatlay from '@/assets/herbs-flatlay.jpg';
import herbsCollection from '@/assets/herbs-collection.jpg';
import { Heart, Zap, Leaf, Shield, Star, Brain, Droplets, Flower2 } from 'lucide-react';

const WhatsInsideSection = () => {
  const categories = [
    { icon: Heart, title: "Système cardiovasculaire", count: "42 remèdes", desc: "Cœur, circulation, tension artérielle" },
    { icon: Zap, title: "Système digestif", count: "38 remèdes", desc: "Troubles digestifs, foie, estomac" },
    { icon: Leaf, title: "Système respiratoire", count: "35 remèdes", desc: "Gorge, bronches, voies respiratoires" },
    { icon: Shield, title: "Système immunitaire", count: "28 remèdes", desc: "Défenses naturelles, prévention" },
    { icon: Star, title: "Santé musculosquelettique", count: "30 remèdes", desc: "Douleurs articulaires, muscles, os" },
    { icon: Droplets, title: "Problèmes de peau", count: "25 remèdes", desc: "Peau saine, eczéma, irritations" },
    { icon: Brain, title: "Système nerveux", count: "22 remèdes", desc: "Stress, sommeil, anxiété" },
    { icon: Flower2, title: "Système reproducteur", count: "30 remèdes", desc: "Santé féminine et masculine" },
  ];

  return (
    <section className="py-16 px-4 bg-wood-dark">
      <div className="container max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Ce que contient la{' '}<span className="gold-text-gradient">Pharmacie de Grand-Mère</span>
          </h2>
          <p className="text-center text-parchment mb-10 text-lg">
            250 remèdes organisés par système du corps — faciles à trouver, simples à préparer
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <img
            src={herbsFlatlay}
            alt="Arrangement de plantes médicinales françaises avec mortier en laiton"
            className="w-full rounded-lg mb-10 shadow-lg"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {categories.map((item, i) => (
            <ScrollReveal key={i} delay={200 + i * 80}>
              <div className="p-4 bg-wood rounded-lg border border-gold/20">
                <div className="flex items-center gap-3 mb-2">
                  <item.icon className="w-6 h-6 text-gold flex-shrink-0" />
                  <h3 className="text-lg font-bold text-gold">{item.title}</h3>
                </div>
                <p className="text-gold-light font-semibold text-sm">{item.count}</p>
                <p className="text-parchment text-sm mt-1">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={900}>
          <img
            src={herbsCollection}
            alt="Collection complète de plantes médicinales françaises"
            className="w-full rounded-lg shadow-lg"
          />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhatsInsideSection;
