const FooterSection = () => (
  <footer className="py-8 px-4 bg-wood-dark text-center">
    <div className="container max-w-3xl mx-auto">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} La Pharmacie de Grand-Mère. Tous droits réservés.
      </p>
      <p className="text-xs text-muted-foreground mt-2">
        Ce produit ne remplace pas un avis médical professionnel.
      </p>
    </div>
  </footer>
);

export default FooterSection;
