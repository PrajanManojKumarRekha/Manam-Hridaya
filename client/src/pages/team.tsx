import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamMemberCard from "@/components/TeamMemberCard";

// todo: remove mock functionality - replace with API data
const teamMembers = [
  {
    name: "Diya Karthik",
    role: "President",
    description: "Diya leads Maanam Hridaya with passion and vision, coordinating all organizational activities and building partnerships with communities.",
    initials: "DK",
  },
  {
    name: "Prajan",
    role: "Lead Web Developer",
    description: "Prajan handles all technical aspects of our digital presence, ensuring our message reaches communities far and wide through technology.",
    initials: "PR",
  },
  {
    name: "Arjun Menon",
    role: "Vice President",
    description: "Arjun supports organizational leadership and manages volunteer coordination, ensuring smooth execution of all our programs.",
    initials: "AM",
  },
  {
    name: "Sneha Reddy",
    role: "Education Director",
    description: "Sneha designs and oversees our educational curriculum, bringing innovative teaching methods to make learning engaging for children.",
    initials: "SR",
  },
  {
    name: "Kiran Sharma",
    role: "Event Coordinator",
    description: "Kiran plans and executes our community events, ensuring each initiative creates meaningful impact and lasting memories.",
    initials: "KS",
  },
  {
    name: "Meera Patel",
    role: "Outreach Lead",
    description: "Meera connects with communities and organizations to expand our reach and build lasting relationships for greater impact.",
    initials: "MP",
  },
];

export default function Team() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider" data-testid="text-team-label">
                Meet The Team
              </span>
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4" data-testid="text-team-title">
                Our Core Members
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-team-desc">
                Behind Maanam Hridaya is a dedicated team of volunteers who work tirelessly 
                to bring education and hope to children in our community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <TeamMemberCard
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  description={member.description}
                  initials={member.initials}
                />
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="inline-block bg-card border border-border rounded-md p-8 max-w-2xl">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4" data-testid="text-join-title">
                  Want to Join Our Team?
                </h3>
                <p className="text-muted-foreground mb-4" data-testid="text-join-desc">
                  We're always looking for passionate individuals who want to make a difference. 
                  If you'd like to volunteer or contribute your skills, we'd love to hear from you!
                </p>
                <a 
                  href="mailto:volunteer@manamhridaya.org" 
                  className="text-primary hover:underline font-medium"
                  data-testid="link-volunteer"
                >
                  volunteer@manamhridaya.org
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
