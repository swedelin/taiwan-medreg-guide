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
    title: "Medical Imaging Devices",
    description: "X-ray systems, MRI, CT scanners, ultrasound equipment and other diagnostic imaging devices"
  },
  {
    icon: Cpu,
    title: "AI/Software Solutions",
    description: "Computer-aided detection software, diagnostic algorithms, and AI-powered medical applications"
  },
  {
    icon: Stethoscope,
    title: "Drug Eluting Catheters",
    description: "Interventional cardiology devices, balloon catheters, and drug-delivery systems"
  },
  {
    icon: Zap,
    title: "Muscle Stimulators",
    description: "Electrical stimulation devices, TENS units, and rehabilitation equipment"
  },
  {
    icon: Wind,
    title: "Olfactory Testing",
    description: "Smell and taste assessment devices, sensory evaluation equipment"
  },
  {
    icon: Eye,
    title: "Tear Testing",
    description: "Dry eye diagnostic tools, tear film analysis devices, and ophthalmology equipment"
  },
  {
    icon: Search,
    title: "Caries Detection",
    description: "Dental diagnostic equipment, cavity detection systems, and oral health devices"
  },
  {
    icon: Scissors,
    title: "Surgical Instruments",
    description: "Operating room tools, minimally invasive devices, and specialized surgical equipment"
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
            We can handle any medical device category - these represent just some of our recent projects.
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
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;