import ScrollReveal from '@/components/ScrollReveal';
import frenchKitchen from '@/assets/french-kitchen.webp';
import grandmotherHerbs from '@/assets/grandmother-herbs.webp';

const StorySection = () => (
  <section className="py-16 px-4 bg-wood">
    <div className="container max-w-3xl mx-auto">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gold">
          La promesse qui a tout changé
        </h2>
        <p className="text-center text-gold-light italic mb-10 text-lg">
          « Elle sentait la lavande et le thym. Ses mains tremblaient quand elle m'a tendu ce cahier. Elle m'a dit : "Le jour viendra où tu ne pourras compter que sur toi-même." »
        </p>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <img
          src={frenchKitchen}
          alt="Cuisine de campagne française traditionnelle avec herbes séchées"
          className="w-full rounded-lg mb-8 shadow-lg"
        />
      </ScrollReveal>

      <div className="space-y-6 text-parchment text-lg leading-relaxed mb-10">
        <ScrollReveal delay={200}>
          <p>Ma grand-mère Marguerite vivait dans un village provençal sans pharmacie. Quand un enfant avait des vers intestinaux, elle préparait une décoction de graines de papaye et d'ail. Quand quelqu'un se brûlait, elle appliquait du miel cru directement sur la plaie — bien avant que les hôpitaux ne « découvrent » que le miel médical accélère la cicatrisation. <strong className="text-gold">Elle n'avait pas de diplôme. Elle avait 60 ans d'expérience.</strong></p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p>Son cahier était taché, jauni, avec des pages qui se détachaient. Chaque tache était la preuve qu'un remède avait été utilisé. Cataplasme d'argile pour les entorses. Vinaigre des 4 voleurs contre les infections. Tisane de valériane contre l'insomnie. <em>Des solutions qui fonctionnaient avant l'invention des laboratoires pharmaceutiques.</em></p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p>Quand elle est partie, j'ai ouvert ce cahier et j'ai réalisé quelque chose de terrifiant : <strong className="text-gold">si je ne faisais rien, tout ce savoir disparaîtrait avec elle.</strong> Comme des milliers d'autres cahiers perdus dans des greniers, jetés par des familles qui ne savaient pas ce qu'ils avaient entre les mains.</p>
        </ScrollReveal>

        <ScrollReveal delay={500}>
          <p>J'ai passé 3 ans à retrouver ces remèdes. J'ai contacté des herboristes, des naturopathes, des familles rurales de la Bretagne à la Corse. J'ai recoupé chaque remède avec des études scientifiques modernes. Résultat : <strong className="text-gold">85% des remèdes de grand-mère sont aujourd'hui confirmés par la science.</strong> Le reste ? La science n'a tout simplement pas encore pris le temps de les étudier.</p>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={600}>
        <img
          src={grandmotherHerbs}
          alt="Préparation traditionnelle de remèdes aux herbes par une grand-mère française"
          className="w-full rounded-lg mb-8 shadow-lg"
        />
      </ScrollReveal>

      <ScrollReveal delay={700}>
        <p className="text-center text-xl text-gold font-semibold mb-8">
          Le résultat ? <span className="gold-text-gradient">La Pharmacie de Grand-Mère</span> — 250 remèdes que vous ne trouverez dans aucune pharmacie. Et dont vous aurez besoin le jour où elles fermeront.
        </p>
        <p className="text-center text-parchment text-lg mb-10">
          Pas de jargon médical. Pas d'ingrédients exotiques. Juste des solutions qui fonctionnent avec ce que vous avez déjà chez vous : du miel, de l'ail, du citron, du thym, du vinaigre…
        </p>
      </ScrollReveal>

      <ScrollReveal delay={800}>
        <div className="text-center">
          <a
            href="#offer"
            onClick={(e) => { e.preventDefault(); document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="cta-button inline-block no-underline text-lg"
          >
            📥 Découvrir les 250 remèdes
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default StorySection;
