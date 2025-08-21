import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, Users, Zap } from "lucide-react";

const EnglishServices = () => {
  const services = [
    {
      icon: FileText,
      title: "TFDA Registration Support",
      description: "Complete assistance with Taiwan Food and Drug Administration registration procedures for medical devices of all classifications."
    },
    {
      icon: CheckCircle,
      title: "QSD Documentation",
      description: "Quality System Documentation preparation and review to ensure compliance with Taiwan's GMP requirements for imported medical devices."
    },
    {
      icon: Users,
      title: "Taiwan Agent Services", 
      description: "Local representative services as your designated Taiwan Agent, managing regulatory communications and compliance requirements."
    },
    {
      icon: Zap,
      title: "Fast Track Processing",
      description: "Expedited processing for urgent registrations with dedicated project management and regulatory expertise."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive regulatory support for medical device registration in Taiwan
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 border-medical-blue/20 hover:shadow-medical transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-medical-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnglishServices;