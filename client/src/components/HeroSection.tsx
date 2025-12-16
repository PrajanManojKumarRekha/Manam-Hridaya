import { Button } from "@/components/ui/button";
import { ArrowDown, Heart } from "lucide-react";
import logoImage from "@assets/image_1765909079991.png";

export default function HeroSection() {
  const scrollToMission = () => {
    document.getElementById("mission")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-accent/20 to-background">
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-10 left-10 w-24 h-24 text-primary/10" viewBox="0 0 100 100">
          <path d="M50 5 C20 20, 5 50, 50 95 C95 50, 80 20, 50 5" fill="currentColor" />
        </svg>
        <svg className="absolute bottom-20 right-10 w-32 h-32 text-primary/10" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M30 50 Q50 20 70 50 Q50 80 30 50" fill="currentColor" />
        </svg>
        <svg className="absolute top-1/3 right-1/4 w-16 h-16 text-chart-2/20" viewBox="0 0 50 50">
          <path d="M25 5 L30 20 L45 20 L33 30 L38 45 L25 35 L12 45 L17 30 L5 20 L20 20 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <img
            src={logoImage}
            alt="Maanam Hridaya"
            className="w-40 h-40 mx-auto rounded-full shadow-lg border-4 border-primary/20"
            data-testid="img-hero-logo"
          />
        </div>

        <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6" data-testid="text-hero-title">
          Empowering Children,
          <br />
          <span className="text-primary">One Heart at a Time</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed" data-testid="text-hero-subtitle">
          Beyond core subjects, we aim to empower children with essential digital literacy 
          and basic hygiene knowledge—until each child becomes a teacher for the next.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" data-testid="button-hero-donate">
            <Heart className="w-5 h-5 mr-2" />
            Support Our Mission
          </Button>
          <Button variant="outline" size="lg" onClick={scrollToMission} data-testid="button-learn-more">
            Learn More
            <ArrowDown className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
}
