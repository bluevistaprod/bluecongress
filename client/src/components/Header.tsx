import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <nav className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/6nnyUPh6Mg74pJbVKFbCeZ/logo_congress_pulse-Gg5XyFMEtRreaPb6Yrp3Jb.png" 
            alt="Pulse Logo" 
            className="h-10 w-10"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-foreground hover:text-primary transition">Accueil</Link>
          <Link href="/offres" className="text-foreground hover:text-primary transition">Nos Offres</Link>
          <Link href="/cas-clients" className="text-foreground hover:text-primary transition">Cas Clients</Link>
          <Link href="/faq" className="text-foreground hover:text-primary transition">FAQ</Link>
          <Link href="/a-propos" className="text-foreground hover:text-primary transition">À Propos</Link>
          <Link href="/contact" className="btn-primary">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border">
          <div className="container py-4 flex flex-col gap-4">
            <Link href="/" className="text-foreground hover:text-primary transition">Accueil</Link>
            <Link href="/offres" className="text-foreground hover:text-primary transition">Nos Offres</Link>
            <Link href="/cas-clients" className="text-foreground hover:text-primary transition">Cas Clients</Link>
            <Link href="/faq" className="text-foreground hover:text-primary transition">FAQ</Link>
            <Link href="/a-propos" className="text-foreground hover:text-primary transition">À Propos</Link>
            <Link href="/contact" className="btn-primary w-full text-center">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
