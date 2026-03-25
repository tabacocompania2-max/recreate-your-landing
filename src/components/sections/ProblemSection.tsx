import ScrollReveal from '@/components/ScrollReveal';
import handsPreparing from '@/assets/hands-preparing.webp';
import apothecaryShelf from '@/assets/apothecary-shelf.webp';
import { AlertTriangle } from 'lucide-react';

const ProblemSection = () => (
  <section className="py-16 px-4 bg-wood-dark">
    <div className="container max-w-3xl mx-auto">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gold">
          Que ferez-vous le jour où les pharmacies ne pourront plus vous aider ?
        </h2>
        <p className="text-center text-parchment mb-10 text-lg leading-relaxed">
          Ce n'est pas une question hypothétique. En janvier 2023, des parents ont fait la queue pendant des heures pour trouver du Doliprane pour enfants. <strong className="text-gold">Les étagères étaient vides.</strong> Et ce n'est que le début. Pendant ce temps, il existe une plante que vous avez probablement dans votre cuisine — le thym — qui fait baisser la fièvre naturellement. Votre grand-mère le savait. Vous, non.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <img
          src={handsPreparing}
          alt="Mains de grand-mère préparant une tisane aux plantes médicinales"
          className="w-full rounded-lg mb-10 shadow-lg"
        />
      </ScrollReveal>

      <div className="space-y-4 mb-10">
        {[
          "Votre enfant vomit à 2h du matin. Pharmacie fermée. Médecin indisponible. Vous tapez « remède naturel vomissement enfant » sur Google et vous tombez sur 50 réponses contradictoires. Pendant ce temps, une simple infusion de gingembre aurait tout calmé.",
          "Une grève des transports paralyse votre ville. Les livraisons sont bloquées. Les pharmacies rationnent. Vous réalisez que vous n'avez AUCUN plan B pour soigner une infection urinaire, une brûlure, ou une crise d'angoisse.",
          "Vous dépensez 40 à 80 € par mois en médicaments en vente libre — pour des problèmes que l'ail, le miel et le vinaigre de cidre peuvent résoudre. Pas une croyance. Un fait vérifié par des études.",
          "Votre grand-mère savait soigner un mal de gorge en 20 minutes avec du miel et du citron chaud. Elle savait calmer une toux sèche avec de l'oignon coupé au chevet du lit. Qui vous a transmis ça ? Personne.",
        ].map((text, i) => (
          <ScrollReveal key={i} delay={200 + i * 100}>
            <div className="flex items-start gap-3 p-4 bg-wood rounded-lg">
              <AlertTriangle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <p className="text-parchment">{text}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={500}>
        <img
          src={apothecaryShelf}
          alt="Étagère d'apothicaire française traditionnelle avec bocaux d'herbes médicinales"
          className="w-full rounded-lg mb-8 shadow-lg"
        />
      </ScrollReveal>

      <ScrollReveal delay={600}>
        <blockquote className="text-center text-xl italic text-gold-light">
          <p>« Chaque semaine, une personne âgée emporte avec elle un remède que personne n'a pris le temps de noter…</p>
          <p className="mt-2 font-bold">Nous avons passé 3 ans à les retrouver. Ce que vous allez lire n'existe nulle part ailleurs. »</p>
        </blockquote>
      </ScrollReveal>
    </div>
  </section>
);

export default ProblemSection;
