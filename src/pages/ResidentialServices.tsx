import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import LeadForm from "@/components/LeadForm";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Building,
  Clock,
  Shield,
  Phone,
  MessageCircle,
  Snowflake,
  Cpu,
  Wrench,
  Zap,
  Heart,
  Banknote
} from "lucide-react";

const residentialServices = [
  {
    icon: Snowflake,
    title: "Split AC Installation Bangalore",
    description: "Energy-efficient split AC systems perfect for individual rooms with quiet operation and professional installation.",
  },
  {
    icon: Zap,
    title: "Inverter AC Installation",
    description: "Premium inverter AC installations that reduce energy consumption by up to 50% and provide superior cooling.",
  },
  {
    icon: Cpu,
    title: "Smart Thermostat Integration",
    description: "IoT-enabled climate control for remote monitoring and automated temperature management from your smartphone.",
  },
  {
    icon: Wrench,
    title: "AC Service & Maintenance",
    description: "Regular AC maintenance visits including deep cleaning, gas check, and performance optimization.",
  },
  {
    icon: Clock,
    title: "Same-Day AC Repair",
    description: "Quick repair services including gas refilling, compressor repairs, and electrical fixes in Bangalore.",
  },
  {
    icon: Shield,
    title: "Annual Maintenance Contracts",
    description: "Comprehensive AMC packages with priority service, scheduled maintenance, and discounted repairs.",
  },
];

const suitableFor = [
  { icon: Building, title: "Apartments" },
  { icon: Home, title: "Villas" },
  { icon: Home, title: "Independent Houses" },
  { icon: Building, title: "Gated Communities" },
];

const trustPoints = [
  { icon: Heart, title: "Respect for Your Home", desc: "Clean, careful installations" },
  { icon: Clock, title: "Same-Day Service", desc: "Available for urgent needs" },
  { icon: Banknote, title: "Transparent Pricing", desc: "No hidden charges" },
];

const residentialSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Residential AC Services",
  "provider": {
    "@type": "HVACBusiness",
    "name": "Aura Essential Service",
    "telephone": "+91-95388-68337"
  },
  "areaServed": {
    "@type": "City",
    "name": "Bangalore"
  },
  "description": "Residential AC installation, repair, and maintenance services in Bangalore. Split AC, inverter AC, and smart thermostat installation for homes."
};

const ResidentialServices = () => {
  const whatsappNumber = "919538868337";

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi, I need residential AC service for my home.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+919538868337";
  };

  return (
    <main className="min-h-screen">
      <SEOHead
        title="Residential AC Services Bangalore | Home AC Installation & Repair"
        description="Expert home AC installation and repair in Bangalore. Split AC, inverter AC, smart thermostats. Same-day service in BTM, HSR Layout, Whitefield. Call 095388 68337."
        keywords="home AC installation Bangalore, residential AC service, split AC installation Bangalore, AC repair near me, inverter AC Bangalore, AC service Bangalore, home AC repair"
        canonicalPath="/residential"
        schema={residentialSchema}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-primary">
        <div className="section-padding container-narrow">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6">
              <Home className="w-4 h-4 text-accent" />
              <span className="text-primary-foreground text-sm font-medium">Residential AC Experts in Bangalore</span>
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Home AC Installation & Repair —{" "}
              <span className="text-accent">Same-Day Service in Bangalore</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Expert split AC and inverter AC installation, maintenance, and repairs for your home. 
              Same-day service available with transparent pricing and clean installations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" onClick={handleCall}>
                <Phone className="w-5 h-5" />
                Book Home Service
              </Button>
              <Button variant="heroOutline" size="xl" onClick={handleWhatsApp}>
                <MessageCircle className="w-5 h-5" />
                WhatsApp Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-8 bg-accent">
        <div className="container-narrow px-4">
          <div className="flex flex-wrap justify-center gap-8 text-accent-foreground">
            {trustPoints.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.title}</span>
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
              AC Services for Every Home in Bangalore
            </h2>
            <p className="text-muted-foreground text-lg">
              We serve all types of residential properties across Bengaluru with professional AC solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {suitableFor.map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center hover-lift"
              >
                <item.icon className="w-10 h-10 text-accent mx-auto mb-3" />
                <div className="font-semibold text-foreground">{item.title}</div>
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
              Home AC Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Residential AC Installation & Repair Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Complete home cooling solutions from AC installation to maintenance and emergency repairs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {residentialServices.map((service, index) => (
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

      {/* Why Choose Us for Home */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <div className="bg-primary rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-primary-foreground">
              {trustPoints.map((item, index) => (
                <div key={index} className="text-center">
                  <item.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-primary-foreground/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LeadForm source="residential" />
      <Footer />
      <FloatingCTA />
    </main>
  );
};

export default ResidentialServices;
