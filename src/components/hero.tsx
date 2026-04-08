import { Button } from "@/components/ui/button";
import { Highlighter } from "./ui/highlighter";
import { ClientLogos } from "./client-logos";
import * as m from "@/paraglide/messages";

export function Hero() {
  return (
    <section className="bg-background h-screen flex flex-col items-center justify-center max-h-svh">
      <div className="max-w-7xl flex flex-col items-center justify-center gap-6 container mx-auto px-4 flex-1">
        <h1 className="text-fluid-6xl uppercase leading-none tracking-tight font-bold font-display text-center">
          {m.hero_title_1()}{" "}
          <Highlighter action="highlight" strokeWidth={4} color="#FF9800" animationDuration={800} iterations={3} padding={10}>
            {m.hero_title_2()}
          </Highlighter>{" "}
          {m.hero_title_3()}{" "}
          <Highlighter action="highlight" strokeWidth={4} color="#87CEFA" animationDuration={800} iterations={3} padding={10}>
            {m.hero_title_4()}
          </Highlighter>{" "}
          <Highlighter action="highlight" strokeWidth={4} color="#E4FF30" animationDuration={800} iterations={3} padding={10}>
            {m.hero_title_5()}
          </Highlighter>
        </h1>
        <p className="text-fluid-lg text-center max-w-4xl">
          {m.hero_description()}
        </p>

        <div className="mt-10 flex flex-col items-center gap-2">
          <Button size="lg">
            {m.hero_cta()}
          </Button>
          <p className="text-sm font-light">{m.hero_subtitle()}</p>
        </div>
      </div>

      <ClientLogos />

    </section>
  )
}