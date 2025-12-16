import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceAreas from "@/components/ServiceAreas";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SEOHead from "@/components/SEOHead";

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "name": "Aura Essential Service",
  "description": "Premium HVAC services in Bangalore - AC installation, VRF/VRV systems, maintenance & 24/7 emergency repairs for residential and commercial spaces.",
  "telephone": "+91-95388-68337",
  "url": "https://auraessentialservice.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "12.9716",
    "longitude": "77.5946"
  },
  "areaServed": [
    "Begur", "BTM Layout", "HSR Layout", "Whitefield", "Electronic City",
    "Koramangala", "Indiranagar", "Marathahalli", "JP Nagar", "Jayanagar"
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00",
    "closes": "19:00"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "HVAC Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AC Installation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AC Repair" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "VRF/VRV Installation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AC Maintenance (AMC)" } }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500"
  }
};

const Index = () => {
  return (
    <main className="min-h-screen">
      <SEOHead
        title="HVAC Services Bangalore | AC Installation & Repair | Aura Essential Service"
        description="Expert HVAC contractor in Bangalore. AC installation, VRF/VRV systems, maintenance & 24/7 emergency repairs. Serving BTM Layout, HSR, Whitefield, Electronic City. Call 095388 68337."
        keywords="HVAC services Bangalore, AC installation Bangalore, AC repair Bangalore, VRF VRV installation, commercial AC Bangalore, residential AC service, AC maintenance Bangalore, HVAC contractor Bengaluru"
        canonicalPath="/"
        schema={homeSchema}
      />
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <ServiceAreas />
      <LeadForm source="homepage" />
      <Footer />
      <FloatingCTA />
    </main>
  );
};

export default Index;
