import ScrollReveal from '@/components/ScrollReveal';
import { Download, Clock, Mail, Smartphone, RefreshCw, Globe } from 'lucide-react';

const DigitalAdvantageSection = () => {
  const advantages = [
    { icon: Download, title: "Accès immédiat", desc: "Recevez votre guide par e-mail dès la confirmation de paiement — pas d'attente" },
    { icon: Smartphone, title: "Lisez partout", desc: "Sur votre téléphone, tablette ou ordinateur — chez vous ou en déplacement" },
    { icon: Mail, title: "Toujours accessible", desc: "Votre guide reste dans votre boîte mail pour toujours — impossible de le perdre" },
    { icon: RefreshCw, title: "Mises à jour gratuites", desc: "Recevez les futures versions mises à jour directement dans votre boîte mail" },
    { icon: Globe, title: "Partagez en famille", desc: "Envoyez facilement le guide à vos proches pour qu'ils en profitent aussi" },
    { icon: Clock, title: "Utilisable de suite", desc: "Pas besoin de commander, pas de frais de livraison — vous l'avez en 30 secondes" },
  ];

  return (
    <section className="py-16 px-4 bg-wood">
      <div className="container max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Pourquoi le format{' '}<span className="gold-text-gradient">numérique</span>{' '}est idéal
          </h2>
          <p className="text-center text-parchment mb-10 text-lg">
            Plus pratique qu'un livre physique — et vous l'avez en 30 secondes
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {advantages.map((item, i) => (
            <ScrollReveal key={i} delay={100 + i * 80}>
              <div className="p-5 bg-wood-dark rounded-lg border border-gold/10">
                <div className="flex items-center gap-3 mb-2">
                  <item.icon className="w-6 h-6 text-gold flex-shrink-0" />
                  <h3 className="text-lg font-bold text-gold">{item.title}</h3>
                </div>
                <p className="text-parchment text-sm">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalAdvantageSection;
