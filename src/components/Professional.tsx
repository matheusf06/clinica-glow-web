import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, GraduationCap, Users } from "lucide-react";

const Professional = () => {
  return (
    <section className="py-20 bg-beige/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <span className="text-coral font-medium">Profissional</span>
              <h2 className="text-4xl font-bold text-foreground mt-2 mb-4">
                O que torna nosso <br />
                <span className="text-coral">atendimento único?</span>
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-coral" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Formação Especializada</h3>
                  <p className="text-text-soft">
                    Profissional qualificado com anos de experiência em estética avançada e 
                    constante atualização em técnicas modernas.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-coral" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Certificações</h3>
                  <p className="text-text-soft">
                    Certificado em diversas técnicas de estética facial e corporal, 
                    sempre seguindo protocolos de segurança.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-coral" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Atendimento Personalizado</h3>
                  <p className="text-text-soft">
                    Cada cliente recebe um protocolo personalizado, desenvolvido especificamente 
                    para suas necessidades e objetivos.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button 
                variant="coral" 
                size="lg"
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              >
                Fazer meu agendamento
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <Card className="border-coral/20">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-coral/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl text-coral">👩‍⚕️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Dra. Ana Silva</h3>
                  <p className="text-coral font-medium">Esteticista Especializada</p>
                </div>
                
                <p className="text-text-soft text-center mb-6 leading-relaxed">
                  "Acredito na transformação através do cuidado personalizado. 
                  Cada cliente é único e merece um tratamento especial que realce 
                  sua beleza natural."
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-coral">8+</div>
                    <div className="text-sm text-text-soft">Anos experiência</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-coral">15+</div>
                    <div className="text-sm text-text-soft">Especializações</div>
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

export default Professional;