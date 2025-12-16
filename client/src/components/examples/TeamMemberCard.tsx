import TeamMemberCard from "../TeamMemberCard";

export default function TeamMemberCardExample() {
  return (
    <div className="max-w-sm mx-auto">
      <TeamMemberCard
        name="Diya Karthik"
        role="President"
        description="Diya leads Maanam Hridaya with passion and vision, coordinating all organizational activities and building partnerships with communities."
        initials="DK"
      />
    </div>
  );
}
