import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-2 border-medical-blue/20">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">{t('contactTitle')}</CardTitle>
              <CardDescription>
                {t('contactDescription')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">{t('contactName')}</Label>
                  <Input id="firstName" placeholder={t('contactName')} />
                </div>
                <div>
                  <Label htmlFor="lastName">{t('contactCompany')}</Label>
                  <Input id="lastName" placeholder={t('contactCompany')} />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">{t('contactEmail')}</Label>
                <Input id="email" type="email" placeholder="your.email@company.com" />
              </div>
              
              <div>
                <Label htmlFor="deviceType">{t('contactDeviceType')}</Label>
                <Input id="deviceType" placeholder={t('contactDeviceType')} />
              </div>
              
              <div>
                <Label htmlFor="message">{t('contactDetails')}</Label>
                <Textarea 
                  id="message" 
                  placeholder={t('contactDetails')}
                  className="min-h-[120px]"
                />
              </div>
              
              <Button variant="medical" className="w-full" size="lg">
                {t('contactSubmit')}
              </Button>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-2 border-medical-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">{t('contactInfoTitle')}</CardTitle>
                <CardDescription>
                  {t('contactDescription')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-medical-gradient rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t('contactInfoEmail')}</p>
                    <p className="text-muted-foreground">sylin@regiestar.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-medical-gradient text-white border-none">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">{t('whyChooseTitle')}</h3>
                <ul className="space-y-3 text-white/90">
                  <li>✓ {t('whyChoose1')}</li>
                  <li>✓ {t('whyChoose2')}</li>
                  <li>✓ {t('whyChoose3')}</li>
                  <li>✓ {t('whyChoose4')}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;