import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Ficolla", img: "/images/ficolla.png", href: "https://ficolla.com/ " },
  { label: "Fish Collagen Peptide", href: "/fish-collagen-peptide" },
  { label: "Fish Gelatin", href: "/fish-gelatin" },
  {
    label: "Applications", href: "#", hasDropdown: true, dropdownItems: [
      { label: "Applications of Fish Collagen Peptide", href: "/applications/fish-collagen-peptide" },
      { label: "Applications of Fish Gelatin", href: "/applications/fish-gelatin" },
    ]
  },
  { label: "Contact Us", href: "/contact" },
];

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "/images/english.svg" },
  { code: "fr", name: "French", flag: "/images/france.svg" },
  { code: "es", name: "Spanish", flag: "/images/spanish.svg" },
  { code: "de", name: "German", flag: "/images/german.svg" },
  { code: "ru", name: "Russian", flag: "/images/russian.svg" },
  { code: "ja", name: "Japanese", flag: "/images/japanese.svg" },
  { code: "ko", name: "Korean", flag: "/images/korean.svg" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [mobileLangDropdownOpen, setMobileLangDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    setMobileLangDropdownOpen(false);
  };

  // Close language dropdown on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (mobileLangDropdownOpen) {
        setMobileLangDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileLangDropdownOpen]);

  return (
    <nav className="h-[85px] w-full bg-background  top-0 z-50 shadow-sm">
      <div className="max-w-[1290px] mx-auto h-full flex items-center justify-between px-4 xl:px-0">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/logo.webp" alt="" className="xl:w-35 xl:h-[60px] w-30 h-[40px]" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden xl:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.label} className="relative group">
              {item.hasDropdown ? (
                <>
                  <button
                    className="flex items-center gap-1 text-base transition-colors text-black hover:text-primary"
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-2 w-[280px] bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <ul className="py-2">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <li key={dropdownItem.label}>
                          <Link
                            to={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-gray-100 transition-colors"
                          >
                            {dropdownItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : item.img ? (
                <a
                  href={item.href}
                  className="flex items-center"
                >
                  <img src={item.img} alt="Ficolla" className="h-5" />
                </a>
              ) : (
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 text-base transition-colors ${isActive(item.href)
                    ? "text-primary font-medium"
                    : "text-black hover:text-primary"
                    }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Inquiry Button */}
        <Link to="/inquiry">
          <Button className="hidden xl:flex btn-primary rounded-[6px_0px] px-10 ">
            Inquiry
          </Button>
        </Link>

        {/* Mobile Language Selector & Menu Button */}
        <div className="xl:hidden flex items-center gap-3">
          {/* Language Button - Mobile Only */}
          <div className="relative">
            <button
              onClick={() => setMobileLangDropdownOpen(!mobileLangDropdownOpen)}
              className="flex items-center gap-1 text-sm text-white bg-[#1d7aa3] rounded-md py-1.5 px-2"
            >
              <img
                src={selectedLanguage.flag}
                alt={selectedLanguage.name}
                className="w-5 h-3 object-cover rounded-sm"
              />
              <ChevronDown className={`w-3 h-3 transition-transform ${mobileLangDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Mobile Language Dropdown */}
            {mobileLangDropdownOpen && (
              <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg min-w-[160px] z-50 overflow-hidden py-1">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageSelect(language)}
                    className={`w-full flex items-center gap-3 px-3 py-2 text-sm transition-all duration-200 ${selectedLanguage.code === language.code
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-700 hover:bg-gray-50'
                      }`}
                  >
                    <img
                      src={language.flag}
                      alt={language.name}
                      className="w-5 h-3 object-cover rounded-sm flex-shrink-0"
                    />
                    <span className="font-medium">{language.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full Page Overlay */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 bg-background z-50 overflow-y-auto">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
          </div>

          {/* Menu Content */}
          <ul className="flex flex-col px-6 pb-6 gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      className="flex items-center justify-between w-full text-lg py-3 text-foreground hover:text-primary border-b border-border"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {/* Mobile Dropdown Items */}
                    <div className={`overflow-hidden transition-all duration-300 ${mobileDropdownOpen ? 'max-h-40' : 'max-h-0'}`}>
                      <ul className="pl-4 mt-2 space-y-2">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <li key={dropdownItem.label}>
                            <Link
                              to={dropdownItem.href}
                              className="block text-base py-2 text-foreground/70 hover:text-primary"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileDropdownOpen(false);
                              }}
                            >
                              {dropdownItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : item.img ? (
                  <a
                    href={item.href}
                    className="flex items-center py-3 border-b border-border"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <img src={item.img} alt="Ficolla" className="h-6" />
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className={`flex items-center gap-1 text-lg py-3 border-b border-border ${isActive(item.href)
                      ? "text-primary font-medium"
                      : "text-foreground hover:text-primary"
                      }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="mt-4">
              <Link to="/inquiry" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full btn-primary py-3 text-lg">Inquiry</Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
