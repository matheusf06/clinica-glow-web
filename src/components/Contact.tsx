import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Entre em <span className="text-coral">contato</span>
          </h2>
          <p className="text-xl text-text-soft max-w-2xl mx-auto">
            Estamos prontos para atendê-la e esclarecer todas as suas dúvidas
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Como funciona nosso atendimento?
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-coral rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Consulta inicial</h4>
                  <p className="text-text-soft">
                    Conversamos sobre seus objetivos e analisamos suas necessidades específicas.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-coral rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Protocolo personalizado</h4>
                  <p className="text-text-soft">
                    Desenvolvemos um plano de tratamento exclusivo para você.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-coral rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Acompanhamento</h4>
                  <p className="text-text-soft">
                    Monitoramos seus resultados e ajustamos o tratamento conforme necessário.
                  </p>
                </div>
              </div>
            </div>
            
            <Button 
              variant="whatsapp" 
              size="lg" 
              className="w-full mb-4"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Fazer meu agendamento via WhatsApp
            </Button>
          </div>
          
          <div className="space-y-6">
            <Card className="border-coral/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-coral" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Localização</h4>
                    <p className="text-text-soft">Rua das Flores, 123 - Vila Madalena</p>
                    <p className="text-text-soft">São Paulo - SP, 05435-000</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Ver no Google Maps
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-coral/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-coral" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Telefone</h4>
                    <p className="text-text-soft">(11) 99999-9999</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-coral/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-coral" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Horário de funcionamento</h4>
                    <p className="text-text-soft">Segunda a Sexta: 9h às 18h</p>
                    <p className="text-text-soft">Sábado: 9h às 14h</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;