import ScrollReveal from '@/components/ScrollReveal';
import { Star, Users, ArrowRight } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Marie-Claire D.',
      city: 'Lyon',
      age: '62 ans',
      text: "Mon petit-fils de 4 ans s'est brûlé la main sur la plaque de cuisson. J'ai appliqué du miel cru et un cataplasme. Le lendemain, la rougeur avait diminué de moitié. Le médecin lundi : « Vous avez fait exactement ce qu'il fallait. »",
    },
    {
      name: 'Catherine B.',
      city: 'Toulouse',
      age: '41 ans',
      text: "Je dépensais 70 € par mois en pharmacie pour des choses basiques. Depuis le guide, moins de 15 €. Et mes enfants savent maintenant préparer une tisane tout seuls.",
    },
    {
      name: 'Henri G.',
      city: 'Rennes',
      age: '58 ans',
      text: "Quand j'ai vu que l'amoxicilline était en rupture de stock, j'ai regardé ma femme et j'ai dit : « On a le guide. » C'est une assurance. Le genre de truc qu'on est content d'avoir le jour où tout déraille.",
    },
  ];

  return (
    <section className="py-12 px-4 bg-wood-dark">
      <div className="container max-w-2xl mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gold">
            Ce que disent ceux qui l'utilisent déjà
          </h2>
        </ScrollReveal>

        <div className="space-y-4 mb-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={100 + i * 80}>
              <div className="testimonial-card">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-current text-gold" />
                  ))}
                </div>
                <p className="text-parchment italic text-sm mb-3">« {t.text} »</p>
                <p className="text-gold font-bold text-sm">— {t.name} <span className="text-muted-foreground font-normal">({t.city}, {t.age})</span></p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <div className="flex items-center gap-2 text-gold">
              <Users className="w-5 h-5" />
              <span className="font-bold">2 400+ familles</span>
            </div>
            <div className="flex items-center gap-2 text-gold">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-bold">4.9/5 — 150+ avis vérifiés</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={500}>
          <div className="text-center">
            <a
              href="#offer"
              onClick={(e) => { e.preventDefault(); document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="cta-button-green inline-flex items-center gap-2 no-underline"
            >
              📥 ACCÉDER AUX 250 REMÈDES
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
