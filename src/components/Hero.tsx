import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-clinic.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Sua beleza,
            <span className="text-coral block">Nossa paixão</span>
          </h1>
          
          <p className="text-xl text-text-soft mb-8 max-w-lg leading-relaxed">
            Transforme sua aparência e bem-estar em nossa clínica de estética. 
            Serviços variados, qualidade e tecnologia certificada.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="coral" 
              size="lg"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              Marque sua consulta
            </Button>
            <Button variant="elegant" size="lg">
              Conheça nossos serviços
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-md">
            <div className="text-center">
              <div className="text-2xl font-bold text-coral">+4</div>
              <div className="text-sm text-text-soft">Anos de serviço</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-coral">+700</div>
              <div className="text-sm text-text-soft">Clientes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-coral">98%</div>
              <div className="text-sm text-text-soft">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;