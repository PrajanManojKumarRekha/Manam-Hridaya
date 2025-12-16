import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";
import logoImage from "@assets/image_1765909079991.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/team", label: "Our Team" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16">
          <Link href="/" className="flex items-center gap-3">
            <img 
              src={logoImage} 
              alt="Maanam Hridaya Logo" 
              className="h-10 w-10 rounded-full object-cover"
              data-testid="img-logo"
            />
            <span className="font-serif text-xl font-semibold text-foreground" data-testid="text-brand-name">
              Maanam Hridaya
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  location === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase().replace(" ", "-")}`}
              >
                {link.label}
              </Link>
            ))}
            <Button size="sm" data-testid="button-donate">
              <Heart className="w-4 h-4 mr-2" />
              Donate
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    location === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase().replace(" ", "-")}`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button size="sm" className="w-full" data-testid="button-mobile-donate">
                  <Heart className="w-4 h-4 mr-2" />
                  Donate
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
