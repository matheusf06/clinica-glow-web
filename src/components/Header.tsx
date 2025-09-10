import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-coral rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">E</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">Estética Clínica</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#sobre" className="text-text-soft hover:text-coral transition-colors">Sobre</a>
            <a href="#servicos" className="text-text-soft hover:text-coral transition-colors">Serviços</a>
            <a href="#contato" className="text-text-soft hover:text-coral transition-colors">Contato</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm text-text-soft">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>Seg-Sex 9h-18h</span>
              </div>
            </div>
            <Button 
              variant="whatsapp" 
              size="sm"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;