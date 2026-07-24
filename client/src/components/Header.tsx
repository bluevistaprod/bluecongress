import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const NAV = [
  { href: '/offres', label: 'Nos Offres' },
  { href: '/cas-clients', label: 'Cas Clients' },
  { href: '/faq', label: 'FAQ' },
  { href: '/a-propos', label: 'À Propos' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-[#0A2540]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container flex items-center justify-between h-16">
        <Link href="/" onClick={handleNavClick} className="flex items-center">
          <img src="/brand/pulse-logo-white.png" alt="Pulse Congress" className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              className="text-slate-200 hover:text-[#00E5C8] transition-colors text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/demander-une-demonstration"
            onClick={handleNavClick}
            className="bg-[#00E5C8] text-[#0A2540] px-5 py-2.5 rounded-xl font-semibold hover:shadow-[0_8px_24px_rgba(0,229,200,0.45)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Demander une démo
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0A2540]">
          <div className="container py-4 flex flex-col gap-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="text-slate-200 hover:text-[#00E5C8] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/demander-une-demonstration"
              onClick={handleNavClick}
              className="bg-[#00E5C8] text-[#0A2540] px-5 py-3 rounded-xl font-semibold text-center"
            >
              Demander une démo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
