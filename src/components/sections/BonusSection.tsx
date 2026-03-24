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
      title: "Calendrier de Récolte",
      subtitle: "La camomille cueillie en juin est 3x plus puissante qu'en septembre. Ce calendrier vous dit QUAND agir.",
      value: "19,90 €",
      image: bonusCalendar,
      points: [
        "Mois par mois : le moment exact où chaque plante atteint son pic d'efficacité",
        "Fonctionne même sur un balcon — cultivez vos propres remèdes d'urgence",
        "À imprimer et accrocher dans votre cuisine — votre pharmacie commence là",
      ],
    },
    {
      icon: MapPin,
      number: "2",
      title: "Guide des Plantes de votre Région",
      subtitle: "150 plantes médicinales qui poussent GRATUITEMENT autour de chez vous. Vous marchez dessus tous les jours.",
      value: "24,90 €",
      image: bonusRegional,
      points: [
        "Classé par région : Provence, Bretagne, Alsace, Auvergne, Normandie…",
        "Photos d'identification pour ne jamais confondre une plante utile avec une toxique",
        "Le pissenlit dans votre jardin ? C'est un détoxifiant hépatique. Et vous le jetez.",
      ],
    },
    {
      icon: Sun,
      number: "3",
      title: "Recettes Saison par Saison",
      subtitle: "L'hiver apporte la grippe. L'été, les intoxications. Chaque saison a ses dangers — et ses remèdes.",
      value: "14,90 €",
      image: bonusSeasons,
      points: [
        "50 préparations adaptées au climat et aux maladies saisonnières",
        "Ingrédients disponibles au marché — même en période de pénurie",
        "Le sirop de sureau en automne réduit la durée d'un rhume de 4 jours. Recette incluse.",
      ],
    },
    {
      icon: FileText,
      number: "4",
      title: "Fiches de Préparation Rapide",
      subtitle: "En cas d'urgence, vous n'avez pas le temps de chercher. Ces fiches vous donnent la réponse en 10 secondes.",
      value: "9,90 €",
      image: bonusTemplates,
      points: [
        "Format « problème → solution → dosage » — lisible même en situation de stress",
        "Journal de suivi : notez ce qui fonctionne pour VOTRE famille",
        "PDF imprimable — à garder dans votre trousse de premiers secours",
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
            INCLUS GRATUITEMENT — UNIQUEMENT AVEC CETTE OFFRE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gold">
            4 guides stratégiques pour une autonomie TOTALE
          </h2>
          <p className="text-center text-parchment mb-10 text-lg">
            Valeur réelle : {totalBonusValue} — <strong className="text-gold">OFFERTS</strong> aujourd'hui. Demain, ils seront vendus séparément.
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
