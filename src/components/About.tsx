import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Star } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            A Experiência Estética da <span className="text-coral">Clínica</span>
          </h2>
          <p className="text-xl text-text-soft max-w-2xl mx-auto">
            Entre em um espaço onde convergem beleza, bem-estar e atendimento personalizado.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-coral/20 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-coral" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Exclusividade</h3>
              <p className="text-text-soft">
                Cada compromisso é atendido com personalização, sem pressa, com dedicação 
                exclusiva aos seus objetivos de beleza.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-coral/20 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-coral" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Autenticidade</h3>
              <p className="text-text-soft">
                Atendimento e cuidado distintivo da medicina moderna e estética 
                integrativa, sempre com transparência.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-coral/20 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-coral" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Confiança</h3>
              <p className="text-text-soft">
                Escolha a sua beleza natural e autêntica e sua satisfação. 
                Resultados que falam por si só.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;