import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import LeadForm from "@/components/LeadForm";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Factory, 
  Store, 
  UtensilsCrossed, 
  Warehouse,
  Server,
  Clock,
  Shield,
  CheckCircle,
  Phone,
  MessageCircle,
  Wind,
  Wrench,
  Zap,
  Thermometer
} from "lucide-react";

const commercialServices = [
  {
    icon: Wind,
    title: "VRF & VRV Systems Installation",
    description: "Variable refrigerant flow systems for large commercial spaces with zone control and maximum energy efficiency. Best for offices, malls, and IT parks.",
  },
  {
    icon: Building2,
    title: "Centralized HVAC Solutions",
    description: "Complete central air conditioning systems for office buildings, malls, and large commercial complexes in Bangalore.",
  },
  {
    icon: Thermometer,
    title: "Packaged AC Units",
    description: "High-capacity packaged air conditioning units suitable for industrial and commercial applications in Bengaluru.",
  },
  {
    icon: Wrench,
    title: "Ductable AC Systems",
    description: "Concealed ducted air conditioning for seamless integration with commercial interiors. Professional installation in Bangalore.",
  },
  {
    icon: Zap,
    title: "Commercial AC Maintenance (AMC)",
    description: "Comprehensive annual maintenance contracts with scheduled visits and priority emergency support for businesses.",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Repairs",
    description: "Round-the-clock emergency AC repair services to minimize business downtime and keep operations running.",
  },
];

const suitableFor = [
  { icon: Building2, title: "Offices & IT Parks" },
  { icon: Store, title: "Retail Spaces" },
  { icon: UtensilsCrossed, title: "Restaurants & Hotels" },
  { icon: Warehouse, title: "Warehouses" },
  { icon: Factory, title: "Industrial Units" },
  { icon: Server, title: "Server Rooms" },
];

const commercialSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Commercial HVAC Services",
  "provider": {
    "@type": "HVACBusiness",
    "name": "Aura Essential Service",
    "telephone": "+91-95388-68337"
  },
  "areaServed": {
    "@type": "City",
    "name": "Bangalore"
  },
  "description": "Commercial AC installation, VRF/VRV systems, ductable AC, and maintenance services for offices, retail spaces, and industrial units in Bangalore."
};

const CommercialServices = () => {
  const whatsappNumber = "919538868337";

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi, I'm interested in commercial HVAC services for my business.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+919538868337";
  };

  return (
    <main className="min-h-screen">
      <SEOHead
        title="Commercial AC Services Bangalore | VRF VRV Installation | Office HVAC"
        description="Expert commercial HVAC services in Bangalore. VRF/VRV systems, centralized AC, ductable units for offices, IT parks, restaurants, hotels. Minimal downtime. Call 095388 68337."
        keywords="commercial AC Bangalore, VRF installation Bangalore, VRV system Bangalore, office AC installation, commercial HVAC contractor, industrial AC Bangalore, ductable AC Bangalore"
        canonicalPath="/commercial"
        schema={commercialSchema}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-primary">
        <div className="section-padding container-narrow">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6">
              <Building2 className="w-4 h-4 text-accent" />
              <span className="text-primary-foreground text-sm font-medium">Commercial HVAC Specialists in Bangalore</span>
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Commercial AC Services &{" "}
              <span className="text-accent">VRF/VRV Installation in Bangalore</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Expert HVAC solutions for offices, IT parks, retail spaces, restaurants, and industrial units in Bengaluru. 
              Minimal business downtime with planned execution and clear timelines.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" onClick={handleCall}>
                <Phone className="w-5 h-5" />
                Schedule Site Visit
              </Button>
              <Button variant="heroOutline" size="xl" onClick={handleWhatsApp}>
                <MessageCircle className="w-5 h-5" />
                WhatsApp for Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-8 bg-accent">
        <div className="container-narrow px-4">
          <div className="flex flex-wrap justify-center gap-8 text-accent-foreground">
            {[
              { icon: Clock, text: "Minimal Business Downtime" },
              { icon: Shield, text: "Planned Execution" },
              { icon: CheckCircle, text: "Dedicated Commercial Team" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suitable For */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Commercial AC Solutions for All Business Types
            </h2>
            <p className="text-muted-foreground text-lg">
              We serve businesses of all sizes across Bangalore with professional HVAC installation and maintenance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {suitableFor.map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center hover-lift"
              >
                <item.icon className="w-10 h-10 text-accent mx-auto mb-3" />
                <div className="font-semibold text-foreground text-sm">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Our Commercial HVAC Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional HVAC Solutions for Bangalore Businesses
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive commercial HVAC services designed for offices, retail, hospitality, and industrial spaces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commercialServices.map((service, index) => (
              <article
                key={index}
                className="glass-card p-6 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <LeadForm source="commercial" />
      <Footer />
      <FloatingCTA />
    </main>
  );
};

export default CommercialServices;
