import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Calendar } from "lucide-react";

import classroomImage from "@assets/generated_images/children_learning_in_classroom.png";
import treePlantingImage from "@assets/generated_images/community_tree_planting_event.png";
import hygieneImage from "@assets/generated_images/health_hygiene_workshop_children.png";
import digitalImage from "@assets/generated_images/digital_literacy_class_children.png";

// todo: remove mock functionality - replace with API data
const pastEvents = [
  {
    id: 1,
    title: "Basic Education Workshop",
    date: "November 15, 2024",
    description: "A comprehensive workshop teaching foundational reading and writing skills to 50+ children in the local community.",
    image: classroomImage,
    category: "Education",
  },
  {
    id: 2,
    title: "Community Tree Plantation",
    date: "October 22, 2024",
    description: "Volunteers and children came together to plant 200+ saplings, promoting environmental awareness.",
    image: treePlantingImage,
    category: "Environment",
  },
  {
    id: 3,
    title: "Health & Hygiene Camp",
    date: "September 10, 2024",
    description: "Interactive sessions on personal hygiene, handwashing techniques, and healthy habits for young learners.",
    image: hygieneImage,
    category: "Health",
  },
  {
    id: 4,
    title: "Digital Literacy Program",
    date: "August 5, 2024",
    description: "Introducing children to computers and the internet, teaching them safe online practices and basic skills.",
    image: digitalImage,
    category: "Technology",
  },
];

export default function PastEventsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider" data-testid="text-past-events-label">
            Our Impact
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2" data-testid="text-past-events-title">
            Events We've Organized
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto" data-testid="text-past-events-desc">
            Take a look at some of the meaningful events we've organized to make a difference in our community.
          </p>
        </div>

        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="flex gap-6 pb-4">
            {pastEvents.map((event) => (
              <Card 
                key={event.id} 
                className="w-[350px] flex-shrink-0 overflow-visible hover-elevate active-elevate-2 transition-transform duration-200"
                data-testid={`card-event-${event.id}`}
              >
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-t-md"
                    data-testid={`img-event-${event.id}`}
                  />
                  <Badge 
                    className="absolute top-3 right-3" 
                    variant="secondary"
                    data-testid={`badge-category-${event.id}`}
                  >
                    {event.category}
                  </Badge>
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                    <Calendar className="w-4 h-4" />
                    <span data-testid={`text-event-date-${event.id}`}>{event.date}</span>
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2 whitespace-normal" data-testid={`text-event-title-${event.id}`}>
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm whitespace-normal line-clamp-2" data-testid={`text-event-desc-${event.id}`}>
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
}
