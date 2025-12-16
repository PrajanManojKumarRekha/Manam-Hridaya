import missionImage from "@assets/image_1765909103218.png";

export default function MissionSection() {
  return (
    <section id="mission" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-md overflow-hidden shadow-lg border border-border">
              <img
                src={missionImage}
                alt="Our Mission"
                className="w-full h-auto"
                data-testid="img-mission"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/30 rounded-full blur-2xl" />
          </div>

          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider" data-testid="text-mission-label">
              Our Mission
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6" data-testid="text-mission-title">
              Creating a Chain of Knowledge
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p data-testid="text-mission-p1">
                At Maanam Hridaya, we believe every child deserves access to quality education 
                that goes beyond textbooks. Our programs focus on essential life skills that 
                empower children to thrive in the modern world.
              </p>
              <p data-testid="text-mission-p2">
                We teach digital literacy, helping children navigate technology safely and 
                effectively. We emphasize basic hygiene practices that promote health and 
                well-being in their communities.
              </p>
              <p data-testid="text-mission-p3">
                Our unique approach creates a ripple effect—each child we teach becomes 
                a teacher for the next, spreading knowledge throughout their community 
                and creating lasting change.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center" data-testid="stat-children">
                <div className="font-serif text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Children Reached</div>
              </div>
              <div className="text-center" data-testid="stat-events">
                <div className="font-serif text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Events Organized</div>
              </div>
              <div className="text-center" data-testid="stat-volunteers">
                <div className="font-serif text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Volunteers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
