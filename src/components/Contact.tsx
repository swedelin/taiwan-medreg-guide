import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-section-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Register Your Medical Device?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get expert guidance for your Taiwan medical device registration. 
            Contact us for a free consultation and personalized regulatory strategy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-2 border-medical-blue/20">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Get Free Consultation</CardTitle>
              <CardDescription>
                Tell us about your medical device and we'll provide a tailored registration strategy.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Smith" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Your Company Name" />
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@company.com" />
              </div>
              
              <div>
                <Label htmlFor="deviceType">Device Type</Label>
                <Input id="deviceType" placeholder="e.g., Medical Imaging Device, AI Software" />
              </div>
              
              <div>
                <Label htmlFor="message">Project Details</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your medical device, timeline, and specific requirements..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button variant="medical" className="w-full" size="lg">
                Request Free Consultation
              </Button>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-2 border-medical-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Contact Information</CardTitle>
                <CardDescription>
                  Reach out to us directly for immediate assistance.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-medical-gradient rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">sylin@regiestar.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-medical-gradient text-white border-none">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-white/90">
                  <li>✓ Expert knowledge of FDA Taiwan requirements</li>
                  <li>✓ Proven track record across device categories</li>
                  <li>✓ Personalized support throughout the process</li>
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