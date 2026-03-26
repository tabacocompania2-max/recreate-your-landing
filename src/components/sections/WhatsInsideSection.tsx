import ScrollReveal from '@/components/ScrollReveal';

const WhatsInsideSection = () => {
  const categories = [
    { emoji: '❤️', title: 'Cœur & circulation', count: '42 remèdes' },
    { emoji: '🍽️', title: 'Digestion & intoxications', count: '38 remèdes' },
    { emoji: '🫁', title: 'Toux, rhume & bronchite', count: '35 remèdes' },
    { emoji: '🛡️', title: 'Immunité & prévention', count: '28 remèdes' },
    { emoji: '🔥', title: 'Douleurs & inflammations', count: '30 remèdes' },
    { emoji: '🩹', title: 'Peau, brûlures & infections', count: '25 remèdes' },
    { emoji: '😴', title: 'Insomnie, stress & anxiété', count: '22 remèdes' },
    { emoji: '🌸', title: 'Santé intime', count: '30 remèdes' },
  ];

  return (
    <section className="py-12 px-4 bg-wood">
      <div className="container max-w-2xl mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gold">
            250 REMÈDES VÉRIFIÉS — TROUVEZ LA SOLUTION EN 30 SECONDES
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          {categories.map((item, i) => (
            <ScrollReveal key={i} delay={80 + i * 50}>
              <div className="p-3 bg-wood-dark rounded-lg border border-gold/20 text-center">
                <span className="text-2xl">{item.emoji}</span>
                <p className="text-gold font-bold text-sm mt-1">{item.title}</p>
                <p className="text-gold-light text-xs">{item.count}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <p className="text-center text-parchment text-sm">
            Classés par problème. Prêts à utiliser. Pas de jargon médical.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhatsInsideSection;
