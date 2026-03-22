import ScrollReveal from '@/components/ScrollReveal';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    { name: "Marie-Claire D.", city: "Lyon", text: "J'ai retrouvé les remèdes que ma grand-mère utilisait en Provence. La tisane de thym pour la gorge, c'est exactement ce qu'elle me préparait ! Un trésor inestimable.", age: "62 ans" },
    { name: "Jean-Pierre L.", city: "Bordeaux", text: "En tant que médecin à la retraite, je suis impressionné par la qualité des informations. Ces remèdes ont fait leurs preuves pendant des générations. Un excellent complément.", age: "68 ans" },
    { name: "Isabelle M.", city: "Strasbourg", text: "Le format PDF est parfait — je l'ai reçu en 30 secondes. Je consulte mon guide chaque semaine. Les bonus sur les herbes régionales d'Alsace sont formidables.", age: "45 ans" },
    { name: "François R.", city: "Marseille", text: "Un condensé de sagesse ancestrale provençale. Ma femme et moi l'utilisons au quotidien. C'est devenu notre référence santé naturelle. Merci pour ce travail remarquable.", age: "55 ans" },
    { name: "Catherine B.", city: "Toulouse", text: "Le calendrier de plantes est devenu mon guide de jardinage préféré ! Je sais maintenant exactement quand récolter chaque herbe. Mes enfants adorent m'aider.", age: "41 ans" },
    { name: "Henri G.", city: "Rennes", text: "Je cherchais des remèdes bretons de ma famille — ils y sont tous ! La section respiratoire m'a particulièrement aidé cet hiver. Un investissement que je ne regrette pas.", age: "58 ans" },
  ];

  return (
    <section className="py-16 px-4 bg-wood">
      <div className="container max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gold">
            Ce que disent nos lecteurs
          </h2>
          <p className="text-center text-parchment mb-10 text-lg">
            Plus de 2 400 familles françaises utilisent déjà la Pharmacie de Grand-Mère
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
