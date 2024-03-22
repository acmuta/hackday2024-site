"use client";
import Image from "next/image";
import Navbar from "./components/NavBar";
import Homepage from "./components/Hero";
import { TracingBeam } from "./components/ui/tracing-beam";
import FAQ from "./components/what-is-hackday";
import Venue from "./components/VenueLocation";
import Team from "./components/frame-component";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="">
      <div className="h-full">
        <Navbar></Navbar>

        <TracingBeam className="max-w-4xl md:max-w-7xl pb-24">
          <Homepage></Homepage>
          <div id="faqSection">
            <FAQ></FAQ>
          </div>
          <div id="venueSection">
            <Venue></Venue>
          </div>
        </TracingBeam>

        {/* <Footer></Footer> */}
      </div>
    </main>
  );
}
