import { MapPin, CheckCircle } from "lucide-react";

const locations = [
  { name: "Begur", area: "South Bangalore" },
  { name: "BTM Layout", area: "South Bangalore" },
  { name: "HSR Layout", area: "South-East Bangalore" },
  { name: "Whitefield", area: "East Bangalore" },
  { name: "Hongasandra", area: "South Bangalore" },
  { name: "Electronic City", area: "South Bangalore" },
  { name: "Koramangala", area: "Central Bangalore" },
  { name: "Indiranagar", area: "East Bangalore" },
  { name: "Marathahalli", area: "East Bangalore" },
  { name: "JP Nagar", area: "South Bangalore" },
  { name: "Jayanagar", area: "South Bangalore" },
  { name: "Bannerghatta Road", area: "South Bangalore" },
];

const ServiceAreas = () => {
  return (
    <section id="areas" className="section-padding bg-secondary">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Service Coverage
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Serving All of{" "}
            <span className="text-primary">Bengaluru</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our expert technicians provide prompt HVAC services throughout major 
            residential and commercial areas in Bangalore with fast response times.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {locations.map((location, index) => (
            <div
              key={index}
              className="glass-card p-4 hover-lift cursor-pointer group"
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground group-hover:text-accent transition-colors">
                    {location.name}
                  </div>
                  <div className="text-muted-foreground text-sm">{location.area}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Messages */}
        <div className="bg-primary rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { title: "Fast Response", desc: "Local technicians across all areas" },
              { title: "Same-Day Service", desc: "Available for urgent requirements" },
              { title: "All Bangalore", desc: "Covering 50+ localities" },
            ].map((item, index) => (
              <div key={index} className="text-primary-foreground">
                <CheckCircle className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="font-semibold text-lg">{item.title}</div>
                <div className="text-primary-foreground/70 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
