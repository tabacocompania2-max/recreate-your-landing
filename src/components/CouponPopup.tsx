import { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';
import ebookCover from '@/assets/ebook-cover.jpg';

const COUPON_CODE = 'X24BL44';
const COUNTDOWN_SECONDS = 7 * 60;

const CouponPopup = () => {
  const [showModal, setShowModal] = useState(false);
  const [showWidget, setShowWidget] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(COUNTDOWN_SECONDS);

  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showWidget) return;
    if (secondsLeft <= 0) return;
    const interval = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearInterval(interval);
  }, [showWidget, secondsLeft]);

  const applyCoupon = useCallback(() => {
    setShowModal(false);
    setShowWidget(true);
  }, []);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  const today = new Date();
  const dateStr = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`;

  return (
    <>
      {/* Modal overlay */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
        >
          <div
            className="bg-card rounded-xl p-6 max-w-sm w-full relative border-2 border-gold shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="text-center">
              <img src={ebookCover} alt="Pharmacie de Grand-Mère" className="w-24 mx-auto rounded-lg mb-4 shadow-md" />

              <h3 className="text-sm text-parchment mb-1">Seulement aujourd'hui ({dateStr}) —</h3>
              <h2 className="text-xl font-bold text-gold mb-3">Vous avez droit à une réduction de 78%</h2>
              <p className="text-parchment text-sm mb-4">
                Cliquez sur le bouton pour obtenir la réduction et les cadeaux gratuits.
              </p>

              <p className="text-xs text-muted-foreground mb-4">
                Le code coupon <strong className="text-gold">{COUPON_CODE}</strong> ne peut être utilisé qu'aujourd'hui.
              </p>

              <button
                onClick={applyCoupon}
                className="cta-button w-full text-base"
              >
                Appliquer le Coupon
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating widget */}
      {showWidget && secondsLeft > 0 && (
        <div className="fixed bottom-4 right-4 z-40 bg-card rounded-xl shadow-2xl border border-gold/30 p-4 max-w-xs w-full">
          <button
            onClick={() => setShowWidget(false)}
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Fermer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex gap-3">
            <img src={ebookCover} alt="Pharmacie de Grand-Mère" className="w-14 h-auto rounded shadow-sm flex-shrink-0" />
            <div className="text-xs">
              <p className="text-gold font-bold mb-1">Votre réduction est activée ! Obtenez "La Pharmacie de Grand-Mère" + 4 cadeaux offerts dès maintenant</p>
              <p className="text-parchment text-[11px]">La Pharmacie de Grand-Mère + les 4 cadeaux gratuits</p>
            </div>
          </div>

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-baseline gap-2">
              <span className="text-muted-foreground line-through text-sm">€172</span>
              <span className="text-gold font-bold text-lg">€36</span>
            </div>
          </div>

          <a
            href="#offer"
            onClick={() => setShowWidget(false)}
            className="block mt-3 w-full gold-gradient text-center font-bold text-sm py-2.5 rounded-lg transition-all duration-200 no-underline"
            style={{ color: 'hsl(25 20% 8%)' }}
          >
            Ajouter au panier
          </a>

          <p className="text-center text-xs text-destructive font-bold mt-2">
            {formatTime(secondsLeft)}
          </p>
        </div>
      )}
    </>
  );
};

export default CouponPopup;
