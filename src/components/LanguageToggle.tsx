import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-md p-1">
      <Button
        variant={language === 'ja' ? 'medical' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('ja')}
        className={`text-xs px-3 py-1 h-7 ${
          language === 'ja' 
            ? 'bg-medical-blue text-white' 
            : 'text-foreground hover:text-medical-blue bg-transparent'
        }`}
      >
        日本語
      </Button>
      <Button
        variant={language === 'en' ? 'medical' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className={`text-xs px-3 py-1 h-7 ${
          language === 'en' 
            ? 'bg-medical-blue text-white' 
            : 'text-foreground hover:text-medical-blue bg-transparent'
        }`}
      >
        English
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => window.location.href = '/en/'}
        className="text-xs px-3 py-1 h-7 text-foreground hover:text-medical-blue bg-transparent ml-2"
      >
        EN Site →
      </Button>
    </div>
  );
};

export default LanguageToggle;