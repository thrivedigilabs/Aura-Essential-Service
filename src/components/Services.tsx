import { 
  Wind, 
  Thermometer, 
  Cpu, 
  Wrench, 
  Zap, 
  AlertTriangle,
  Building,
  Snowflake
} from "lucide-react";

const services = [
  {
    icon: Wind,
    title: "VRF & VRV Systems",
    description: "Advanced variable refrigerant flow systems for optimal efficiency and zone control in large spaces.",
  },
  {
    icon: Building,
    title: "Ductable & Packaged AC",
    description: "Complete ducted air conditioning solutions for commercial buildings and large residential properties.",
  },
  {
    icon: Snowflake,
    title: "Ductless Mini-Split",
    description: "Energy-efficient split AC systems perfect for individual rooms and smaller spaces.",
  },
  {
    icon: Cpu,
    title: "Smart Thermostat Integration",
    description: "IoT-enabled climate control for remote monitoring and automated temperature management.",
  },
  {
    icon: Wrench,
    title: "Maintenance & AMC",
    description: "Comprehensive annual maintenance contracts ensuring peak performance year-round.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Repairs",
    description: "24/7 emergency repair services with rapid response times across Bengaluru.",
  },
  {
    icon: Zap,
    title: "Energy-Efficient Installations",
    description: "Sustainable HVAC solutions that reduce energy consumption and lower utility bills.",
  },
  {
    icon: Thermometer,
    title: "Indoor Air Quality",
    description: "Air purification and ventilation systems for healthier indoor environments.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Complete HVAC Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From installation to maintenance, we provide end-to-end HVAC services 
            for residential and commercial clients across Bengaluru.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-6 hover-lift group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
