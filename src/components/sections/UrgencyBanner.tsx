import ScrollReveal from '@/components/ScrollReveal';

const UrgencyBanner = () => (
  <ScrollReveal>
    <div className="urgency-banner">
      <p className="text-sm font-bold text-warm-cream tracking-wide">
        ⚠️ 3 médicaments courants sont en rupture de stock en France CE MOIS-CI. Êtes-vous prêt ? Prix spécial : encore quelques heures.
      </p>
    </div>
  </ScrollReveal>
);

export default UrgencyBanner;
