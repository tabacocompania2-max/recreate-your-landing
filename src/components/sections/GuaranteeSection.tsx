import ScrollReveal from '@/components/ScrollReveal';
import guaranteeBadge from '@/assets/guarantee-badge.png';

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
          Vous ne prenez AUCUN risque. Zéro.
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <p className="text-parchment text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          Testez le guide pendant 30 jours complets. Essayez les remèdes. Si vous n'êtes pas convaincu que ce guide peut protéger votre famille, <strong className="text-gold">nous vous remboursons chaque centime. Sans poser une seule question.</strong> C'est nous qui prenons le risque — pas vous.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={300}>
        <blockquote className="text-gold-light italic text-lg max-w-xl mx-auto">
          « Le seul vrai risque, c'est de ne rien faire — et de regretter le jour où vous en aurez besoin. »
        </blockquote>
      </ScrollReveal>
    </div>
  </section>
);

export default GuaranteeSection;
