import { Link } from 'wouter';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A2540] text-white border-t border-white/10">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Marque */}
          <div>
            <img
              src="/brand/pulse-logo-white.png"
              alt="Pulse Congress"
              className="h-9 w-auto mb-5"
            />
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              La solution digitale clé en main pour les congrès médicaux et scientifiques.
            </p>
            {/* Signature Bluevista */}
            <div className="flex items-center gap-2.5">
              <span className="text-slate-500 text-xs">Un produit</span>
              <img src="/brand/bluevista-logo-white.png" alt="Bluevista" className="h-5 w-auto opacity-90" />
            </div>
          </div>

          {/* Produits */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wide text-slate-300">Produit</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><Link href="/offres" className="hover:text-[#00E5C8] transition-colors">Nos offres</Link></li>
              <li><Link href="/cas-clients" className="hover:text-[#00E5C8] transition-colors">Cas clients</Link></li>
              <li><Link href="/faq" className="hover:text-[#00E5C8] transition-colors">FAQ</Link></li>
              <li><Link href="/demander-une-demonstration" className="hover:text-[#00E5C8] transition-colors">Demander une démo</Link></li>
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wide text-slate-300">Entreprise</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><Link href="/a-propos" className="hover:text-[#00E5C8] transition-colors">À propos</Link></li>
              <li><Link href="/contact" className="hover:text-[#00E5C8] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wide text-slate-300">Contact</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>
                <a href="mailto:contact@bluevistaprod.com" className="flex items-center gap-2 hover:text-[#00E5C8] transition-colors">
                  <Mail size={15} className="text-[#00C4B4]" />
                  contact@bluevistaprod.com
                </a>
              </li>
              <li>
                <a href="tel:+33472345189" className="flex items-center gap-2 hover:text-[#00E5C8] transition-colors">
                  <Phone size={15} className="text-[#00C4B4]" />
                  +33 (0)4 72 34 51 89
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© 2004–2026 Bluevista Production. Tous droits réservés.</p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="#" className="hover:text-[#00E5C8] transition-colors">Mentions légales</Link>
            <Link href="#" className="hover:text-[#00E5C8] transition-colors">Confidentialité</Link>
            <Link href="#" className="hover:text-[#00E5C8] transition-colors">CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
