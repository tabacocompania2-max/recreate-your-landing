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
          Garantie totale — zéro risque pour vous
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <p className="text-parchment text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          Si pour quelque raison que ce soit vous n'êtes pas entièrement satisfait de votre guide, contactez-nous dans les 30 jours et nous vous rembourserons intégralement. <strong className="text-gold">Pas de questions posées.</strong>
        </p>
      </ScrollReveal>

      <ScrollReveal delay={300}>
        <blockquote className="text-gold-light italic text-lg max-w-xl mx-auto">
          « Vous ne risquez absolument rien. Soit vous adorez le guide, soit vous récupérez votre argent. C'est aussi simple que ça. »
        </blockquote>
      </ScrollReveal>
    </div>
  </section>
);

export default GuaranteeSection;
