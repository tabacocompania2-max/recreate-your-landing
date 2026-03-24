import ScrollReveal from '@/components/ScrollReveal';
import { Download, Clock, Mail, Smartphone, RefreshCw, Globe } from 'lucide-react';

const DigitalAdvantageSection = () => {
  const advantages = [
    { icon: Download, title: "Accès immédiat", desc: "Recevez votre guide en 30 secondes — pas besoin d'attendre. Chaque minute compte." },
    { icon: Smartphone, title: "Toujours sur vous", desc: "Sur votre téléphone, tablette ou imprimé. Accessible même sans connexion internet." },
    { icon: Mail, title: "Impossible à perdre", desc: "Stocké dans votre boîte mail pour toujours. Contrairement aux livres, il ne brûle pas, ne s'abîme pas." },
    { icon: RefreshCw, title: "Mises à jour gratuites", desc: "De nouveaux remèdes vérifiés sont ajoutés régulièrement — vous les recevez automatiquement." },
    { icon: Globe, title: "Protégez toute la famille", desc: "Partagez-le avec vos enfants, vos parents, vos proches. Que chacun sache se débrouiller." },
    { icon: Clock, title: "Prêt en cas d'urgence", desc: "Pas de commande, pas de livraison, pas d'attente. Quand la crise arrive, vous êtes déjà prêt." },
  ];

  return (
    <section className="py-16 px-4 bg-wood">
      <div className="container max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Pourquoi le format{' '}<span className="gold-text-gradient">numérique</span>{' '}peut vous sauver
          </h2>
          <p className="text-center text-parchment mb-10 text-lg">
            Un guide physique peut être détruit. Un PDF est éternel — et accessible en une seconde, partout.
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
