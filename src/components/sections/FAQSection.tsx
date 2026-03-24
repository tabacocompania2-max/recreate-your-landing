import ScrollReveal from '@/components/ScrollReveal';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    { q: "Comment vais-je recevoir mon guide ?", a: "Immédiatement. En moins de 30 secondes après votre paiement, vous recevez un e-mail avec tous vos PDF — le guide principal + les 4 bonus. Lisez-le sur votre téléphone, tablette ou ordinateur. Imprimez-le si vous voulez l'avoir en cas de coupure internet." },
    { q: "Je n'y connais rien en plantes. C'est pour moi ?", a: "C'est EXACTEMENT pour vous. Chaque remède est expliqué comme si votre grand-mère vous le montrait : étape par étape, avec des ingrédients que vous trouvez au marché ou dans votre jardin. Aucune connaissance préalable nécessaire." },
    { q: "Est-ce que ça remplace mon médecin ?", a: "Ce guide est un complément puissant, pas un remplacement. Mais posez-vous cette question : que ferez-vous quand votre médecin ne sera PAS disponible ? Un dimanche soir ? Pendant une grève ? En cas de crise ? C'est là que ce guide devient indispensable." },
    { q: "Combien de temps ai-je accès au guide ?", a: "À VIE. Une fois téléchargé, il est à vous pour toujours. Transmettez-le à vos enfants, vos petits-enfants. C'est votre héritage familial de santé naturelle." },
    { q: "Le paiement est-il sécurisé ?", a: "100% sécurisé. Le paiement est traité par Hotmart, plateforme internationale utilisée par des millions de personnes. Vos données bancaires sont protégées par cryptage SSL de niveau bancaire." },
    { q: "Et si ça ne me plaît pas ?", a: "Vous avez 30 jours pour tester. Si le guide ne vous convient pas — pour N'IMPORTE quelle raison — vous êtes remboursé intégralement. Pas de justification, pas de paperasse. Un simple e-mail suffit." },
    { q: "Pourquoi ce prix si bas ?", a: "Parce que notre mission est de remettre ce savoir entre les mains du plus grand nombre de familles françaises possible. Ce prix ne durera pas éternellement — il augmentera dès que nous aurons atteint notre objectif de diffusion." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 bg-wood-dark">
      <div className="container max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gold">
            Vos questions, nos réponses
          </h2>
        </ScrollReveal>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={100 + i * 60}>
              <div className="bg-wood rounded-lg overflow-hidden border border-gold/10">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer transition-colors hover:bg-wood-light"
                >
                  <span className="text-gold font-semibold pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`} />
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-5 text-parchment leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
