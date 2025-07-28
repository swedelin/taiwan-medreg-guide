import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Monitor, 
  Cpu, 
  Stethoscope, 
  Zap, 
  Wind, 
  Eye, 
  Search, 
  Scissors 
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Medical Imaging Devices"
  },
  {
    icon: Cpu,
    title: "AI/Software Solutions"
  },
  {
    icon: Stethoscope,
    title: "Drug Eluting Catheters"
  },
  {
    icon: Zap,
    title: "Muscle Stimulators"
  },
  {
    icon: Wind,
    title: "Olfactory Testing"
  },
  {
    icon: Eye,
    title: "Tear Testing"
  },
  {
    icon: Search,
    title: "Caries Detection"
  },
  {
    icon: Scissors,
    title: "Surgical Instruments"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-section-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Our Proven Track Record
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Examples of successful medical device registrations we've completed in Taiwan.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover:shadow-medical transition-all duration-300 hover:transform hover:scale-105 border-2 hover:border-medical-blue/30">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-medical-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;