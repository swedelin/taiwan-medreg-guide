import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-medical.jpg";

const EnglishHero = () => {
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
          Professional regulatory consulting for medical device approval in Taiwan. Specialized support for international manufacturers entering the Taiwan market.
        </p>
      </div>
    </section>
  );
};

export default EnglishHero;