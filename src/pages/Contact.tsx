import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import LeadForm from "@/components/LeadForm";
import SEOHead from "@/components/SEOHead";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "mainEntity": {
    "@type": "HVACBusiness",
    "name": "Aura Essential Service",
    "telephone": "+91-95388-68337",
    "url": "https://auraessential.com/contact",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-95388-68337",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi", "Kannada"]
    }
  }
};

const Contact = () => {
  const phoneNumber = "09538868337";
  const whatsappNumber = "919538868337";

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi, I need HVAC services. Please contact me.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handleCall = () => {
    window.location.href = `tel:+${phoneNumber}`;
  };

  return (
    <main className="min-h-screen">
      <SEOHead
        title="Contact HVAC Experts Bangalore | Call 095388 68337 | Aura Essential"
        description="Contact Aura Essential Service for AC installation, repair & maintenance in Bangalore. Call 095388 68337 or WhatsApp. 24/7 emergency support. Fast response guaranteed."
        keywords="HVAC contact Bangalore, AC service phone number, AC repair contact, HVAC company Bangalore contact, emergency AC repair Bangalore"
        canonicalPath="/contact"
        schema={contactSchema}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-primary">
        <div className="section-padding container-narrow">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6">
              <Phone className="w-4 h-4 text-accent" />
              <span className="text-primary-foreground text-sm font-medium">Get in Touch</span>
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Contact{" "}
              <span className="text-accent">Aura Essential Service</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Have questions about HVAC services in Bangalore? Need an urgent AC repair? 
              Reach out to us — we respond within 30 minutes during business hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" onClick={handleCall}>
                <Phone className="w-5 h-5" />
                Call: 095388 68337
              </Button>
              <Button variant="heroOutline" size="xl" onClick={handleWhatsApp}>
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Phone */}
            <article className="glass-card p-8 text-center hover-lift">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-accent" />
              </div>
              <h2 className="font-bold text-xl text-foreground mb-2">Call Us</h2>
              <p className="text-muted-foreground mb-4">Speak directly with our HVAC team</p>
              <a href="tel:+919538868337" className="text-accent font-semibold text-lg hover:underline">
                095388 68337
              </a>
            </article>

            {/* WhatsApp */}
            <article className="glass-card p-8 text-center hover-lift">
              <div className="w-16 h-16 rounded-2xl bg-[hsl(142,70%,45%)]/10 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-[hsl(142,70%,45%)]" />
              </div>
              <h2 className="font-bold text-xl text-foreground mb-2">WhatsApp</h2>
              <p className="text-muted-foreground mb-4">Chat with AC experts</p>
              <button onClick={handleWhatsApp} className="text-[hsl(142,70%,45%)] font-semibold text-lg hover:underline">
                Start Chat
              </button>
            </article>

            {/* Location */}
            <article className="glass-card p-8 text-center hover-lift">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-bold text-xl text-foreground mb-2">Service Area</h2>
              <p className="text-muted-foreground mb-4">We cover all of Bengaluru</p>
              <span className="text-primary font-semibold text-lg">
                Karnataka, India
              </span>
            </article>
          </div>

          {/* Business Hours */}
          <div className="bg-secondary rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold text-foreground">Business Hours</h2>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span className="font-semibold text-foreground">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold text-foreground">Emergency Only</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Emergency Support</span>
                    <span className="font-semibold text-accent">24/7 Available</span>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-right">
                <p className="text-muted-foreground mb-4">Need urgent AC repair outside business hours?</p>
                <Button variant="accent" size="lg" onClick={handleCall}>
                  <Phone className="w-4 h-4" />
                  Emergency Line
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadForm source="contact" />
      <Footer />
      <FloatingCTA />
    </main>
  );
};

export default Contact;
