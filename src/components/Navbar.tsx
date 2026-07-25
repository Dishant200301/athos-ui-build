import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronRight, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const productCategories = [
  {
    title: "Enzymes",
    slug: "enzymes",
    href: "/products/enzymes",
    subProducts: [
      "Serratiopeptidase", "Trypsin", "Pancreatin", "Pepsin", "Amylase",
      "Bromelain", "Rennet", "Lactase", "Lipase", "Papain",
      "Phospholipase", "Protease", "Dextranase", "Cellulase", "Beta-Glucanase",
      "Transglutaminase", "Laccase", "Polygalacturonase", "Xylanase", "Galactosidase",
      "Pectinase"
    ]
  },
  {
    title: "Peptones",
    slug: "peptones",
    href: "/products/peptones",
    subProducts: [
      "Bovine Collagen Peptide", "Veg Collagen", "Fish Collagen Peptide", "Chicken Collagen",
      "Egg Membrane Collagen", "Undenatured Collagen", "Bovine Gelatin", "Fish Gelatin",
      "Mucopolysaccharides", "Corn Hydrolysate Protein", "Wheat Peptide", "Pea Peptide",
      "Brown Rice Protein", "Soy Protein", "Whey Protein"
    ]
  },
  {
    title: "Probiotic and Fermentation Ingredients",
    slug: "probiotic-fermentation-ingredients",
    href: "/products/probiotic-fermentation-ingredients",
    subProducts: [
      "Malt Extract", "Yeast Extract", "Liver Extract", "Meat Extract",
      "Lactobacillus Buchneri", "Streptococcus Thermophilus", "Lactobacillus Casei", "Bifidobacterium Adolescentis",
      "Enterococcus Faecium", "Pediococcus Acidilactici", "Bacillus Coagulans", "Bacillus Subtilis",
      "Lactobacillus Brevis", "Saccharomyces Cerevisiae", "Bacillus Clausii", "Bifidobacterium Animalis",
      "Bifidobacterium Longum", "Bifidobacterium Infantis", "Lactobacillus Bulgaricus", "Streptococcus Faecium"
    ]
  },
  {
    title: "Nutraceutical and Pharmaceuticals Ingredients",
    slug: "nutraceutical-pharmaceutical-ingredients",
    href: "/products/nutraceutical-pharmaceutical-ingredients",
    subProducts: [
      "L-Glutathione", "Chondroitin Sulfate", "Hyaluronic Acid", "Methylsulfonylmethane (MSM)",
      "Glucosamine", "Coenzyme Q10", "Maltodextrin", "Sodium Alginate",
      "Guar Gum", "Bovine Colostrum Powder", "Agar Agar", "Pectin",
      "Lecithin", "Sodium Caseinate", "Microcrystalline Cellulose"
    ]
  },
  {
    title: "Animal Nutrition",
    slug: "animal-nutrition",
    href: "/products/animal-nutrition",
    subProducts: [
      "Sodium Butyrate", "Calcium Butyrate", "Mannan Oligosaccharide", "Amino Chelated Minerals",
      "Sodium Propionate", "Calcium Propionate", "Protein Hydrolysate", "Active Dry Yeast"
    ]
  },
  {
    title: "Extract and Essential Oils",
    slug: "extract-and-essential-oils",
    href: "/products/extract-and-essential-oils",
    subProducts: [
      "SCFE Black Pepper Oleoresin",
      "Piperine",
      "SCFE Ginger Oleoresin",
      "Ginger Extract Granules",
      "SCFE Vanilla Extract",
      "SCFE Holy Basil Oleoresin",
      "SCFE Seabuckthorn Oil",

    ]
  }
];

interface NavItem {
  label: string;
  href: string;
  img?: string;
  hasMegaMenu?: boolean;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "#", hasMegaMenu: true },
  { label: "Contact Us", href: "/contact" },
];

interface Language {
  code: string;
  country: string;
  name: string;
}

