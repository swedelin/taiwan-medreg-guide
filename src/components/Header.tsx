import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div>
            <h1 className="text-xl font-bold text-foreground">{t('companyName')}</h1>
            <p className="text-xs text-muted-foreground">{t('companySubtitle')}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <LanguageToggle />
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-medical-blue transition-colors">
              {t('services')}
            </a>
            <a href="#process" className="text-foreground hover:text-medical-blue transition-colors">
              {t('process')}
            </a>
            <a href="#contact" className="text-foreground hover:text-medical-blue transition-colors">
              {t('contact')}
            </a>
            <a href="https://www.linkedin.com/company/regiestar/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-medical-blue transition-colors">
              {t('linkedin')}
            </a>
            <Button variant="medical" size="sm">
              {t('freeConsultation')}
            </Button>
          </nav>
          
          <Button variant="medical" size="sm" className="md:hidden">
            {t('menu')}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;