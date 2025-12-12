
import Hero from "@/components/shared/Hero"
import GrowthStory from "./_components/growth-story"
import TeamMembers from "./_components/team-members"
import TravelAgency from "./_components/ravel-agency"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
     
      <Hero title="About Us" description="we believe travel is more than just a journey – it’s an adventure, an opportunity to explore new cultures, landscapes, and stories. Whether you’re a seasoned traveler or planning your first trip, our goal is to make your travel dreams come true with personalized itineraries, tips, and destination guides to suit every style of adventure.   " imageUrl="/assets/hero-aboutbg.jpg" height="583px"/>
      <div className="flex flex-col gap-20 py-16 md:gap-32 md:py-24">
        <TravelAgency />
        <GrowthStory />
        <TeamMembers />
      </div>
    </main>
  )
}
