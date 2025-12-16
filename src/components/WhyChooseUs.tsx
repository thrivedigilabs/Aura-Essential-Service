import { Check, Shield, Clock, Leaf, Award, Building2, Wrench } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Certified Technicians",
    description: "Factory-trained experts with certifications from leading HVAC manufacturers.",
  },
  {
    icon: Clock,
    title: "Fast Response Time",
    description: "Same-day service appointments and rapid emergency response across Bengaluru.",
  },
  {
    icon: Leaf,
    title: "Energy Efficient Solutions",
    description: "Eco-friendly systems that reduce your carbon footprint and electricity bills.",
  },
  {
    icon: Award,
    title: "All Major Brands",
    description: "Authorized service partners for Daikin, Mitsubishi, LG, Samsung, and more.",
  },
  {
    icon: Building2,
    title: "Commercial Expertise",
    description: "Specialized solutions for offices, retail spaces, hospitals, and industries.",
  },
  {
    icon: Wrench,
    title: "Comprehensive Warranty",
    description: "Extended warranties on installations with dedicated after-sales support.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Trusted HVAC Partner for{" "}
              <span className="text-primary">Bengaluru</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              With years of experience serving homes and businesses across Karnataka, 
              Aura Essential Service has built a reputation for reliability, quality workmanship, 
              and customer satisfaction.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 p-6 bg-primary rounded-2xl">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground">500+</div>
                <div className="text-primary-foreground/80 text-sm">Projects Completed</div>
              </div>
              <div className="text-center border-x border-primary-foreground/20">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground">24/7</div>
                <div className="text-primary-foreground/80 text-sm">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground">98%</div>
                <div className="text-primary-foreground/80 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-5 rounded-xl border border-border hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
