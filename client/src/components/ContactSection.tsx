import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Heart, ExternalLink } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider" data-testid="text-contact-label">
              Get In Touch
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6" data-testid="text-contact-title">
              Contact Us
            </h2>
            <p className="text-muted-foreground mb-8" data-testid="text-contact-desc">
              We'd love to hear from you! Whether you want to volunteer, partner with us, 
              or simply learn more about our work, reach out and we'll get back to you soon.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Email</div>
                  <a 
                    href="mailto:contact@manamhridaya.org" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-email"
                  >
                    contact@manamhridaya.org
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Phone</div>
                  <a 
                    href="tel:+919876543210" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-phone"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Location</div>
                  <span className="text-muted-foreground" data-testid="text-address">
                    Bangalore, Karnataka, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          <Card className="overflow-visible border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/10">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4" data-testid="text-donate-title">
                  Support Our Cause
                </h3>
                <p className="text-muted-foreground mb-6" data-testid="text-donate-desc">
                  Your contribution helps us reach more children and create lasting change. 
                  Every donation, big or small, makes a difference in a child's life.
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  To contribute, please contact us directly via email or phone. 
                  We accept donations through various payment methods including bank transfer, UPI, and more.
                </p>
                <Button size="lg" className="w-full sm:w-auto" data-testid="button-contact-donate">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact to Donate
                </Button>
                <div className="mt-4">
                  <a 
                    href="mailto:donate@manamhridaya.org" 
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                    data-testid="link-donate-email"
                  >
                    donate@manamhridaya.org
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
