import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/hero";
import { ClientLogos } from "@/components/client-logos";
import { Pricing } from "@/components/pricing";
import { WhatWeHelpWith } from "@/components/what-we-help-with";
import { Testimonials } from "@/components/testimonials";
import { CallToAction } from "@/components/call-to-action";
import { AppFooter } from "@/components/app-footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        name: "title",
        content: "Orkesta - Modern webbdesign och AI utan krångel",
      },
      {
        name: "description",
        content: "Behöver ni modern webbdesign, AI-integration och transparent prissättning? ORKESTA är webbyrån för svenska bolag – månadsabonnemang från 4 900 kr. Inga timpriser, snabb leverans. Boka samtal idag!",
      },
    ],
  }),
  component: App
});

function App() {
  return (
    <main>
      <div className="relative z-10 bg-background pb-4">
        <Hero />
        <ClientLogos />
        <Pricing />
        <WhatWeHelpWith />
        <Testimonials />
        <CallToAction />
        <AppFooter />
      </div>
      <div className="sticky bottom-0 z-0 pb-10 pt-20 px-4">
        <div className="container mx-auto">
          <img src="/orkesta-mask.svg" className="w-full h-full object-cover" alt="Orkesta Logo" />
        </div>
      </div>
    </main>
  );
}