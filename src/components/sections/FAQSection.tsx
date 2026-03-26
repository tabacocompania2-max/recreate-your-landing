import ScrollReveal from '@/components/ScrollReveal';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      q: "Je reçois quoi exactement, et quand ?",
      a: "30 secondes après votre paiement, vous recevez un e-mail avec le guide principal (250 remèdes) + les 4 bonus en PDF. Lisez-le sur téléphone, tablette ou ordinateur. C'est à vous pour toujours.",
    },
    {
      q: "Ce guide remplace-t-il un médecin ?",
      a: "Non. Mais combien de fois avez-vous eu besoin d'aide un dimanche soir, quand le médecin ne répond pas ? Ce guide est votre filet de sécurité pour les situations où vous ne savez pas quoi faire.",
    },
    {
      q: "Et si je n'aime pas le guide ?",
      a: "Vous avez 30 jours complets pour tester. Si vous n'êtes pas satisfait — pour n'importe quelle raison — un e-mail suffit. Remboursement intégral, sans discussion.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 px-4 bg-wood">
      <div className="container max-w-2xl mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gold">
            Questions fréquentes
          </h2>
        </ScrollReveal>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={100 + i * 60}>
              <div className="bg-wood-dark rounded-lg overflow-hidden border border-gold/10">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left cursor-pointer transition-colors hover:bg-wood-light"
                >
                  <span className="text-gold font-semibold pr-4 text-sm">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`} />
                </button>
                {openIndex === i && (
                  <div className="px-4 pb-4 text-parchment text-sm leading-relaxed">
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
