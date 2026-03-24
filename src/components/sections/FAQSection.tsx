import ScrollReveal from '@/components/ScrollReveal';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    { q: "Je reçois quoi exactement, et quand ?", a: "30 secondes après votre paiement, vous recevez un e-mail avec le guide principal (250 remèdes) + les 4 bonus en PDF. Vous pouvez le lire sur votre téléphone, tablette ou ordinateur. Vous pouvez aussi l'imprimer et le ranger dans votre trousse de premiers secours. C'est à vous pour toujours." },
    { q: "Je n'y connais rien en plantes. C'est vraiment pour moi ?", a: "C'est justement pour ça qu'on l'a créé. Chaque remède est écrit comme une recette de cuisine : étape 1, étape 2, étape 3. Avec des ingrédients que vous trouvez au supermarché ou dans votre jardin. Si vous savez faire une tisane, vous savez utiliser ce guide. Votre grand-mère n'avait pas de diplôme non plus." },
    { q: "Est-ce que ça remplace un médecin ?", a: "Non, et ce n'est pas le but. Mais répondez honnêtement : combien de fois avez-vous eu besoin d'aide un dimanche soir, pendant les vacances, ou quand le médecin ne prenait plus de patients ? Ce guide est votre filet de sécurité pour les 90% de situations où vous n'avez pas besoin d'un médecin — mais où vous ne savez pas quoi faire." },
    { q: "15,00 € pour un PDF, c'est pas cher. C'est sérieux ?", a: "C'est 0,06 € par remède. Moins cher qu'un café. Le prix est bas volontairement : notre objectif est que le maximum de familles françaises aient accès à ce savoir AVANT la prochaine crise. Ce prix augmentera. La question n'est pas « est-ce que ça vaut 15,00 € ? » — c'est « combien ça vaudra le jour où votre enfant est malade et que la pharmacie est fermée ? »" },
    { q: "Le paiement est-il sécurisé ?", a: "100%. Le paiement est traité par Hotmart, une plateforme internationale utilisée par plus de 30 millions de personnes. Cryptage SSL bancaire. Vos données ne sont jamais partagées. Vous pouvez payer par carte bancaire ou PayPal." },
    { q: "Et si je n'aime pas le guide ?", a: "Vous avez 30 jours. Pas 7. Pas 14. Trente jours complets pour tester, essayer les remèdes, et décider. Si vous n'êtes pas satisfait — pour n'importe quelle raison — un e-mail suffit. Remboursement intégral, sans discussion. On l'a fait plus de 200 fois et on n'a jamais refusé." },
    { q: "Pourquoi je devrais vous faire confiance ?", a: "Ne nous faites pas confiance. Faites confiance aux 2 400+ personnes qui utilisent déjà ce guide. Faites confiance à la garantie de 30 jours qui élimine tout risque pour vous. Et surtout, faites confiance à votre grand-mère — parce que ces remèdes, c'est elle qui les utilisait." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 bg-wood-dark">
      <div className="container max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gold">
            Questions fréquentes
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
