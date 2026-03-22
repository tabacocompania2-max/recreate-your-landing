import ScrollReveal from '@/components/ScrollReveal';
import handsPreparing from '@/assets/hands-preparing.jpg';
import apothecaryShelf from '@/assets/apothecary-shelf.jpg';
import { AlertTriangle } from 'lucide-react';

const ProblemSection = () => (
  <section className="py-16 px-4 bg-wood-dark">
    <div className="container max-w-3xl mx-auto">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gold">
          Saviez-vous que 73% des Français ne connaissent plus les remèdes que leurs grands-parents utilisaient au quotidien ?
        </h2>
        <p className="text-center text-parchment mb-10 text-lg leading-relaxed">
          Pendant des siècles, chaque famille française avait son propre « cahier de remèdes » — transmis de mère en fille, de père en fils. Des solutions simples, naturelles, efficaces.
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
          "Vous achetez des médicaments chimiques pour des problèmes que le thym ou la camomille pourraient résoudre ?",
          "Votre grand-mère savait soulager un mal de gorge, une insomnie ou un problème digestif — mais personne ne vous a transmis ses recettes ?",
          "Vous aimeriez prendre soin de votre famille naturellement, mais vous ne savez pas par où commencer ?",
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
          <p>« Ces savoirs précieux sont en train de disparaître…</p>
          <p className="mt-2 font-bold">Nous les avons sauvegardés pour vous. »</p>
        </blockquote>
      </ScrollReveal>
    </div>
  </section>
);

export default ProblemSection;
