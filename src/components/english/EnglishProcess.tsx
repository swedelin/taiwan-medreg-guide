import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const EnglishProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "Assessment of your medical device and determination of registration requirements and classification in Taiwan."
    },
    {
      number: "02", 
      title: "Documentation Preparation",
      description: "Compilation and review of technical documentation, QSD preparation, and regulatory submission materials."
    },
    {
      number: "03",
      title: "TFDA Submission",
      description: "Official submission to Taiwan Food and Drug Administration with complete regulatory dossier and supporting documents."
    },
    {
      number: "04",
      title: "Registration Approval",
      description: "Ongoing communication with TFDA, addressing queries, and securing final approval for market entry."
    }
  ];

  return (
    <section className="py-20 bg-section-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Registration Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Streamlined approach to Taiwan medical device registration
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-2 border-medical-blue/20 hover:shadow-medical transition-all duration-300 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-medical-gradient rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">{step.number}</span>
              </div>
              <CardHeader className="pt-8">
                <CardTitle className="text-xl text-foreground">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnglishProcess;