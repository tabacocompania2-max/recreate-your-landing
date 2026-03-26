import ScrollReveal from '@/components/ScrollReveal';
import { Star, User } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Marie L.',
      city: 'Lyon',
      text: "J'ai enfin trouvé un remède naturel contre mes migraines. Je recommande.",
    },
    {
      name: 'Sophie D.',
      city: 'Bordeaux',
      text: "J'utilise ce guide chaque semaine. Simple, efficace, naturel.",
    },
    {
      name: 'Claire M.',
      city: 'Paris',
      text: "Le remède pour le romarin et les cheveux m'a bluffée. Ça marche vraiment.",
    },
  ];

  return (
    <section className="py-12 px-4 bg-parchment">
      <div className="container max-w-2xl mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-wood-dark">
            Ce que disent nos lecteurs
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={100 + i * 80}>
              <div className="bg-card rounded-xl p-5 border border-gold/20 shadow-sm text-center">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-3">
                  <User className="w-6 h-6 text-gold" />
                </div>
                <div className="flex items-center justify-center gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-current text-gold" />
                  ))}
                </div>
                <p className="text-parchment italic text-sm mb-3">« {t.text} »</p>
                <p className="text-gold font-bold text-sm">— {t.name}</p>
                <p className="text-muted-foreground text-xs">{t.city}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-wood-dark">
              <span className="font-bold">2 400+ familles équipées</span>
            </div>
            <div className="flex items-center gap-2 text-wood-dark">
              <Star className="w-4 h-4 fill-current text-gold" />
              <span className="font-bold">4.9/5 — avis vérifiés</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
