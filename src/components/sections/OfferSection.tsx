import ScrollReveal from '@/components/ScrollReveal';
import ebookCover from '@/assets/ebook-cover.jpg';
import { Check, Lock, ArrowRight } from 'lucide-react';

interface OfferSectionProps {
  hotmartUrl: string;
}

const OfferSection = ({ hotmartUrl }: OfferSectionProps) => (
  <section id="offer" className="py-16 px-4 bg-wood-dark">
    <div className="container max-w-3xl mx-auto">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gold">
          Tout ce savoir. Un seul paiement. Accès à vie.
        </h2>
        <p className="text-center text-parchment mb-10 text-lg">
          Dans 30 secondes, vous aurez entre les mains ce que des générations entières ont mis une vie à apprendre.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <div className="bg-wood rounded-xl border-2 border-gold overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="gold-gradient p-4 text-center">
            <p className="font-bold text-lg" style={{ color: 'hsl(25 20% 8%)' }}>
              ⚠️ PRIX DE LANCEMENT — AUGMENTATION IMMINENTE ⚠️
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
              <p className="text-parchment">250 remèdes vérifiés + 4 guides stratégiques OFFERTS</p>
            </div>

            <div className="text-center mb-6">
              <p className="text-sm text-muted-foreground">Valeur réelle de l'ensemble :</p>
              <p className="text-2xl price-slash">113,90 €</p>
              <p className="text-sm text-gold-light mt-2">Votre prix aujourd'hui :</p>
              <p className="text-5xl font-bold text-gold">15,00 €</p>
              <p className="text-sm text-muted-foreground mt-1">Un seul paiement. Pas d'abonnement. Pas de frais cachés. C'est à vous pour toujours.</p>
            </div>

            <div className="section-divider mb-6" />

            <p className="text-gold font-bold mb-4 text-sm uppercase tracking-wide">VOUS RECEVEZ IMMÉDIATEMENT :</p>
            <ul className="space-y-3 mb-6">
              {[
                "📖 La Pharmacie de Grand-Mère — 250 remèdes classés par problème, prêts à utiliser (valeur 67 €)",
                "🌿 BONUS : Calendrier de Récolte — cueillez chaque plante au bon moment pour un effet maximum (valeur 19,90 €)",
                "🗺️ BONUS : Guide Régional — 150 plantes médicinales gratuites autour de chez vous (valeur 14,90 €)",
                "☀️ BONUS : Recettes par Saison — protégé contre les maladies saisonnières, 365 jours/an (valeur 7,90 €)",
                "📝 BONUS : Fiches d'Urgence — trouvez le bon remède en 10 secondes quand ça compte (valeur 4,20 €)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-parchment text-sm">
                  <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-wood-dark rounded-lg p-4 mb-6 text-center">
              <p className="text-sm text-muted-foreground">Valeur totale : <span className="price-slash">166,60 €</span></p>
              <p className="text-xl font-bold text-gold mt-1">Vous payez : 29,90 € — soit 0,12 € par remède</p>
              <p className="text-sm text-gold-light mt-1">Moins cher qu'une boîte de Doliprane. Pour 250 solutions.</p>
            </div>

            <div className="text-center">
              <a
                href={hotmartUrl}
                className="cta-button inline-flex items-center gap-2 no-underline text-xl"
              >
                📥 OUI, JE VEUX MES 250 REMÈDES
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="mt-4 text-xs text-muted-foreground flex items-center justify-center gap-1">
                <Lock className="w-3 h-3" />
                Paiement 100% sécurisé — Accès en 30 secondes — Garantie 30 jours remboursé
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default OfferSection;
