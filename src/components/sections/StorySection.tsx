import ScrollReveal from '@/components/ScrollReveal';
import frenchKitchen from '@/assets/french-kitchen.jpg';
import grandmotherHerbs from '@/assets/grandmother-herbs.jpg';

const StorySection = () => (
  <section className="py-16 px-4 bg-wood">
    <div className="container max-w-3xl mx-auto">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gold">
          L'histoire derrière la Pharmacie de Grand-Mère
        </h2>
        <p className="text-center text-gold-light italic mb-10 text-lg">
          « Une promesse faite à ma grand-mère dans sa cuisine en Provence… »
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
          <p>Ma grand-mère Marguerite vivait dans un petit village provençal. Dans sa cuisine, des bouquets de thym, de lavande et de romarin séchaient au plafond. Elle avait un vieux cahier — jauni, taché, rempli de recettes écrites à la main.</p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p><strong className="text-gold">Ce cahier était sa « pharmacie ».</strong> Chaque page contenait un remède transmis par sa propre mère, et avant elle, par sa grand-mère. Des générations de sagesse française condensées dans un simple carnet.</p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p>Avant de nous quitter, elle m'a dit : <em className="text-gold-light">« Ne laisse pas tout ça disparaître. »</em></p>
        </ScrollReveal>

        <ScrollReveal delay={500}>
          <p>J'ai passé <strong className="text-gold">3 ans</strong> à rassembler, vérifier et organiser ces remèdes — complétés par ceux d'autres familles françaises, de la Bretagne à l'Alsace, de la Normandie à la Côte d'Azur.</p>
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
          Le résultat ? <span className="gold-text-gradient">La Pharmacie de Grand-Mère</span> — un guide de 250 remèdes ancestraux français,
        </p>
        <p className="text-center text-parchment text-lg mb-10">
          prêt à être utilisé par votre famille dès aujourd'hui.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={800}>
        <div className="text-center">
          <a
            href="#offer"
            onClick={(e) => { e.preventDefault(); document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="cta-button inline-block no-underline text-lg"
          >
            📥 Oui, je veux retrouver ces remèdes naturels
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default StorySection;
