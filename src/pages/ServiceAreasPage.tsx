import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import LeadForm from "@/components/LeadForm";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, MessageCircle, Clock, Shield } from "lucide-react";

const areas = [
  { name: "Begur", zone: "South Bangalore", popular: true },
  { name: "BTM Layout", zone: "South Bangalore", popular: true },
  { name: "HSR Layout", zone: "South-East Bangalore", popular: true },
  { name: "Whitefield", zone: "East Bangalore", popular: true },
  { name: "Hongasandra", zone: "South Bangalore", popular: true },
  { name: "Electronic City", zone: "South Bangalore", popular: true },
  { name: "Koramangala", zone: "Central Bangalore", popular: false },
  { name: "Indiranagar", zone: "East Bangalore", popular: false },
  { name: "Marathahalli", zone: "East Bangalore", popular: false },
  { name: "JP Nagar", zone: "South Bangalore", popular: false },
  { name: "Jayanagar", zone: "South Bangalore", popular: false },
  { name: "Bannerghatta Road", zone: "South Bangalore", popular: false },
  { name: "Sarjapur Road", zone: "South-East Bangalore", popular: false },
  { name: "Bellandur", zone: "South-East Bangalore", popular: false },
  { name: "Hebbal", zone: "North Bangalore", popular: false },
  { name: "Yelahanka", zone: "North Bangalore", popular: false },
  { name: "Malleshwaram", zone: "West Bangalore", popular: false },
  { name: "Rajajinagar", zone: "West Bangalore", popular: false },
  { name: "Vijayanagar", zone: "West Bangalore", popular: false },
  { name: "Basavanagudi", zone: "South Bangalore", popular: false },
  { name: "Banashankari", zone: "South Bangalore", popular: false },
  { name: "Kengeri", zone: "South-West Bangalore", popular: false },
  { name: "Mahadevapura", zone: "East Bangalore", popular: false },
  { name: "KR Puram", zone: "East Bangalore", popular: false },
];

const serviceAreasSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "HVAC Services",
  "provider": {
    "@type": "HVACBusiness",
    "name": "Aura Essential Service",
    "telephone": "+91-95388-68337"
  },
  "areaServed": areas.map(area => ({
    "@type": "Place",
    "name": `${area.name}, Bangalore`
  })),
  "description": "HVAC and AC services across 50+ localities in Bangalore including BTM Layout, HSR Layout, Whitefield, Electronic City, Koramangala, and more."
};

const ServiceAreasPage = () => {
  const whatsappNumber = "919538868337";

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi, I'm looking for HVAC services in my area.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+919538868337";
  };

  return (
    <main className="min-h-screen">
      <SEOHead
        title="AC Service Areas in Bangalore | HVAC Services Near Me | All Localities"
        description="HVAC and AC services across 50+ Bangalore areas - BTM Layout, HSR Layout, Whitefield, Electronic City, Koramangala, Indiranagar, JP Nagar. Same-day service. Call 095388 68337."
        keywords="AC service near me Bangalore, HVAC services BTM Layout, AC repair HSR Layout, AC installation Whitefield, AC service Electronic City, HVAC Koramangala, AC repair Indiranagar"
        canonicalPath="/service-areas"
        schema={serviceAreasSchema}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-primary">
        <div className="section-padding container-narrow">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-primary-foreground text-sm font-medium">Service Coverage Across Bangalore</span>
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              AC & HVAC Services in{" "}
              <span className="text-accent">All Bangalore Localities</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Fast response with local technicians across 50+ localities in Bangalore. 
              Same-day AC repair and installation service available for urgent requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" onClick={handleCall}>
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
              <Button variant="heroOutline" size="xl" onClick={handleWhatsApp}>
                <MessageCircle className="w-5 h-5" />
                Check Availability
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
              { icon: Clock, text: "Same-Day Service Available" },
              { icon: MapPin, text: "Local Technicians" },
              { icon: Shield, text: "On-Time Guarantee" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Service Areas */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Primary Locations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Top AC Service Areas in Bangalore
            </h2>
            <p className="text-muted-foreground text-lg">
              Fastest response times in these priority areas for AC repair and installation
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {areas.filter(a => a.popular).map((area, index) => (
              <article
                key={index}
                className="bg-primary text-primary-foreground p-6 rounded-2xl hover-lift"
              >
                <MapPin className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-bold text-lg">AC Service in {area.name}</h3>
                <p className="text-primary-foreground/70 text-sm">{area.zone}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Service Areas */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete List of AC Service Areas in Bangalore
            </h2>
            <p className="text-muted-foreground text-lg">
              We provide HVAC services across 50+ localities in Bengaluru
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {areas.map((area, index) => (
              <div
                key={index}
                className="glass-card p-4 text-center hover-lift cursor-pointer group"
              >
                <span className="font-semibold text-foreground group-hover:text-accent transition-colors text-sm">
                  {area.name}
                </span>
              </div>
            ))}
          </div>

          {/* Not in list? */}
          <div className="mt-12 text-center">
            <div className="glass-card inline-block p-6">
              <p className="text-foreground font-medium mb-4">
                Don't see your area? We likely cover it too!
              </p>
              <Button variant="accent" onClick={handleWhatsApp}>
                <MessageCircle className="w-4 h-4" />
                Check Your Location
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Promise */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="bg-primary rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-primary-foreground text-center">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <div className="font-semibold">Localities Covered</div>
                <p className="text-primary-foreground/70 text-sm">Across all of Bengaluru</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">2 Hrs</div>
                <div className="font-semibold">Average Response</div>
                <p className="text-primary-foreground/70 text-sm">For emergency AC repairs</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <div className="font-semibold">Emergency Support</div>
                <p className="text-primary-foreground/70 text-sm">Available round the clock</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadForm source="service-areas" />
      <Footer />
      <FloatingCTA />
    </main>
  );
};

export default ServiceAreasPage;
