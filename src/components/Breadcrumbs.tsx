import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const { t } = useLanguage();

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
        <li>
          <a 
            href="/" 
            className="flex items-center hover:text-medical-blue transition-colors"
            aria-label="ホームページに戻る"
          >
            <Home className="w-4 h-4" />
            <span className="sr-only">ホーム</span>
          </a>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="w-4 h-4 mx-2" />
            {item.href ? (
              <a 
                href={item.href} 
                className="hover:text-medical-blue transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-foreground font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;