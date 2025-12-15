import { Mail, ChevronDown } from "lucide-react";

const TopHeader = () => {
  return (
    <header className="h-[53px] w-full bg-background border-b border-border">
      <div className="container-custom h-full flex items-center justify-between">
        {/* Email */}
        <a 
          href="mailto:inquiry@athoscollagen.com" 
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <Mail className="w-4 h-4" />
          <span className="hidden sm:inline">inquiry@athoscollagen.com</span>
        </a>

        {/* Language Selector */}
        <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <span className="text-lg">🇬🇧</span>
          <span>English</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};

export default TopHeader;
