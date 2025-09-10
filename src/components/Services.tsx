import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import facialTreatment from "@/assets/facial-treatment.jpg";
import laserTreatment from "@/assets/laser-treatment.jpg";
import bodyTreatment from "@/assets/body-treatment.jpg";

const Services = () => {
  const services = [
    {
      title: "Drenagem e Laser",
      description: "Técnicas de tratamento da drenagem estética, fisioterapia e laser do equipamento de Carboci (CO2) para benefícios da pele, redução de rugas e limpeza profunda dos poros.",
      image: facialTreatment,
      category: "FACE"
    },
    {
      title: "Tratamentos Corporais",
      description: "Modelador com diversas tecnologias, drenagem manutenais através de técnicas especializadas, relentagam da derme, metabolização gordura localizada.",
      image: bodyTreatment,
      category: "CORPO"
    },
    {
      title: "Tratamentos Faciais",
      description: "Hidratação, limpeza da pele, dermocosmético clínico, procedimentos estéticos faciais para rejuvenescimento e cuidados específicos.",
      image: laserTreatment,
      category: "FACE"
    }
  ];

  return (
    <section id="servicos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Conheça nossos <span className="text-coral">tratamentos</span>
          </h2>
          <p className="text-xl text-text-soft max-w-2xl mx-auto">
            As técnicas mais modernas para você
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-coral/10">
              <div className="relative h-64">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-coral text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {service.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-text-soft mb-6 leading-relaxed">{service.description}</p>
                <Button 
                  variant="coral" 
                  className="w-full"
                  onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                >
                  Quero saber mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;