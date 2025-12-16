import { Link } from "wouter";
import { Heart } from "lucide-react";
import logoImage from "@assets/image_1765909079991.png";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logoImage} 
                alt="Maanam Hridaya" 
                className="h-10 w-10 rounded-full object-cover"
                data-testid="img-footer-logo"
              />
              <span className="font-serif text-lg font-semibold text-foreground">
                Maanam Hridaya
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed" data-testid="text-footer-about">
              Empowering children with essential digital literacy and basic hygiene 
              knowledge—until each child becomes a teacher for the next.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  data-testid="link-footer-home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/team" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  data-testid="link-footer-team"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <a 
                  href="#mission" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  data-testid="link-footer-mission"
                >
                  Our Mission
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a 
                  href="mailto:contact@manamhridaya.org" 
                  className="hover:text-primary transition-colors"
                  data-testid="link-footer-email"
                >
                  contact@manamhridaya.org
                </a>
              </li>
              <li>
                <a 
                  href="tel:+919876543210" 
                  className="hover:text-primary transition-colors"
                  data-testid="link-footer-phone"
                >
                  +91 98765 43210
                </a>
              </li>
              <li data-testid="text-footer-location">Bangalore, Karnataka, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm" data-testid="text-copyright">
              2024 Maanam Hridaya. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-destructive" /> for the community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
