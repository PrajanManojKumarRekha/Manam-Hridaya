import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  initials: string;
}

export default function TeamMemberCard({ name, role, description, initials }: TeamMemberProps) {
  return (
    <Card className="overflow-visible hover-elevate active-elevate-2 transition-transform duration-200">
      <CardContent className="p-6 text-center">
        <Avatar className="w-24 h-24 mx-auto mb-4 border-2 border-primary/20">
          <AvatarFallback className="bg-primary/10 text-primary text-xl font-serif font-semibold">
            {initials}
          </AvatarFallback>
        </Avatar>

        <h3 className="font-serif text-xl font-semibold text-foreground mb-1" data-testid={`text-member-name-${name.toLowerCase().replace(" ", "-")}`}>
          {name}
        </h3>
        
        <div className="text-primary text-sm font-medium uppercase tracking-wider mb-4" data-testid={`text-member-role-${name.toLowerCase().replace(" ", "-")}`}>
          {role}
        </div>

        <div className="w-12 h-0.5 bg-primary/20 mx-auto mb-4" />

        <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`text-member-desc-${name.toLowerCase().replace(" ", "-")}`}>
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
