import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const LanguageToggle = () => {
  const { language } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-md p-1">
      <Link to="/">
        <Button
          variant={language === 'ja' ? 'medical' : 'ghost'}
          size="sm"
          className={`text-xs px-3 py-1 h-7 ${
            language === 'ja' 
              ? 'bg-medical-blue text-white' 
              : 'text-foreground hover:text-medical-blue bg-transparent'
          }`}
        >
          日本語
        </Button>
      </Link>
      <Link to="/en">
        <Button
          variant={language === 'en' ? 'medical' : 'ghost'}
          size="sm"
          className={`text-xs px-3 py-1 h-7 ${
            language === 'en' 
              ? 'bg-medical-blue text-white' 
              : 'text-foreground hover:text-medical-blue bg-transparent'
          }`}
        >
          English
        </Button>
      </Link>
    </div>
  );
};

export default LanguageToggle;