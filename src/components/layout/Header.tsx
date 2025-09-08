import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/creation-graphique", label: "Graphisme" },
    { href: "/enseignes", label: "Enseignes" },
    { href: "/signaletique", label: "Signalétique" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/avis-clients", label: "Avis" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const isActiveLink = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-6 h-6 bg-accent/20 transform rotate-45 translate-x-3 -translate-y-3"></div>
              <span className="text-primary-foreground font-lemon font-bold text-xl relative z-10">F</span>
            </div>
            <div>
              <h1 className="font-lemon font-bold text-2xl text-foreground">Foulgraph</h1>
              <p className="text-sm text-muted-foreground">Signalétique Bretagne</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-smooth ${
                  isActiveLink(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>02 96 XX XX XX</span>
            </div>
            <Button variant="hero" size="lg">
              Devis Gratuit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-smooth ${
                    isActiveLink(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <div className="flex items-center space-x-2 px-4 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>02 96 XX XX XX</span>
                </div>
                <div className="px-4">
                  <Button variant="hero" size="lg" className="w-full">
                    Devis Gratuit
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;