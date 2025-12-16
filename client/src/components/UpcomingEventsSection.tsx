import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";

// todo: remove mock functionality - replace with API data
const upcomingEvents = [
  {
    id: 1,
    title: "Winter Learning Festival",
    date: "January 20, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Community Center Hall",
    description: "A full day of interactive learning activities, games, and workshops for children of all ages.",
    category: "Festival",
  },
  {
    id: 2,
    title: "Computer Basics for Kids",
    date: "February 5, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "M&H Learning Center",
    description: "Introduction to computers, typing, and basic internet safety for beginners.",
    category: "Technology",
  },
  {
    id: 3,
    title: "Health Awareness Week",
    date: "February 14-20, 2025",
    time: "Various Times",
    location: "Multiple Locations",
    description: "Week-long series of health camps focusing on nutrition, hygiene, and physical wellness.",
    category: "Health",
  },
];

export default function UpcomingEventsSection() {
  const handleRegister = (eventId: number) => {
    console.log(`Registration triggered for event ${eventId}`);
  };

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider" data-testid="text-upcoming-label">
            Join Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2" data-testid="text-upcoming-title">
            Upcoming Events
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto" data-testid="text-upcoming-desc">
            Be part of our upcoming initiatives and help us create a positive impact in our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <Card 
              key={event.id} 
              className="flex flex-col overflow-visible hover-elevate active-elevate-2 transition-transform duration-200"
              data-testid={`card-upcoming-${event.id}`}
            >
              <CardContent className="flex-1 p-6">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <Badge variant="default" data-testid={`badge-upcoming-category-${event.id}`}>
                    {event.category}
                  </Badge>
                </div>

                <h3 className="font-semibold text-xl text-foreground mb-3" data-testid={`text-upcoming-title-${event.id}`}>
                  {event.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span data-testid={`text-upcoming-date-${event.id}`}>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    <span data-testid={`text-upcoming-time-${event.id}`}>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span data-testid={`text-upcoming-location-${event.id}`}>{event.location}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm line-clamp-2" data-testid={`text-upcoming-desc-${event.id}`}>
                  {event.description}
                </p>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={() => handleRegister(event.id)}
                  data-testid={`button-register-${event.id}`}
                >
                  Register Interest
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
