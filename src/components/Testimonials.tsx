import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "IT Park Manager, Electronic City",
    content: "Aura Essential Service installed VRF systems across our entire office complex. The team was professional, completed work on time, and the energy savings have been significant. Highly recommend for commercial projects.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Homeowner, HSR Layout",
    content: "Same-day service when our AC broke down during summer! The technician arrived within 2 hours, diagnosed the issue quickly, and had it fixed. Very transparent pricing and excellent workmanship.",
    rating: 5,
  },
  {
    name: "Mohammed Farooq",
    role: "Restaurant Owner, BTM Layout",
    content: "We needed a complete HVAC solution for our new restaurant. Aura Essential delivered exactly what we needed - great cooling, minimal noise, and they completed the installation before our opening date.",
    rating: 5,
  },
  {
    name: "Ananya Reddy",
    role: "Apartment Complex, Whitefield",
    content: "Signed an AMC with Aura Essential for our apartment. Their regular maintenance visits have kept all our units running perfectly. The technicians are always on time and very courteous.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Warehouse Manager, Hongasandra",
    content: "Industrial cooling for our 50,000 sq ft warehouse was a complex job, but the team handled it professionally. Zero downtime during installation, and the system works flawlessly.",
    rating: 5,
  },
  {
    name: "Deepa Nair",
    role: "Villa Owner, Begur",
    content: "Installed smart thermostats across our villa. The energy efficiency improvements have been remarkable - our electricity bills dropped by 30%. Excellent after-sales support too.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Customer Reviews
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Homes & Businesses
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See what our clients across Bengaluru have to say about our HVAC services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-6 hover-lift relative"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-accent/20 absolute top-4 right-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 mb-6 leading-relaxed text-sm">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-muted-foreground text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-accent/10 border border-accent/20 rounded-full px-6 py-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-foreground font-medium">
              4.9/5 Average Rating from 500+ Clients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
