import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle, FileText, Search, Users } from "lucide-react";

const getProcessSteps = (t: (key: string) => string) => [
  {
    icon: Search,
    title: t('processStep1Title'),
    description: t('processStep1Description')
  },
  {
    icon: FileText,
    title: t('processStep2Title'), 
    description: t('processStep2Description')
  },
  {
    icon: Users,
    title: t('processStep3Title'),
    description: t('processStep3Description')
  },
  {
    icon: CheckCircle,
    title: t('processStep4Title'),
    description: t('processStep4Description')
  }
];

const Process = () => {
  const { t } = useLanguage();
  const processSteps = getProcessSteps(t);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 id="process-heading" className="text-4xl font-bold text-foreground mb-6">
            {t('processTitle')}
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