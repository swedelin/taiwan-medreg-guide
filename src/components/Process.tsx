import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, Search, Users } from "lucide-react";

const processSteps = [
  {
    icon: Search,
    title: "Initial Assessment",
    description: "We analyze your device specifications, intended use, and determine the appropriate regulatory pathway for Taiwan market entry."
  },
  {
    icon: FileText,
    title: "Documentation Preparation", 
    description: "Our team prepares comprehensive technical files, clinical data, and regulatory submissions according to Taiwan FDA requirements."
  },
  {
    icon: Users,
    title: "Regulatory Submission",
    description: "We handle all communications with Taiwan FDA, manage the review process, and address any regulatory queries or requests."
  },
  {
    icon: CheckCircle,
    title: "Approval & Launch",
    description: "Upon approval, we assist with post-market requirements, quality system maintenance, and ongoing regulatory compliance."
  }
];

const Process = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Our Registration Process
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="h-full hover:shadow-medical transition-all duration-300 border-2 hover:border-medical-blue/30">
                  <CardHeader className="text-center pb-4">
                    <div className="w-20 h-20 bg-medical-gradient rounded-full flex items-center justify-center mx-auto mb-4 relative">
                      <IconComponent className="w-10 h-10 text-white" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-medical-teal rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-foreground">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-muted-foreground">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5 bg-medical-gradient"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;