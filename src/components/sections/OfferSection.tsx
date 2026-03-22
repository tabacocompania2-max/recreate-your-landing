import ScrollReveal from '@/components/ScrollReveal';
import ebookCover from '@/assets/ebook-cover.jpg';
import { Check, Lock, Gift, ArrowRight } from 'lucide-react';

interface OfferSectionProps {
  hotmartUrl: string;
}

const OfferSection = ({ hotmartUrl }: OfferSectionProps) => (
  <section id="offer" className="py-16 px-4 bg-wood-dark">
    <div className="container max-w-3xl mx-auto">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gold">
          Obtenez votre exemplaire aujourd'hui
        </h2>
        <p className="text-center text-parchment mb-10 text-lg">
          Offre spéciale lancement — prix réduit pour une durée limitée
        </p>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <div className="bg-wood rounded-xl border-2 border-gold overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="gold-gradient p-4 text-center">
            <p className="font-bold text-lg" style={{ color: 'hsl(25 20% 8%)' }}>
              ✨ OFFRE SPÉCIALE LANCEMENT ✨
            </p>
          </div>

          {/* Body */}
          <div className="p-6 md:p-8">
            <div className="text-center mb-6">
              <img
                src={ebookCover}
                alt="Pharmacie de Grand-Mère"
                className="mx-auto w-48 rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gold mb-1">La Pharmacie de Grand-Mère</h3>
              <p className="text-parchment">250 remèdes naturels français + 4 bonus OFFERTS</p>
            </div>

            <div className="text-center mb-6">
              <p className="text-sm text-muted-foreground">Prix normal :</p>
              <p className="text-2xl price-slash">97,00 €</p>
              <p className="text-sm text-gold-light mt-2">Prix aujourd'hui :</p>
              <p className="text-5xl font-bold text-gold">29,90 €</p>
              <p className="text-sm text-muted-foreground mt-1">Paiement unique — pas d'abonnement</p>
            </div>

            <div className="section-divider mb-6" />

            <p className="text-gold font-bold mb-4 text-sm uppercase tracking-wide">VOUS RECEVEZ :</p>
            <ul className="space-y-3 mb-6">
              {[
                "📖 Pharmacie de Grand-Mère — 250 remèdes (valeur 97,00 €)",
                "🌿 BONUS 1 : Calendrier de Plantes (valeur 19,90 €)",
                "🗺️ BONUS 2 : Guide des Herbes Régionales (valeur 24,90 €)",
                "☀️ BONUS 3 : Recettes Saison par Saison (valeur 14,90 €)",
                "📝 BONUS 4 : Plantillas de Préparation (valeur 9,90 €)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-parchment text-sm">
                  <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-wood-dark rounded-lg p-4 mb-6 text-center">
              <p className="text-sm text-muted-foreground">Valeur totale : <span className="price-slash">166,60 €</span></p>
              <p className="text-xl font-bold text-gold mt-1">Vous payez seulement : 29,90 €</p>
              <p className="text-sm text-gold-light mt-1">Économisez 136,70 € — soit 82% de réduction</p>
            </div>

            <div className="text-center">
              <a
                href={hotmartUrl}
                className="cta-button inline-flex items-center gap-2 no-underline text-xl"
              >
                📥 OUI, JE VEUX MA PHARMACIE DE GRAND-MÈRE !
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="mt-4 text-xs text-muted-foreground flex items-center justify-center gap-1">
                <Lock className="w-3 h-3" />
                Paiement sécurisé via Hotmart — Livraison instantanée par e-mail
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default OfferSection;
