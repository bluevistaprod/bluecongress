import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Bluevista</h3>
            <p className="text-muted-foreground text-sm">L'expertise audiovisuelle au service de vos événements depuis 2004.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Produits</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><Link href="/offres" className="hover:text-primary transition">Nos Offres</Link></li>
              <li><Link href="/cas-clients" className="hover:text-primary transition">Cas Clients</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><Link href="/a-propos" className="hover:text-primary transition">À Propos</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-muted-foreground text-sm">Email: contact@bluevista.fr</p>
            <p className="text-muted-foreground text-sm">Tél: +33 (0)X XX XX XX XX</p>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© 2004-2026 Bluevista Production. Tous droits réservés.</p>
          <div className="flex gap-6 mt-4 md:mt-0 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition">Mentions Légales</Link>
            <Link href="#" className="hover:text-primary transition">Politique de Confidentialité</Link>
            <Link href="#" className="hover:text-primary transition">CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
