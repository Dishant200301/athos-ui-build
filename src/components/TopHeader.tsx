import { Mail } from "lucide-react";

const TopHeader = () => {
  return (
    <header className="h-[40px] sm:h-[42px] w-full bg-background border-b border-border lg:hidden">
      <div className="max-w-[1290px] mx-auto h-full flex items-center justify-start sm:justify-start px-4">
        {/* Email */}
        <a
          href="mailto:inquiry@athoscollagen.com"
          className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1D7AA3]" />
          <span>inquiry@athoscollagen.com</span>
        </a>
      </div>
    </header>
  );
};

export default TopHeader;
