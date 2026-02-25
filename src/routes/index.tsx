import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/hero";
import { ClientLogos } from "@/components/client-logos";
import { Pricing } from "@/components/pricing";
import { WhatWeHelpWith } from "@/components/what-we-help-with";
import { Testimonials } from "@/components/testimonials";
import { CallToAction } from "@/components/call-to-action";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main>
      <Hero />
      <ClientLogos />
      <Pricing />
      <WhatWeHelpWith />
      <Testimonials />
      <CallToAction />
      <footer className="mt-48 px-4">
        <div className="container mx-auto max-w-7xl bg-[#241F1F] text-secondary-foreground p-10 rounded-2xl gap-10 flex flex-col justify-between overflow-hidden">
          <div className="flex flex-col gap-2 max-w-sm">
            <h3 className="uppercase text-2xl leading-none font-bold font-display">Orkesta®</h3>
            <h4 className="text-lg font-light uppercase">Modern webb och riktig AI – transparent, utan krångel.</h4>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-2">
            <nav>
              <h5 className="text-2xl font-medium mb-4">Kontakt</h5>
              <ul className="flex flex-col gap-2 font-light">
                <li>
                  <a href="mailto:info@orkesta.se">hello@orkesta.se</a>
                </li>
                <li>
                  <a href="tel:+46701234567">+46 (0)73 698 67 52</a>
                </li>
                <li>
                  Stockholm, Sverige
                </li>
              </ul>
            </nav>

            <div className="mt-10 flex flex-col items-center gap-2">
              <Button size="lg">
                Boka samtal nu
              </Button>
              <span className="text-xs font-light">Vi hör av oss inom 24 timmar</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-sm font-light uppercase order-last md:order-first">© {new Date().getFullYear()} Orkesta Studio. All rights reserved.</p>
            <nav className="text-sm uppercase order-first md:order-last">
              <ul className="flex items-center flex-wrap gap-1">
                <li>
                  <a href="/">Integritetspolicy</a>
                </li>
                <span>•</span>
                <li>
                  <a href="/">Användarvillkor</a>
                </li>
                <span>•</span>
                <li>
                  <a href="/">Cookies</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="flex flex-col w-full items-stretch mask-b-from-0% container-type-inline-size mt-20">
          <h3 className="font-black tracking-tight leading-none text-[clamp(4rem,15cqw,24rem)] uppercase font-display text-foreground text-center">Orkesta®</h3>
        </div>
      </footer>
    </main>
  );
}