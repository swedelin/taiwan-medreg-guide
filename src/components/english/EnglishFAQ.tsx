import { Helmet } from "react-helmet-async";

const EnglishFAQ = () => {

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
      
      <section className="py-20 bg-background" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Common questions about Taiwan medical device registration
            </p>
          </div>
          
          <div className="space-y-8">
            <section className="border-2 border-medical-blue/20 rounded-lg p-6" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 className="text-xl font-semibold text-foreground mb-4" itemProp="name">
                What procedures are required to sell medical devices in Taiwan?
              </h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-muted-foreground text-base leading-relaxed" itemProp="text">
                  To sell medical devices in the Taiwan market, you must apply for marketing authorization from the Taiwan Food and Drug Administration (TFDA). For high-risk classified medical devices, additional submissions of technical documentation, test data, and clinical data may be required. Additionally, overseas manufacturers must designate a local Taiwan Agent who will manage the medical device registration procedures and serve as the liaison with TFDA.
                </p>
              </div>
            </section>

            <section className="border-2 border-medical-blue/20 rounded-lg p-6" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 className="text-xl font-semibold text-foreground mb-4" itemProp="name">
                What is QSD?
              </h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-muted-foreground text-base leading-relaxed" itemProp="text">
                  QSD stands for "Quality System Documentation" for imported medical devices. This is a system that reviews, based on documentation, whether the quality management system implemented by foreign manufacturers for medical devices imported into Taiwan complies with Taiwan's GMP (Good Manufacturing Practice) standards. QSD is one of the review processes established by the Taiwan government to ensure the quality of imported medical devices and is an important requirement necessary for registration.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnglishFAQ;