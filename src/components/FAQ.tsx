import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much does AC installation cost in Bangalore?",
    answer: "AC installation costs in Bangalore typically range from ₹2,500 to ₹8,000 depending on the AC type (split, window, or VRF), installation complexity, and required copper piping length. We provide free site inspections and transparent quotes with no hidden charges."
  },
  {
    question: "How often should I service my AC?",
    answer: "We recommend servicing your AC every 3-4 months for optimal performance. Regular maintenance includes cleaning filters, checking refrigerant levels, inspecting electrical connections, and cleaning the condenser coils. Our AMC packages cover 3-4 services per year."
  },
  {
    question: "What is a VRF/VRV system and is it suitable for my building?",
    answer: "VRF (Variable Refrigerant Flow) or VRV systems are advanced HVAC solutions ideal for commercial buildings, offices, and large residential properties. They offer zone-based temperature control, energy efficiency up to 30% better than traditional systems, and quiet operation. Contact us for a free assessment."
  },
  {
    question: "Do you provide emergency AC repair services?",
    answer: "Yes, we offer 24/7 emergency AC repair services across Bangalore. Our technicians can typically reach you within 2 hours for urgent repairs. Call us at 095388 68337 for immediate assistance."
  },
  {
    question: "Which AC brand is best for Bangalore's climate?",
    answer: "For Bangalore's moderate climate, we recommend inverter ACs from brands like Daikin, Mitsubishi, LG, and Samsung. These offer excellent energy efficiency and precise temperature control. Our experts can recommend the best option based on your room size and usage patterns."
  },
  {
    question: "What areas in Bangalore do you serve?",
    answer: "We provide HVAC services across all of Bangalore including Begur, BTM Layout, HSR Layout, Whitefield, Electronic City, Koramangala, Indiranagar, Marathahalli, JP Nagar, and 50+ other localities. Same-day service is available in most areas."
  },
  {
    question: "How long does AC installation take?",
    answer: "Standard split AC installation typically takes 2-4 hours. For complex installations like VRF systems or multiple units, we provide a detailed timeline after site inspection. We ensure minimal disruption to your daily routine or business operations."
  },
  {
    question: "Do you offer AMC (Annual Maintenance Contract)?",
    answer: "Yes, we offer comprehensive AMC packages starting from ₹2,500/year. Benefits include priority service, discounted repairs, 3-4 scheduled maintenance visits, and extended warranty on parts. AMC customers get 20% off on all repairs."
  }
];

const FAQ = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions About HVAC Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get answers to common questions about AC installation, maintenance, and repair services in Bangalore
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* FAQ Schema for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </div>
    </section>
  );
};

export default FAQ;
