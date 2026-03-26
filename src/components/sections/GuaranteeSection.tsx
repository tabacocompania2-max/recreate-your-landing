import ScrollReveal from '@/components/ScrollReveal';
import { ShieldCheck } from 'lucide-react';

const GuaranteeSection = () => (
  <section className="py-12 px-4 bg-wood-dark">
    <div className="container max-w-2xl mx-auto text-center">
      <ScrollReveal>
        <ShieldCheck className="w-12 h-12 text-gold mx-auto mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gold">
          🔒 GARANTIE 30 JOURS SATISFAIT OU REMBOURSÉ
        </h2>
        <p className="text-parchment text-base leading-relaxed max-w-lg mx-auto mb-2">
          Testez pendant 30 jours. Si ça ne marche pas, un simple email et on vous rembourse intégralement.
        </p>
        <p className="text-parchment text-base leading-relaxed max-w-lg mx-auto mb-2">
          Pas de formulaire. Pas de justification. <strong className="text-gold">Pas de questions.</strong>
        </p>
        <p className="text-gold font-bold text-lg">
          C'est nous qui prenons le risque. Pas vous.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default GuaranteeSection;
