import ScrollReveal from '@/components/ScrollReveal';
import handsPreparing from '@/assets/hands-preparing.jpg';
import apothecaryShelf from '@/assets/apothecary-shelf.jpg';
import { AlertTriangle } from 'lucide-react';

const ProblemSection = () => (
  <section className="py-16 px-4 bg-wood-dark">
    <div className="container max-w-3xl mx-auto">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gold">
          Que ferez-vous le jour où les pharmacies ne pourront plus vous aider ?
        </h2>
        <p className="text-center text-parchment mb-10 text-lg leading-relaxed">
          Pénuries de médicaments, prix qui explosent, crises sanitaires… <strong className="text-gold">ce n'est pas de la fiction, c'est déjà en train d'arriver.</strong> Et pendant ce temps, les remèdes que nos grands-parents utilisaient chaque jour — ceux qui marchaient vraiment — disparaissent avec eux dans l'oubli.
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
          "Votre enfant a de la fièvre à 23h et la pharmacie est fermée — vous faites quoi ?",
          "Une crise sanitaire éclate et les rayons se vident en quelques heures — vous êtes préparé ?",
          "Vous dépensez des dizaines d'euros chaque mois en médicaments chimiques pour des problèmes que le thym ou le miel pourraient résoudre…",
          "Votre grand-mère savait exactement quoi faire face à une toux, une insomnie, une douleur — mais personne ne vous a transmis ces savoirs.",
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
          <p>« Chaque jour qui passe, un remède ancestral meurt avec la génération qui le connaissait…</p>
          <p className="mt-2 font-bold">Nous les avons sauvés. Avant qu'il ne soit trop tard. »</p>
        </blockquote>
      </ScrollReveal>
    </div>
  </section>
);

export default ProblemSection;
