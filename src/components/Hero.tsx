import { Phone, MessageCircle, Shield, Clock, Award, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hvac.jpg";

const Hero = () => {
  const phoneNumber = "09538868337";
  const whatsappNumber = "919538868337";

  const handleCall = () => {
    window.location.href = `tel:+${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in your HVAC services.`, "_blank");
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional HVAC technician installing air conditioning"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding container-narrow w-full pt-24">
        <div className="max-w-2xl">
          {/* Trust Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-primary-foreground text-sm font-medium">On-Time Service Promise • Trusted HVAC Experts</span>
          </div>

          {/* Headline - SEO Optimized H1 */}
          <h1 className="animate-fade-up-delay-1 text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            HVAC Services in Bangalore —{" "}
            <span className="text-accent">AC Installation, Repair & Maintenance</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up-delay-2 text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Expert AC installation, VRF/VRV systems, and 24/7 emergency repairs for homes and businesses. 
            Trusted HVAC contractor serving BTM Layout, HSR, Whitefield, Electronic City & all Bengaluru areas.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="xl" onClick={handleCall} className="group">
              <Phone className="w-5 h-5 group-hover:animate-pulse" />
              Call Now
            </Button>
            <Button variant="heroOutline" size="xl" onClick={handleWhatsApp}>
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="animate-fade-up-delay-3 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Clock, text: "Same-Day Service" },
              { icon: Shield, text: "On-Time Guarantee" },
              { icon: Award, text: "Certified Experts" },
              { icon: Building2, text: "Commercial & Home" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-primary-foreground/80">
                <item.icon className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Shapes for Visual Interest */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/4 w-64 h-64 bg-primary-foreground/5 rounded-full blur-2xl pointer-events-none" />
    </section>
  );
};

export default Hero;
