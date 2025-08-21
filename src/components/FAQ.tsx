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
          "name": "台湾で医療機器を販売するには、どのような手続きが必要ですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "台湾市場で医療機器を販売するには、台湾食品薬物管理署（TFDA）に対して製造販売承認を申請する必要があります。特に高リスクに分類される医療機器については、技術資料、試験データ、臨床データなどの追加提出が求められる場合があります。また、海外製造業者は台湾国内に現地代理人（Taiwan Agent）を指定しなければなりません。現地代理人は、医療機器の登録手続きを管理し、TFDAとの連絡窓口としての役割を担います。"
          }
        },
        {
          "@type": "Question",
          "name": "QSDとは何ですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "QSDは「輸入医療機器品質システム文書（Quality System Documentation）」の略称です。これは、台湾に輸入される医療機器に対して、外国の製造業者が実施している品質管理体制が台湾のGMP（適正製造基準）に適合しているかどうかを、文書に基づいて審査する制度です。QSDは、台湾政府が輸入医療機器の品質を確保するために設けている審査プロセスの一つであり、登録時に必要な重要な要件となっています。"
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