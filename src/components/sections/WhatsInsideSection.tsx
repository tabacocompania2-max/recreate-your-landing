import ScrollReveal from '@/components/ScrollReveal';
import herbsFlatlay from '@/assets/herbs-flatlay.jpg';
import herbsCollection from '@/assets/herbs-collection.jpg';
import { Heart, Zap, Leaf, Shield, Star, Brain, Droplets, Flower2 } from 'lucide-react';

const WhatsInsideSection = () => {
  const categories = [
    { icon: Heart, title: "Système cardiovasculaire", count: "42 remèdes", desc: "Quand votre tension monte et qu'il n'y a pas de médecin à l'horizon" },
    { icon: Zap, title: "Système digestif", count: "38 remèdes", desc: "Douleurs d'estomac, intoxications — agissez sans attendre" },
    { icon: Leaf, title: "Système respiratoire", count: "35 remèdes", desc: "Toux, bronchite, gorge en feu — des solutions en quelques minutes" },
    { icon: Shield, title: "Système immunitaire", count: "28 remèdes", desc: "Renforcez vos défenses AVANT que la maladie ne frappe" },
    { icon: Star, title: "Douleurs & articulations", count: "30 remèdes", desc: "Soulagez la douleur naturellement, sans anti-inflammatoires chimiques" },
    { icon: Droplets, title: "Problèmes de peau", count: "25 remèdes", desc: "Eczéma, brûlures, irritations — des réponses immédiates" },
    { icon: Brain, title: "Stress & sommeil", count: "22 remèdes", desc: "Dormez enfin sans somnifères. Calmez l'anxiété naturellement" },
    { icon: Flower2, title: "Santé intime", count: "30 remèdes", desc: "Santé féminine et masculine — ce que la pudeur a fait oublier" },
  ];

  return (
    <section className="py-16 px-4 bg-wood-dark">
      <div className="container max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            250 solutions pour ne plus jamais être <span className="gold-text-gradient">démuni</span>
          </h2>
          <p className="text-center text-parchment mb-10 text-lg">
            Organisé par problème de santé — trouvez le bon remède en moins de 30 secondes, même en situation d'urgence
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