const languages: Language[] = [
  { code: "US", country: "us", name: "English" },
  { code: "IT", country: "it", name: "Italiano" },
  { code: "ES", country: "es", name: "Español" },
  { code: "FR", country: "fr", name: "Français" },
  { code: "DE", country: "de", name: "Deutsch" },
  { code: "JP", country: "jp", name: "日本語" },
  { code: "KR", country: "kr", name: "한국어" },
  { code: "RU", country: "ru", name: "Русский" },
];

const getSubProductSlug = (name: string) => {
  if (name.includes("MSM")) return "msm";
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [mobileLangDropdownOpen, setMobileLangDropdownOpen] = useState(false);
  const [desktopLangOpen, setDesktopLangOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
  const [activeCategory, setActiveCategory] = useState<typeof productCategories[0] | null>(null);
  const [isSubProductsExpanded, setIsSubProductsExpanded] = useState(false);
  const [mobileActiveCategory, setMobileActiveCategory] = useState<string | null>(null);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsSubProductsExpanded(false);
  }, [activeCategory]);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    setMobileLangDropdownOpen(false);
    setDesktopLangOpen(false);
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="h-[85px] w-full bg-background sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1290px] mx-auto h-full flex items-center justify-between px-4 lg:px-4 relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/logo.webp" alt="Athos Collagen" className="lg:w-35 lg:h-[60px] w-30 h-[40px]" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex h-full gap-6">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="group relative h-full flex items-center"
              onMouseEnter={() => {
                if (item.hasMegaMenu) {
                  setIsMegaMenuOpen(true);
                }
              }}
              onMouseLeave={() => {
                if (item.hasMegaMenu) {
                  setIsMegaMenuOpen(false);
                  setActiveCategory(null);
                }
              }}
            >
              {item.hasMegaMenu ? (
                <>
                  <button
                    className="flex items-center gap-1 text-base transition-colors text-black group-hover:text-primary py-4"
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  {/* Mega Menu Dropdown */}
                  <div
                    style={{ left: 'calc(50% - 180px)' }}
                    className={`absolute top-full bg-white border border-gray-200 rounded-xl shadow-2xl transition-all duration-300 z-50 overflow-hidden flex ${isMegaMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                      } ${activeCategory ? "w-[680px]" : "w-[360px]"
                      }`}
                  >
                    {/* Left Column: Categories List */}
                    <div className={`transition-all duration-300 p-2 space-y-1 ${activeCategory ? "w-[360px] bg-gray-50/50 border-r border-gray-100" : "w-full bg-white"
                      }`}>
                      {productCategories.map((cat) => (
                        <div
                          key={cat.title}
                          onClick={() => setActiveCategory(activeCategory?.title === cat.title ? null : cat)}
                          className={`flex items-center justify-between px-2.5 py-2 rounded-lg cursor-pointer transition-all duration-200 ${activeCategory?.title === cat.title
                              ? "bg-[#EDF5F8] text-[#1D7AA3] font-semibold"
                              : "text-black hover:bg-gray-100"
                            }`}
                        >
                          <span className="flex-1 text-[13px] flex items-center whitespace-nowrap">
                            {cat.title}
                          </span>
                          <ChevronRight className={`w-3.5 h-3.5 transition-colors ${activeCategory?.title === cat.title
                              ? "text-[#1D7AA3]"
                              : "text-gray-400"
                            }`} />
                        </div>
                      ))}
                    </div>

                    {/* Right Column: Subproducts List */}
                    <div className={`transition-all duration-300 bg-white flex flex-col justify-between ${activeCategory
                        ? "w-[320px] p-5 min-h-[350px] opacity-100 visible"
                        : "w-0 p-0 opacity-0 invisible overflow-hidden min-h-0 h-0"
                      }`}>
                      {activeCategory && (() => {
                        const hasMoreThanLimit = activeCategory.subProducts.length > 10;
                        const visibleSubProducts = hasMoreThanLimit && !isSubProductsExpanded
                          ? activeCategory.subProducts.slice(0, 8)
                          : activeCategory.subProducts;
                        const showViewMore = hasMoreThanLimit && !isSubProductsExpanded;
                        const showCategoryPageButton = !hasMoreThanLimit || isSubProductsExpanded;

                        return (
                          <>
                            <div>
                              <div className="grid grid-cols-1 gap-y-2.5 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                {visibleSubProducts.map((sub, idx) => {
                                  const subSlug = getSubProductSlug(sub);
                                  return (
                                    <Link
                                      key={idx}
                                      to={`/products/${activeCategory.slug}#${subSlug}`}
                                      className="flex items-center gap-2 text-sm text-[#555555] hover:text-[#1D7AA3] transition-colors duration-150 py-0.5"
                                      onClick={() => {
                                        setIsMegaMenuOpen(false);
                                        setActiveCategory(null);
                                      }}
                                    >
                                      <span className="text-[#66b036] text-[8px] flex-shrink-0">▶</span>
                                      <span className="font-medium leading-tight">{sub}</span>
                                    </Link>
                                  );
                                })}

                                {showViewMore && (
                                  <button
                                    onClick={() => setIsSubProductsExpanded(true)}
                                    className="text-[13px] font-bold text-[#1D7AA3] hover:text-[#3186ab] flex items-center gap-1.5 mt-2.5 w-fit hover:underline text-left cursor-pointer transition-colors"
                                  >
                                    <span>View More</span>
                                    <span>▼</span>
                                  </button>
                                )}
                              </div>
                            </div>

                            {/* Mega Menu Footer */}
                            {showCategoryPageButton && (
                              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-start">
                                <Link
                                  to={activeCategory.href}
                                  onClick={() => {
                                    setIsMegaMenuOpen(false);
                                    setActiveCategory(null);
                                  }}
                                >
                                  <Button className="btn-primary rounded-[6px_0px] text-sm px-4 py-2.5 h-auto font-semibold shadow-sm w-fit">
                                    View Category Page
                                  </Button>
                                </Link>
                              </div>
                            )}
                          </>
                        );
                      })()}
                    </div>
                  </div>
                </>
              ) : item.hasDropdown ? (
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

        {/* Desktop Right Actions: Email + Inquiry Button + Language Selector */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Email Link */}
          <a
            href="mailto:inquiry@athoscollagen.com"
            className="flex items-center gap-1.5 text-md text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>inquiry@athoscollagen.com</span>
          </a>

          {/* Inquiry Button */}
          <Link to="/inquiry">
            <Button className="btn-primary rounded-[6px_0px] px-8 text-base font-semibold py-2 h-auto">
              Inquiry
            </Button>
          </Link>

          {/* Desktop Language Selector (Right side of Inquiry Button) */}
          <div
            className="relative"
            onMouseEnter={() => setDesktopLangOpen(true)}
            onMouseLeave={() => setDesktopLangOpen(false)}
          >
            <button className="flex items-center gap-1.5 text-sm transition-colors py-1.5 px-2 rounded-md hover:bg-gray-100/80 cursor-pointer">
              <span className="text-gray-500 font-medium text-xs">{selectedLanguage.country}</span>
              <span className="font-bold text-black text-sm">{selectedLanguage.code}</span>
              <ChevronDown className={`w-3.5 h-3.5 text-gray-600 transition-transform duration-200 ${desktopLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Language Dropdown Menu */}
            {desktopLangOpen && (
              <div className="absolute right-0 top-full pt-1.5 z-50">
                <div className="bg-white border border-gray-200 rounded-lg shadow-xl min-w-[170px] overflow-hidden py-2 space-y-0.5">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageSelect(language)}
                      className={`w-full flex items-center gap-4 px-4 py-2 text-left transition-all duration-150 ${selectedLanguage.code === language.code
                          ? 'bg-[#1d7aa3]/10 text-[#1d7aa3]'
                          : 'hover:bg-gray-50 text-slate-700'
                        }`}
                    >
                      <span className="text-[12px] font-bold text-slate-400 w-5 flex-shrink-0 tracking-wider">
                        {language.code}
                      </span>
                      <span className="text-[14px] font-medium text-slate-800">
                        {language.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Language Selector & Menu Button */}
        <div className="lg:hidden flex items-center gap-3">
          {/* Language Button - Mobile Only */}
          <div className="relative">
            <button
              onClick={() => setMobileLangDropdownOpen(!mobileLangDropdownOpen)}
              className="flex items-center gap-1.5 text-sm transition-colors py-1.5 px-2 rounded-md hover:bg-gray-100/80 cursor-pointer"
            >
              <span className="text-gray-500 font-medium text-xs">{selectedLanguage.country}</span>
              <span className="font-bold text-black text-sm">{selectedLanguage.code}</span>
              <ChevronDown className={`w-3.5 h-3.5 text-gray-600 transition-transform duration-200 ${mobileLangDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Mobile Language Dropdown */}
            {mobileLangDropdownOpen && (
              <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-xl min-w-[170px] z-50 overflow-hidden py-2 space-y-0.5">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageSelect(language)}
                    className={`w-full flex items-center gap-4 px-4 py-2 text-left transition-all duration-150 ${selectedLanguage.code === language.code
                        ? 'bg-[#1d7aa3]/10 text-[#1d7aa3]'
                        : 'hover:bg-gray-50 text-slate-700'
                      }`}
                  >
                    <span className="text-[12px] font-bold text-slate-400 w-5 flex-shrink-0 tracking-wider">
                      {language.code}
                    </span>
                    <span className="text-[14px] font-medium text-slate-800">
                      {language.name}
                    </span>
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

      {/* Mobile & Tablet Dropdown Menu Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 w-full bg-white border-b border-gray-200 shadow-2xl h-[calc(100vh-85px)] overflow-y-auto z-40 custom-scrollbar">
          {/* Menu Content */}
          <ul className="flex flex-col px-6 py-6 gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.hasMegaMenu ? (
                  <div>
                    <button
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      className="flex items-center justify-between w-full text-lg py-3 text-foreground hover:text-primary border-b border-border"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {/* Mobile Dropdown Items */}
                    {mobileDropdownOpen && (
                      <ul className="mt-2 space-y-1">
                        {productCategories.map((cat) => (
                          <li key={cat.title} className="border-b border-gray-50/50 pb-1">
                            <button
                              onClick={() => setMobileActiveCategory(mobileActiveCategory === cat.title ? null : cat.title)}
                              className="w-full flex items-center justify-between py-2.5 text-[16px] text-foreground/80 hover:text-primary font-medium text-left"
                            >
                              <span className="flex-1 pr-2 text-left leading-snug">{cat.title}</span>
                              <ChevronDown className={`w-4 h-4 shrink-0 text-gray-500 transition-transform duration-200 ${mobileActiveCategory === cat.title ? 'rotate-180 text-primary' : ''}`} />
                            </button>
                            {mobileActiveCategory === cat.title && (
                              <div className="pl-2 pr-1 py-2 space-y-2 mt-1">
                                <div className="grid grid-cols-1 gap-1.5">
                                  {cat.subProducts.map((sub, sIdx) => {
                                    const subSlug = getSubProductSlug(sub);
                                    return (
                                      <Link
                                        key={sIdx}
                                        to={`/products/${cat.slug}#${subSlug}`}
                                        className="text-xs sm:text-sm text-foreground/70 hover:text-primary py-1 px-1 flex items-center gap-2 font-medium transition-colors"
                                        onClick={() => {
                                          setMobileMenuOpen(false);
                                          setMobileDropdownOpen(false);
                                          setMobileActiveCategory(null);
                                        }}
                                      >
                                        <span className="text-[#66b036] text-[8px] flex-shrink-0">▶</span>
                                        <span>{sub}</span>
                                      </Link>
                                    );
                                  })}
                                </div>
                                <div className="pt-2 border-t border-gray-200/60 mt-2">
                                  <Link
                                    to={cat.href}
                                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline py-1"
                                    onClick={() => {
                                      setMobileMenuOpen(false);
                                      setMobileDropdownOpen(false);
                                      setMobileActiveCategory(null);
                                    }}
                                  >
                                    <span>View Category Page</span>
                                    <span>→</span>
                                  </Link>
                                </div>
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : item.hasDropdown ? (
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
                <Button className="w-full rounded-[6px_0px] btn-primary py-3 text-lg">Inquiry</Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
