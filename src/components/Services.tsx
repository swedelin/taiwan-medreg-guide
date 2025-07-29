import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
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

const getServices = (t: (key: string) => string) => [
  {
    icon: Monitor,
    title: t('service1')
  },
  {
    icon: Cpu,
    title: t('service2')
  },
  {
    icon: Stethoscope,
    title: t('service3')
  },
  {
    icon: Zap,
    title: t('service4')
  },
  {
    icon: Wind,
    title: t('service5')
  },
  {
    icon: Eye,
    title: t('service6')
  },
  {
    icon: Search,
    title: t('service7')
  },
  {
    icon: Scissors,
    title: t('service8')
  }
];

const Services = () => {
  const { t } = useLanguage();
  const services = getServices(t);

  return (
    <section className="py-20 bg-section-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            {t('servicesTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('servicesDescription')}
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