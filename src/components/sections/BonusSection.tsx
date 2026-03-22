import ScrollReveal from '@/components/ScrollReveal';
import bonusGuides from '@/assets/bonus-guides.jpg';
import bonusCalendar from '@/assets/bonus-calendar.jpg';
import bonusRegional from '@/assets/bonus-regional.jpg';
import bonusSeasons from '@/assets/bonus-seasons.jpg';
import bonusTemplates from '@/assets/bonus-templates.jpg';
import { Calendar, MapPin, Sun, FileText, Check, Gift } from 'lucide-react';

const BonusSection = () => {
  const bonuses = [
    {
      icon: Calendar,
      number: "1",
      title: "Calendrier de Plantes",
      subtitle: "Guide mensuel de récolte + culture en France",
      value: "19,90 €",
      image: bonusCalendar,
      points: [
        "Quand cueillir chaque plante mois par mois",
        "Conseils de culture adaptés au climat français",
        "PDF imprimable à accrocher dans votre cuisine",
      ],
    },
    {
      icon: MapPin,
      number: "2",
      title: "Guide des Herbes Régionales",
      subtitle: "150 plantes médicinales des régions françaises",
      value: "24,90 €",
      image: bonusRegional,
      points: [
        "Provence, Bretagne, Alsace, Normandie et plus",
        "Plantes spécifiques à chaque terroir",
        "Identification et utilisations détaillées",
      ],
    },
    {
      icon: Sun,
      number: "3",
      title: "Recettes Saison par Saison",
      subtitle: "50 recettes adaptées à chaque saison française",
      value: "14,90 €",
      image: bonusSeasons,
      points: [
        "Printemps, été, automne, hiver",
        "Ingrédients de saison facilement disponibles",
        "Recettes prêtes à préparer immédiatement",
      ],
    },
    {
      icon: FileText,
      number: "4",
      title: "Plantillas de Préparation",
      subtitle: "Hojas de trabajo personalizables en PDF editable",
      value: "9,90 €",
      image: bonusTemplates,
      points: [
        "Fiches de suivi de vos préparations",
        "Journal de remèdes personnalisable",
        "Format PDF éditable — remplissez et imprimez",
      ],
    },
  ];

  const totalBonusValue = "69,60 €";

  return (
    <section className="py-16 px-4 bg-wood-dark">
      <div className="container max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="text-center text-sm tracking-widest uppercase text-gold-light mb-2">
            <Gift className="inline w-4 h-4 mr-1" />
            BONUS EXCLUSIFS — OFFERTS AUJOURD'HUI
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gold">
            4 guides bonus OFFERTS avec votre commande
          </h2>
          <p className="text-center text-parchment mb-10 text-lg">
            Valeur totale des bonus : {totalBonusValue} — <strong className="text-gold">GRATUIT</strong> pour vous aujourd'hui
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <img
            src={bonusGuides}
            alt="4 guides bonus PDF offerts avec la Pharmacie de Grand-Mère"
            className="w-full rounded-lg mb-10 shadow-lg"
          />
        </ScrollReveal>

        <div className="space-y-6">
          {bonuses.map((bonus, i) => (
            <ScrollReveal key={i} delay={200 + i * 100}>
              <div className="bg-wood rounded-lg p-6 border border-gold/20">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
                    BONUS {bonus.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gold mb-1">{bonus.title}</h3>
                <p className="text-parchment text-sm mb-2">{bonus.subtitle}</p>
                <p className="text-gold-light text-sm mb-4">
                  Valeur<span className="ml-1 font-bold">{bonus.value}</span>
                </p>
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  className="w-full rounded-lg mb-4 shadow-md"
                />
                <ul className="space-y-2">
                  {bonus.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-parchment text-sm">
                      <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
