import ScrollReveal from '@/components/ScrollReveal';
import { Download, Clock, Mail, Smartphone, RefreshCw, Globe } from 'lucide-react';

const DigitalAdvantageSection = () => {
  const advantages = [
    { icon: Download, title: "30 secondes", desc: "Vous payez. Vous recevez. C'est sur votre téléphone avant même que vous ayez fini votre café." },
    { icon: Smartphone, title: "Dans votre poche, toujours", desc: "Votre enfant est malade à 3h du matin ? Ouvrez votre téléphone. Le remède est là. Pas besoin d'internet." },
    { icon: Mail, title: "Indestructible", desc: "Un livre brûle. Un cahier se perd. Votre PDF est sauvegardé dans votre boîte mail pour toujours. Vous pouvez le re-télécharger à l'infini." },
    { icon: RefreshCw, title: "Il s'améliore avec le temps", desc: "Nous ajoutons régulièrement de nouveaux remèdes vérifiés. Vous recevez les mises à jour gratuitement, à vie." },
    { icon: Globe, title: "Toute la famille protégée", desc: "Envoyez-le à vos enfants, vos parents, vos frères et sœurs. Un seul achat protège tout votre cercle familial." },
    { icon: Clock, title: "Zéro délai, zéro excuses", desc: "Pas de livraison. Pas de colis perdu. Pas de « il arrivera dans 5 jours ». Quand la prochaine crise frappe, vous êtes déjà prêt." },
  ];

  return (
    <section className="py-16 px-4 bg-wood">
      <div className="container max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Pourquoi un{' '}<span className="gold-text-gradient">PDF</span>{' '}et pas un livre ?
          </h2>
          <p className="text-center text-parchment mb-10 text-lg">
            Parce qu'en cas d'urgence, vous n'aurez pas le temps de chercher un livre sur une étagère. Vous aurez votre téléphone.
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
