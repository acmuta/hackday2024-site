"use client";
import Navbar from "@/components/navigation/NavBar";
import Homepage from "@/components/Hero";
import { TracingBeam } from "@/components/ui/tracing-beam";
import FAQ from "@/components/what-is-hackday";
import Venue from "@/components/VenueLocation";
import OrganizingTeam from "@/components/OrganizingTeam";

export default function Home() {
  return (
    <main className="">
        <Navbar />

        <TracingBeam className="max-w-4xl md:max-w-7xl pb-24">
          <Homepage />
          <div id="faqSection">
            <FAQ />
          </div>
          <div id="venueSection">
            <Venue/>
          </div>
          <OrganizingTeam/>
        </TracingBeam>

        {/* <Footer /> */}
    </main>
  );
}
