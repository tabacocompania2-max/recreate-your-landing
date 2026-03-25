import ScrollReveal from '@/components/ScrollReveal';
import guaranteeBadge from '@/assets/guarantee-badge.webp';

const GuaranteeSection = () => (
  <section className="py-16 px-4 bg-wood">
    <div className="container max-w-3xl mx-auto text-center">
      <ScrollReveal>
        <img
          src={guaranteeBadge}
          alt="Garantie 30 jours satisfait ou remboursé"
          className="mx-auto w-32 h-32 object-contain mb-6"
        />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gold">
          Testez pendant 30 jours. Si ça ne marche pas, on vous rembourse. Point.
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <p className="text-parchment text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          Essayez le remède contre l'insomnie. Testez la tisane contre la toux. Préparez le cataplasme contre les douleurs. Si après 30 jours vous pensez que ça ne vaut pas 15,00 €, <strong className="text-gold">envoyez un simple e-mail et on vous rembourse intégralement.</strong> Pas de formulaire. Pas de justification. Pas de questions. C'est nous qui prenons le risque. Pas vous.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={300}>
        <blockquote className="text-gold-light italic text-lg max-w-xl mx-auto">
          « Personne n'a jamais regretté de savoir soigner sa famille. Mais beaucoup regrettent de ne pas avoir appris avant qu'il ne soit trop tard. »
        </blockquote>
      </ScrollReveal>
    </div>
  </section>
);

export default GuaranteeSection;
