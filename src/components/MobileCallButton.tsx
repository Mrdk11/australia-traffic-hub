import { Phone } from "lucide-react";

const MobileCallButton = () => {
  return (
    <a
      href="tel:+61412345678"
      className="md:hidden fixed bottom-4 left-4 right-4 z-50 bg-accent text-accent-foreground py-4 px-6 rounded-full flex items-center justify-center gap-3 font-semibold shadow-lg hover:bg-accent/90 transition-colors animate-fade-up"
    >
      <Phone className="w-5 h-5" />
      <span>Call Now</span>
    </a>
  );
};

export default MobileCallButton;
