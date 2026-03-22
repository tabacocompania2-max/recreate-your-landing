import ScrollReveal from '@/components/ScrollReveal';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    { q: "Comment vais-je recevoir mon guide ?", a: "Immédiatement après votre paiement, vous recevrez un e-mail avec le lien de téléchargement de tous vos PDF (guide principal + 4 bonus). Vous pourrez les lire sur votre téléphone, tablette ou ordinateur." },
    { q: "Est-ce que ce guide est adapté aux débutants ?", a: "Absolument ! Chaque remède est expliqué étape par étape, avec des ingrédients faciles à trouver en France. Aucune connaissance préalable n'est nécessaire." },
    { q: "Les remèdes remplacent-ils un avis médical ?", a: "Non, ce guide est un complément d'information basé sur la tradition française. Il ne remplace pas l'avis de votre médecin. Consultez toujours un professionnel de santé pour les problèmes graves." },
    { q: "Combien de temps ai-je accès au guide ?", a: "À vie ! Une fois téléchargé, le PDF est à vous pour toujours. Vous pouvez le relire, l'imprimer, et le partager avec votre famille." },
    { q: "Est-ce que le paiement est sécurisé ?", a: "Oui, à 100%. Le paiement est traité par Hotmart, une plateforme internationale de confiance utilisée par des millions de personnes. Vos données bancaires sont protégées par un cryptage SSL." },
    { q: "Puis-je me faire rembourser si je ne suis pas satisfait ?", a: "Bien sûr ! Vous bénéficiez de notre garantie de 30 jours. Si le guide ne vous convient pas, contactez-nous et vous serez remboursé intégralement, sans aucune question." },
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
