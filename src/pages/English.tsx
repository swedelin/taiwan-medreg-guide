import EnglishHeader from "@/components/english/EnglishHeader";
import EnglishHero from "@/components/english/EnglishHero";
import EnglishServices from "@/components/english/EnglishServices";
import EnglishProcess from "@/components/english/EnglishProcess";
import EnglishFAQ from "@/components/english/EnglishFAQ";
import EnglishContact from "@/components/english/EnglishContact";
import { Helmet } from "react-helmet-async";

const English = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Taiwan Medical Device Registration | Regulatory Consulting Expert - Regiestar</title>
        <meta name="description" content="Expert assistance for Taiwan medical device registration. Specialized support for imaging devices, AI software, surgical instruments, and pharmaceutical applications." />
        <link rel="canonical" href="https://regiestar.net/en/" />
        <link rel="alternate" hrefLang="ja" href="https://regiestar.net/" />
        <link rel="alternate" hrefLang="en" href="https://regiestar.net/en/" />
        <link rel="alternate" hrefLang="x-default" href="https://regiestar.net/" />
        <meta property="og:title" content="Taiwan Medical Device Registration | Regulatory Consulting Expert" />
        <meta property="og:description" content="Expert assistance for Taiwan medical device registration. Specialized support for imaging devices, AI software, surgical instruments." />
        <meta property="og:url" content="https://regiestar.net/en/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="ja_JP" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <EnglishHeader />
        <EnglishHero />
        <div id="services">
          <EnglishServices />
        </div>
        <div id="process">
          <EnglishProcess />
        </div>
        <div id="faq">
          <EnglishFAQ />
        </div>
        <div id="contact">
          <EnglishContact />
        </div>
      </div>
    </>
  );
};

export default English;