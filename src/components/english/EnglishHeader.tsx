import { Button } from "@/components/ui/button";

const EnglishHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div>
            <h1 className="text-xl font-bold text-foreground">Regiestar</h1>
            <p className="text-xs text-muted-foreground">Taiwan Medical Device Registration</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-md p-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.location.href = '/'}
              className="text-xs px-3 py-1 h-7 text-foreground hover:text-medical-blue bg-transparent"
            >
              日本語
            </Button>
            <Button
              variant="medical"
              size="sm"
              className="text-xs px-3 py-1 h-7 bg-medical-blue text-white"
            >
              English
            </Button>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-medical-blue transition-colors">
              Services
            </a>
            <a href="#process" className="text-foreground hover:text-medical-blue transition-colors">
              Process
            </a>
            <a href="#contact" className="text-foreground hover:text-medical-blue transition-colors">
              Contact
            </a>
            <a href="https://www.linkedin.com/company/regiestar/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-medical-blue transition-colors">
              LinkedIn
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default EnglishHeader;