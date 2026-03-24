import ScrollReveal from '@/components/ScrollReveal';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    { name: "Marie-Claire D.", city: "Lyon", text: "Mon petit-fils de 4 ans s'est brûlé la main sur la plaque de cuisson un dimanche. Urgences bondées, 3h d'attente annoncées. J'ai ouvert le guide, appliqué du miel cru et un cataplasme d'aloe vera. Le lendemain, la rougeur avait diminué de moitié. Le médecin lundi m'a dit : « Vous avez fait exactement ce qu'il fallait. »", age: "62 ans" },
    { name: "Jean-Pierre L.", city: "Bordeaux", text: "Je suis médecin retraité. J'ai prescrit des milliers de médicaments en 35 ans. Aujourd'hui, pour ma famille, j'utilise ce guide. Pas par idéologie, par pragmatisme. La moitié de ces remèdes sont validés par des études que mes collègues ne prennent pas le temps de lire. L'ail en infusion pour la tension, le curcuma pour l'inflammation — ça fonctionne.", age: "68 ans" },
    { name: "Isabelle M.", city: "Strasbourg", text: "Ma fille de 8 ans toussait tellement qu'elle ne pouvait plus dormir. 23h, pas de pharmacie ouverte, le médecin de garde décroche pas. J'ai coupé un oignon en deux que j'ai posé sur sa table de nuit (oui, ça paraît fou). En 20 minutes, elle dormait. J'ai pleuré de soulagement. Ce guide m'a sauvée ce soir-là.", age: "45 ans" },
    { name: "François R.", city: "Marseille", text: "Depuis 6 mois, j'ai remplacé l'ibuprofène par du curcuma + poivre noir, et les somnifères par de la valériane. Mon médecin a vu mes analyses et m'a demandé ce que j'avais changé. Quand je lui ai dit, il n'a rien répondu. Mes résultats parlent d'eux-mêmes.", age: "55 ans" },
    { name: "Catherine B.", city: "Toulouse", text: "On dépensait environ 70 € par mois en pharmacie pour des trucs basiques : rhume, maux de tête, problèmes de digestion. Depuis le guide, on a réduit à moins de 15 €. Et le plus beau, c'est que mes enfants de 10 et 12 ans savent maintenant préparer une tisane contre le mal de ventre tout seuls.", age: "41 ans" },
    { name: "Henri G.", city: "Rennes", text: "Quand j'ai vu aux infos que l'amoxicilline était en rupture de stock dans toute la France, j'ai regardé ma femme et j'ai dit : « On a le guide. » Ce n'est pas un livre de recettes. C'est une assurance. Le genre de truc qu'on est content d'avoir le jour où tout déraille.", age: "58 ans" },
  ];

  return (
    <section className="py-16 px-4 bg-wood">
      <div className="container max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gold">
            Ce que disent ceux qui l'utilisent déjà
          </h2>
          <p className="text-center text-parchment mb-10 text-lg">
            +2 400 familles françaises ont choisi de ne plus dépendre uniquement du système
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
