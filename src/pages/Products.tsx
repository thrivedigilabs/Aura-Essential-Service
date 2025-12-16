import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import LeadForm from "@/components/LeadForm";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { 
  Phone,
  MessageCircle,
  Wind,
  Snowflake,
  Thermometer,
  Cpu,
  Zap,
  Building2
} from "lucide-react";

const products = [
  {
    icon: Wind,
    title: "VRF / VRV Systems",
    description: "Variable Refrigerant Flow systems offer superior energy efficiency with individual zone control. Best choice for large commercial buildings in Bangalore.",
    idealFor: ["Large Offices", "Hotels", "Hospitals", "Shopping Malls"],
    features: ["Energy Efficient", "Zone Control", "Low Noise"],
  },
  {
    icon: Building2,
    title: "Ductable AC Systems",
    description: "Concealed ducted air conditioning that integrates seamlessly with building interiors. Perfect for commercial spaces in Bengaluru.",
    idealFor: ["Offices", "Conference Rooms", "Showrooms", "Restaurants"],
    features: ["Hidden Installation", "Uniform Cooling", "Central Control"],
  },
  {
    icon: Thermometer,
    title: "Packaged AC Units",
    description: "High-capacity all-in-one cooling solutions for industrial and large commercial applications. Robust and reliable.",
    idealFor: ["Factories", "Warehouses", "Auditoriums", "Exhibition Halls"],
    features: ["High Capacity", "Easy Maintenance", "Cost Effective"],
  },
  {
    icon: Snowflake,
    title: "Split AC Systems",
    description: "Versatile split air conditioners in various capacities for homes and small commercial spaces in Bangalore. Quiet and efficient.",
    idealFor: ["Homes", "Small Offices", "Shops", "Clinics"],
    features: ["Quiet Operation", "Easy Install", "Energy Star Rated"],
  },
  {
    icon: Zap,
    title: "Inverter AC Systems",
    description: "Inverter technology ACs that save up to 50% energy compared to conventional units. Ideal for Bangalore's climate.",
    idealFor: ["Apartments", "Bedrooms", "Home Offices", "Living Rooms"],
    features: ["50% Energy Saving", "Precise Cooling", "Longer Lifespan"],
  },
  {
    icon: Cpu,
    title: "Smart Thermostats",
    description: "Wi-Fi enabled smart thermostats for remote temperature control. Learn your schedule and optimize energy automatically.",
    idealFor: ["Any AC System", "Smart Homes", "Offices", "Remote Monitoring"],
    features: ["App Control", "Energy Savings", "Learning AI"],
  },
];

const productsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "HVAC Products in Bangalore",
  "description": "AC systems and HVAC products available for installation in Bangalore - VRF, Split AC, Ductable, Inverter AC",
  "itemListElement": products.map((product, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Product",
      "name": product.title,
      "description": product.description
    }
  }))
};

const Products = () => {
  const whatsappNumber = "919538868337";

  const handleWhatsApp = (product: string) => {
    const message = encodeURIComponent(`Hi, I'm interested in ${product}. Please provide more details and pricing.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+919538868337";
  };

  return (
    <main className="min-h-screen">
      <SEOHead
        title="HVAC Products Bangalore | VRF, Split AC, Inverter AC Systems"
        description="Buy and install VRF systems, split AC, inverter AC, ductable AC in Bangalore. Daikin, Mitsubishi, LG, Samsung. Professional installation. Call 095388 68337."
        keywords="VRF system Bangalore, split AC Bangalore, inverter AC Bangalore, ductable AC price, AC installation cost Bangalore, Daikin AC Bangalore, Mitsubishi AC"
        canonicalPath="/products"
        schema={productsSchema}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-primary">
        <div className="section-padding container-narrow">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6">
              <Snowflake className="w-4 h-4 text-accent" />
              <span className="text-primary-foreground text-sm font-medium">HVAC Products & AC Systems</span>
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              AC Systems & HVAC Products —{" "}
              <span className="text-accent">Installation in Bangalore</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              We install and service all types of AC and HVAC systems from leading brands like Daikin, Mitsubishi, LG, and Samsung. 
              Get the perfect cooling solution for your home or business in Bangalore.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" onClick={handleCall}>
                <Phone className="w-5 h-5" />
                Product Consultation
              </Button>
              <Button variant="heroOutline" size="xl" onClick={() => handleWhatsApp("HVAC products")}>
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              AC & HVAC Products
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              AC Systems We Install & Service in Bangalore
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From residential split ACs to commercial VRF systems, we provide expert installation and service.
            </p>
          </div>

          <div className="space-y-8">
            {products.map((product, index) => (
              <article
                key={index}
                className="glass-card p-6 md:p-8 hover-lift"
              >
                <div className="grid md:grid-cols-3 gap-6 items-start">
                  {/* Product Info */}
                  <div className="md:col-span-2">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <product.icon className="w-7 h-7 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{product.title}</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {product.features.map((feature, i) => (
                            <span key={i} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-medium text-foreground">Ideal for:</span>
                      {product.idealFor.map((item, i) => (
                        <span key={i} className="text-sm text-muted-foreground">
                          {item}{i < product.idealFor.length - 1 ? " •" : ""}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col gap-3">
                    <Button variant="accent" onClick={() => handleWhatsApp(product.title)}>
                      <MessageCircle className="w-4 h-4" />
                      Get Quote
                    </Button>
                    <Button variant="outline" onClick={handleCall}>
                      <Phone className="w-4 h-4" />
                      Call Us
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Authorized Service Partners for Leading AC Brands
          </h2>
          <p className="text-muted-foreground mb-8">
            We install and service all major HVAC brands in Bangalore
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-muted-foreground font-semibold text-lg">
            {["Daikin", "Mitsubishi", "LG", "Samsung", "Carrier", "Voltas", "Blue Star", "Hitachi"].map((brand) => (
              <span key={brand} className="px-4 py-2 bg-card rounded-lg border border-border">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      <LeadForm source="products" />
      <Footer />
      <FloatingCTA />
    </main>
  );
};

export default Products;
