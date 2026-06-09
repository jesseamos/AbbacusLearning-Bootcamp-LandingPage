import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Beyond } from "@/components/site/Beyond";
import { Opportunity } from "@/components/site/Opportunity";
import { Curriculum } from "@/components/site/Curriculum";
import { Community } from "@/components/site/Community";
import { Competition } from "@/components/site/Competition";
import { Mentorship } from "@/components/site/Mentorship";
import { Career } from "@/components/site/Career";
import { Testimonials } from "@/components/site/Testimonials";
import { About } from "@/components/site/About";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-slate-100">
      <Navbar />
      <Hero />
      <Beyond />
      <Opportunity />
      {/* <Curriculum /> */}
      <Community />
      <Competition />
      <Mentorship />
      <Career />
      <Testimonials />
      <About />
      <FinalCTA />
      <Footer />
    </main>
  );
}
