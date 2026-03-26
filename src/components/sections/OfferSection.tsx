import ScrollReveal from '@/components/ScrollReveal';
import ebookCover from '@/assets/ebook-cover.webp';
import { Check, Lock, ArrowRight } from 'lucide-react';

interface OfferSectionProps {
  hotmartUrl: string;
}

const OfferSection = ({ hotmartUrl }: OfferSectionProps) => (
  <section id="offer" className="py-12 px-4 bg-wood">
    <div className="container max-w-2xl mx-auto">
      <ScrollReveal>
        <div className="bg-wood-dark rounded-xl border-2 border-gold overflow-hidden shadow-2xl">
          <div className="gold-gradient p-3 text-center">
            <p className="font-bold text-base" style={{ color: 'hsl(25 20% 8%)' }}>
              🎁 VOICI CE QUE VOUS RECEVEZ IMMÉDIATEMENT
            </p>
          </div>

          <div className="p-6">
            <div className="text-center mb-5">
              <img
                src={ebookCover}
                alt="Pharmacie de Grand-Mère"
                className="mx-auto w-40 rounded-lg shadow-lg mb-4"
                loading="lazy"
              />
            </div>

            <ul className="space-y-2.5 mb-6">
              {[
                '📖 La Pharmacie de Grand-Mère — 250 remèdes classés par problème',
                '🌿 BONUS : Calendrier de Récolte — cueillez chaque plante au bon moment',
                '🗺️ BONUS : Guide des Plantes de votre Région — 150 plantes gratuites',
                '☀️ BONUS : Recettes Saison par Saison — protégé 365 jours/an',
                '📝 BONUS : Fiches de Préparation Rapide — solution en 10 secondes',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-parchment text-sm">
                  <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-wood rounded-lg p-4 mb-5 text-center">
              <p className="text-sm text-muted-foreground">Valeur réelle : <span className="price-slash">67,00 €</span></p>
              <p className="text-3xl font-bold text-gold mt-1">Vous payez : 15,00 €</p>
              <p className="text-sm text-gold-light mt-1 font-semibold">= 0,06 € par remède</p>
              <p className="text-xs text-muted-foreground mt-1">(Moins cher qu'une boîte de Doliprane)</p>
            </div>

            <div className="flex items-center justify-center gap-2 text-gold-light text-sm font-semibold mb-4">
              <span>⏰ Code unique : <strong className="text-gold">X24BL44</strong></span>
              <span>—</span>
              <span>Cette offre expire BIENTÔT</span>
            </div>

            <div className="text-center">
              <a
                href="https://pay.hotmart.com/Y105032981Q?checkoutMode=10"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button-green inline-flex items-center gap-2 no-underline text-lg w-full justify-center"
              >
                🟢 OUI, JE VEUX MES 250 REMÈDES + 4 BONUS
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="mt-3 text-xs text-muted-foreground flex items-center justify-center gap-1">
                <Lock className="w-3 h-3" />
                Paiement 100% sécurisé | Accès en 30 secondes | Garantie 30 jours
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default OfferSection;
