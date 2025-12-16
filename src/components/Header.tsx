import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = "09538868337";
  const location = useLocation();

  const handleCall = () => {
    window.location.href = `tel:+${phoneNumber}`;
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Commercial AC", href: "/commercial" },
    { name: "Residential AC", href: "/residential" },
    { name: "Products", href: "/products" },
    { name: "Service Areas", href: "/service-areas" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-narrow px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo + Brand */}
          <Link to="/" className="flex items-center gap-2 max-w-[75%]">
            <div className="w-10 h-10 shrink-0 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">
                A
              </span>
            </div>

            <div className="flex flex-col leading-tight">
              <span
                className="
                  font-bold
                  text-foreground
                  text-base
                  sm:text-lg
                  font-['DM Sans']
                  whitespace-nowrap
                "
              >
                AURA ESSENTIAL SERVICE
              </span>

              <span className="hidden sm:block text-xs text-muted-foreground -mt-0.5">
                HVAC Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:+${phoneNumber}`}
              className="flex items-center gap-2 text-foreground font-semibold"
            >
              <Phone className="w-4 h-4 text-accent" />
              095388 68337
            </a>
            <Button variant="accent" onClick={handleCall}>
              Get Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <nav className="container-narrow px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-medium py-3 px-2 rounded-lg transition-colors ${
                  isActive(link.href)
                    ? "text-accent bg-accent/10"
                    : "text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <Button variant="accent" className="mt-2" onClick={handleCall}>
              <Phone className="w-4 h-4" />
              Call Now: 095388 68337
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
