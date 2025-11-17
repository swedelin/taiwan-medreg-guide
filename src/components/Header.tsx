import { useLanguage } from "@/contexts/LanguageContext";

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
        
        <nav className="flex items-center space-x-8">
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
        </nav>
      </div>
    </header>
  );
};

export default Header;