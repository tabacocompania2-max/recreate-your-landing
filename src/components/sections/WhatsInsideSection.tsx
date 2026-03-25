import ScrollReveal from '@/components/ScrollReveal';
import herbsFlatlay from '@/assets/herbs-flatlay.webp';
import herbsCollection from '@/assets/herbs-collection.webp';
import { Heart, Zap, Leaf, Shield, Star, Brain, Droplets, Flower2 } from 'lucide-react';

const WhatsInsideSection = () => {
  const categories = [
    { icon: Heart, title: "Cœur & circulation", count: "42 remèdes", desc: "L'ail cru fait baisser la tension. Mais savez-vous COMMENT le préparer pour qu'il soit efficace ? La plupart des gens le font mal." },
    { icon: Zap, title: "Digestion & intoxications", count: "38 remèdes", desc: "Intoxication alimentaire un samedi soir ? Le charbon végétal agit en 15 minutes. Encore faut-il connaître le bon dosage." },
    { icon: Leaf, title: "Toux, rhume & bronchite", count: "35 remèdes", desc: "L'oignon coupé en deux au chevet du lit calme la toux nocturne d'un enfant. Bizarre ? Oui. Efficace ? Demandez à n'importe quelle grand-mère." },
    { icon: Shield, title: "Immunité & prévention", count: "28 remèdes", desc: "Le vinaigre des 4 voleurs protégeait de la peste au Moyen Âge. Aujourd'hui, il reste l'un des antiseptiques naturels les plus puissants." },
    { icon: Star, title: "Douleurs & inflammations", count: "30 remèdes", desc: "Le curcuma + poivre noir = anti-inflammatoire naturel aussi efficace que l'ibuprofène. Sans détruire votre estomac." },
    { icon: Droplets, title: "Peau, brûlures & infections", count: "25 remèdes", desc: "Le miel sur une brûlure guérit 2x plus vite qu'une crème pharmaceutique. Les hôpitaux commencent à l'utiliser. Votre grand-mère le faisait déjà." },
    { icon: Brain, title: "Insomnie, stress & anxiété", count: "22 remèdes", desc: "La valériane est surnommée « le Valium de la nature ». Sans accoutumance, sans ordonnance, sans effets secondaires." },
    { icon: Flower2, title: "Santé intime", count: "30 remèdes", desc: "Infections urinaires, troubles hormonaux, mycoses… des solutions naturelles que votre médecin ne vous proposera jamais." },
  ];

  return (
    <section className="py-16 px-4 bg-wood-dark">
      <div className="container max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            250 remèdes pour ne plus jamais dire <span className="gold-text-gradient">« je ne sais pas quoi faire »</span>
          </h2>
          <p className="text-center text-parchment mb-10 text-lg">
            Chaque remède tient sur une fiche. Problème → ingrédients → préparation → dosage. Trouvez la solution en 30 secondes, même en pleine panique.
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
