import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect } from "react";

const FAQ = () => {
  const { t } = useLanguage();

  useEffect(() => {
    // Create JSON-LD structured data for FAQ
    const faqStructuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": t('faqQ1'),
          "acceptedAnswer": {
            "@type": "Answer",
            "text": t('faqA1')
          }
        },
        {
          "@type": "Question", 
          "name": t('faqQ2'),
          "acceptedAnswer": {
            "@type": "Answer",
            "text": t('faqA2')
          }
        }
      ]
    };

    // Add JSON-LD script to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqStructuredData);
    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [t]);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            {t('faqTitle')}
          </h2>
        </div>

        <Card className="border-2 border-medical-blue/20">
          <CardContent className="pt-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-medical-blue/20">
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-medical-blue">
                  <h3 className="text-left font-semibold">
                    {t('faqQ1')}
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-4">
                  {t('faqA1')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-0">
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-medical-blue">
                  <h3 className="text-left font-semibold">
                    {t('faqQ2')}
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-4">
                  {t('faqA2')}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FAQ;