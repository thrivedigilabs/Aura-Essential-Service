import { Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="section-padding container-narrow">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Aura Essential Service</h3>
            <p className="text-primary-foreground/70 mb-6">
              Your trusted HVAC partner in Bengaluru. Premium cooling solutions for homes and businesses.
            </p>
            <div className="text-accent font-semibold">
              CEO: Mohammed Samsuddin
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Commercial AC", href: "/commercial" },
                { name: "Residential AC", href: "/residential" },
                { name: "Products", href: "/products" },
                { name: "Service Areas", href: "/service-areas" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919538868337"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5 text-accent" />
                  <span>095388 68337</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Bengaluru, Karnataka</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Clock className="w-5 h-5 text-accent" />
                <span>Mon - Sat: 9AM - 7PM</span>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              {["Begur", "BTM Layout", "HSR Layout", "Whitefield", "Hongasandra", "Electronic City", "All Bangalore"].map(
                (area) => (
                  <li key={area} className="hover:text-accent transition-colors cursor-pointer">
                    {area}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Aura Essential Service. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              HVAC Contractor | Bengaluru, Karnataka, India
            </p>
          </div>
        </div>
      </div>

      {/* Spacer for mobile sticky CTA */}
      <div className="h-20 lg:hidden" />
    </footer>
  );
};

export default Footer;
