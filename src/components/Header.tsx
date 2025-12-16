import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const phoneNumber = "09538868337";
  const location = useLocation();

  const handleCall = () => {
    window.location.href = `tel:+${phoneNumber}`;
  };

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-narrow px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 max-w-[75%]">
            <div className="w-10 h-10 shrink-0 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>

            <div className="flex flex-col leading-tight">
              <span className="font-bold text-base sm:text-lg font-['DM Sans'] whitespace-nowrap">
                AURA ESSENTIAL SERVICE
              </span>
              <span className="hidden sm:block text-xs text-muted-foreground -mt-0.5">
                HVAC Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">

            <Link
              to="/"
              className={`font-medium ${
                isActive("/") ? "text-accent" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 font-medium text-muted-foreground hover:text-foreground">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>

              <div className="absolute left-0 top-full mt-2 w-56 rounded-xl bg-background border border-border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link
                  to="/residential"
                  className="block px-4 py-3 hover:bg-muted text-sm"
                >
                  Residential AC Services
                </Link>
                <Link
                  to="/commercial"
                  className="block px-4 py-3 hover:bg-muted text-sm"
                >
                  Commercial AC Services
                </Link>
              </div>
            </div>

            <Link
              to="/products"
              className={`font-medium ${
                isActive("/products") ? "text-accent" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Products
            </Link>

            <Link
              to="/service-areas"
              className={`font-medium ${
                isActive("/service-areas") ? "text-accent" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Service Areas
            </Link>

            <Link
              to="/contact"
              className={`font-medium ${
                isActive("/contact") ? "text-accent" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:+${phoneNumber}`}
              className="flex items-center gap-2 font-semibold"
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
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <nav className="container-narrow px-4 py-4 flex flex-col gap-2">

            <Link to="/" className="py-3 px-2 font-medium">
              Home
            </Link>

            {/* Mobile Services Accordion */}
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center justify-between py-3 px-2 font-medium"
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isServicesOpen && (
              <div className="ml-4 flex flex-col border-l border-border pl-4">
                <Link to="/residential" className="py-2 text-sm">
                  Residential AC Services
                </Link>
                <Link to="/commercial" className="py-2 text-sm">
                  Commercial AC Services
                </Link>
              </div>
            )}

            <Link to="/products" className="py-3 px-2 font-medium">
              Products
            </Link>

            <Link to="/service-areas" className="py-3 px-2 font-medium">
              Service Areas
            </Link>

            <Link to="/contact" className="py-3 px-2 font-medium">
              Contact
            </Link>

            <Button variant="accent" className="mt-3" onClick={handleCall}>
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
