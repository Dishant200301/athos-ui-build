import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Fish Collagen Peptide", href: "/fish-collagen-peptide" },
  { label: "Fish Gelatin", href: "/fish-gelatin" },
  { label: "Applications", href: "#", hasDropdown: true },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="h-[68px] w-full bg-background sticky top-0 z-50 shadow-sm">
      <div className="container-custom h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">A</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-bold text-primary text-lg">Athos Collagen</span>
            <span className="text-xs text-muted-foreground block">Pvt Ltd</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.hasDropdown ? (
                <a
                  href={item.href}
                  className="flex items-center gap-1 text-base transition-colors text-foreground/55 hover:text-primary"
                >
                  {item.label}
                  <ChevronDown className="w-4 h-4" />
                </a>
              ) : (
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 text-base transition-colors ${
                    isActive(item.href)
                      ? "text-primary font-medium"
                      : "text-foreground/55 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Inquiry Button */}
        <Button className="hidden lg:flex btn-primary">
          Inquiry
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[68px] left-0 right-0 bg-background border-b border-border shadow-lg animate-fade-in">
          <ul className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.hasDropdown ? (
                  <a
                    href={item.href}
                    className="flex items-center gap-1 text-base py-2 text-foreground/55 hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className={`flex items-center gap-1 text-base py-2 ${
                      isActive(item.href)
                        ? "text-primary font-medium"
                        : "text-foreground/55 hover:text-primary"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Button className="w-full btn-primary mt-2">Inquiry</Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
