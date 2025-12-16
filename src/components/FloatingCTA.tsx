import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
  const phoneNumber = "09538868337";
  const whatsappNumber = "919538868337";

  const handleCall = () => {
    window.location.href = `tel:+${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in your HVAC services.`, "_blank");
  };

  return (
    <>
      {/* Mobile Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-card/95 backdrop-blur-md border-t border-border p-3">
        <div className="flex gap-3">
          <Button
            variant="call"
            size="lg"
            onClick={handleCall}
            className="flex-1"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </Button>
          <Button
            variant="whatsapp"
            size="lg"
            onClick={handleWhatsApp}
            className="flex-1"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </Button>
        </div>
      </div>

      {/* Desktop Floating Buttons */}
      <div className="hidden lg:flex fixed right-6 bottom-6 z-50 flex-col gap-3">
        <button
          onClick={handleWhatsApp}
          className="w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-primary-foreground flex items-center justify-center shadow-elevated hover:scale-110 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
        <button
          onClick={handleCall}
          className="w-14 h-14 rounded-full bg-accent hover:bg-accent-hover text-accent-foreground flex items-center justify-center shadow-elevated hover:scale-110 transition-all duration-300 animate-pulse-subtle"
          aria-label="Call us"
        >
          <Phone className="w-6 h-6" />
        </button>
      </div>
    </>
  );
};

export default FloatingCTA;
