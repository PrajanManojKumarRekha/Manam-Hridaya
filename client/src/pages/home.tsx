import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import PastEventsSection from "@/components/PastEventsSection";
import UpcomingEventsSection from "@/components/UpcomingEventsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <MissionSection />
        <PastEventsSection />
        <UpcomingEventsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
