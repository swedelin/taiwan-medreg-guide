import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-medical.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient">
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Taiwan Medical Device
          <br />
          <span className="text-medical-teal">Registration Expert</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
          Professional regulatory consulting for medical device registration in Taiwan. 
          From imaging systems to surgical instruments - we navigate the complex approval process for you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="medical" size="lg" className="text-lg px-8 py-4">
            Get Free Consultation
          </Button>
          <Button variant="medical-outline" size="lg" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-medical-blue">
            View Our Services
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-medical-teal mb-2">50+</div>
            <p className="text-white/80">Successful Registrations</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-medical-teal mb-2">8+</div>
            <p className="text-white/80">Device Categories</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-medical-teal mb-2">95%</div>
            <p className="text-white/80">Approval Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;