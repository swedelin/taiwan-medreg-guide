import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";

const EnglishFAQ = () => {
  const faqData = [
    {
      question: "What procedures are required to sell medical devices in Taiwan?",
      answer: "To sell medical devices in the Taiwan market, you must apply for marketing authorization from the Taiwan Food and Drug Administration (TFDA). For high-risk classified medical devices, additional submissions of technical documentation, test data, and clinical data may be required. Additionally, overseas manufacturers must designate a local Taiwan Agent who will manage the medical device registration procedures and serve as the liaison with TFDA."
    },
    {
      question: "What is QSD?",
      answer: "QSD stands for 'Quality System Documentation' for imported medical devices. This is a system that reviews, based on documentation, whether the quality management system implemented by foreign manufacturers for medical devices imported into Taiwan complies with Taiwan's GMP (Good Manufacturing Practice) standards. QSD is one of the review processes established by the Taiwan government to ensure the quality of imported medical devices and is an important requirement necessary for registration."
    }
  ];

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What procedures are required to sell medical devices in Taiwan?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "To sell medical devices in the Taiwan market, you must apply for marketing authorization from the Taiwan Food and Drug Administration (TFDA). For high-risk classified medical devices, additional submissions of technical documentation, test data, and clinical data may be required. Additionally, overseas manufacturers must designate a local Taiwan Agent who will manage the medical device registration procedures and serve as the liaison with TFDA."
              }
            },
            {
              "@type": "Question",
              "name": "What is QSD?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "QSD stands for 'Quality System Documentation' for imported medical devices. This is a system that reviews, based on documentation, whether the quality management system implemented by foreign manufacturers for medical devices imported into Taiwan complies with Taiwan's GMP (Good Manufacturing Practice) standards. QSD is one of the review processes established by the Taiwan government to ensure the quality of imported medical devices and is an important requirement necessary for registration."
              }
            }
          ]
        })}
        </script>
      </Helmet>
      
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Common questions about Taiwan medical device registration
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 border-medical-blue/20 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default EnglishFAQ;