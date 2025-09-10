import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-coral rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">E</span>
              </div>
              <h3 className="text-xl font-bold">Estética Clínica</h3>
            </div>
            <p className="text-background/80 mb-4">
              Transformando vidas através da beleza e bem-estar com 
              atendimento personalizado e tecnologia de ponta.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-background hover:text-coral">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-coral">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-coral">
                <Phone className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-background/80">
              <li>Tratamentos Faciais</li>
              <li>Tratamentos Corporais</li>
              <li>Drenagem Linfática</li>
              <li>Laser Terapia</li>
              <li>Rejuvenescimento</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-background/80">
              <p>📍 Rua das Flores, 123 - Vila Madalena</p>
              <p>📞 (11) 99999-9999</p>
              <p>🕒 Seg-Sex: 9h às 18h</p>
              <p>🕒 Sáb: 9h às 14h</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2024 Estética Clínica. Todos os direitos reservados.
          </p>
          <Button 
            variant="coral" 
            size="sm"
            onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
          >
            Agendar consulta
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;