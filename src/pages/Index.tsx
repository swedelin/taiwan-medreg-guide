import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

const Index = () => {
  const location = useLocation();
  const { setLanguage } = useLanguage();

  useEffect(() => {
    // Set language based on route (handle both /en and /en/)
    if (location.pathname.startsWith('/en')) {
      setLanguage('en');
    } else {
      setLanguage('ja');
    }
  }, [location.pathname, setLanguage]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <section id="services" aria-labelledby="services-heading">
          <Services />
        </section>
        <section id="process" aria-labelledby="process-heading">
          <Process />
        </section>
        <section id="faq" aria-labelledby="faq-heading">
          <FAQ />
        </section>
        <section id="contact" aria-labelledby="contact-heading">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;
