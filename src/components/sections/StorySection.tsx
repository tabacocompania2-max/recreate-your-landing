import ScrollReveal from '@/components/ScrollReveal';
import frenchKitchen from '@/assets/french-kitchen.jpg';
import grandmotherHerbs from '@/assets/grandmother-herbs.jpg';

const StorySection = () => (
  <section className="py-16 px-4 bg-wood">
    <div className="container max-w-3xl mx-auto">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gold">
          La promesse qui a tout changé
        </h2>
        <p className="text-center text-gold-light italic mb-10 text-lg">
          « Elle m'a pris la main et m'a dit : "Le jour où les pharmacies ne pourront plus t'aider, tu auras besoin de ce cahier." »
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
          <p>Ma grand-mère Marguerite n'avait jamais mis les pieds dans une pharmacie. Dans son village provençal, elle soignait tout le monde — ses enfants, ses voisins, même le médecin du village venait lui demander conseil.</p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p><strong className="text-gold">Son arme secrète ?</strong> Un vieux cahier jauni, taché par des années d'utilisation. Chaque page contenait un remède transmis par sa mère, et avant elle, par des générations entières de femmes qui savaient <em>se débrouiller seules</em>.</p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p>Avant de partir, elle m'a regardé dans les yeux et m'a dit : <em className="text-gold-light">« Le monde change. Un jour, tu ne pourras pas compter sur les pharmacies. Ce cahier, c'est ton assurance. Ne le perds jamais. »</em></p>
        </ScrollReveal>

        <ScrollReveal delay={500}>
          <p>J'ai passé <strong className="text-gold">3 ans</strong> à retrouver, vérifier et compiler ces remèdes — en les complétant avec ceux de dizaines d'autres familles françaises, de la Bretagne à la Provence. <strong className="text-gold">Parce que ce savoir ne doit pas mourir.</strong></p>
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
          Le résultat ? <span className="gold-text-gradient">La Pharmacie de Grand-Mère</span> — votre plan B quand le système vous lâche.
        </p>
        <p className="text-center text-parchment text-lg mb-10">
          250 remèdes prêts à utiliser. Aucune pharmacie nécessaire. Aucune ordonnance. Juste vous, votre famille, et la nature.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={800}>
        <div className="text-center">
          <a
            href="#offer"
            onClick={(e) => { e.preventDefault(); document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="cta-button inline-block no-underline text-lg"
          >
            📥 Oui, je veux protéger ma famille
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default StorySection;
