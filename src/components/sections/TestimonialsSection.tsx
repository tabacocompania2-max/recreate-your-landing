import ScrollReveal from '@/components/ScrollReveal';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    { name: "Marie-Claire D.", city: "Lyon", text: "Pendant le confinement, impossible de voir un médecin. Grâce à ce guide, j'ai pu soulager la bronchite de mon mari avec du thym et du miel. Sans ça, je ne sais pas ce qu'on aurait fait.", age: "62 ans" },
    { name: "Jean-Pierre L.", city: "Bordeaux", text: "En tant que médecin retraité, je peux vous dire que ces remèdes marchent. Nos ancêtres n'avaient pas de pharmacies — et ils survivaient. Ce guide est une assurance vie pour votre famille.", age: "68 ans" },
    { name: "Isabelle M.", city: "Strasbourg", text: "Ma fille de 8 ans avait de la fièvre un dimanche soir. Pharmacie fermée. J'ai ouvert le guide sur mon téléphone et j'ai trouvé la solution en 2 minutes. Ce guide m'a évité la panique.", age: "45 ans" },
    { name: "François R.", city: "Marseille", text: "J'ai arrêté 3 médicaments chimiques depuis que j'utilise ce guide. Mon médecin n'en revient pas. Les remèdes de nos grands-parents sont plus puissants qu'on ne le croit.", age: "55 ans" },
    { name: "Catherine B.", city: "Toulouse", text: "Avec la hausse des prix en pharmacie, ce guide nous fait économiser des centaines d'euros par an. Et en plus, c'est naturel. Mes enfants adorent préparer les tisanes avec moi.", age: "41 ans" },
    { name: "Henri G.", city: "Rennes", text: "Quand j'ai vu les pénuries de médicaments aux infos, j'ai su que j'avais pris la bonne décision. Ce guide, c'est mon plan B. Et franchement, il devrait être dans chaque foyer français.", age: "58 ans" },
  ];

  return (
    <section className="py-16 px-4 bg-wood">
      <div className="container max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gold">
            Des familles françaises déjà protégées
          </h2>
          <p className="text-center text-parchment mb-10 text-lg">
            +2 400 personnes ont déjà fait le choix de ne plus dépendre uniquement des pharmacies
          </p>
        </ScrollReveal>

        <div className="space-y-4">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={100 + i * 80}>
              <div className="testimonial-card">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current text-gold" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-gold/30 mb-2" />
                <p className="text-parchment italic mb-4">« {t.text} »</p>
                <div>
                  <p className="font-bold text-gold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.city} · {t.age}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
