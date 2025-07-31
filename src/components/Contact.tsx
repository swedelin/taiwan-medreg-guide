import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail } from "lucide-react";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-section-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            {t('contactTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('contactDescription')}
          </p>
        </div>
        
        <div className="flex justify-center">
          <Card className="border-2 border-medical-blue/20 max-w-2xl w-full">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-foreground">{t('contactTitle')}</CardTitle>
              <CardDescription className="text-lg">
                {t('contactDescription')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-medical-gradient rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-foreground text-lg">{t('contactInfoEmail')}</p>
                  <p className="text-muted-foreground text-lg">sylin@regiestar.com</p>
                </div>
              </div>
              
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;