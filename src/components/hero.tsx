import { Button } from "@/components/ui/button";
import { Highlighter } from "./ui/highlighter";

export function Hero() {
  return (
    <section className="bg-background h-screen flex items-center justify-center max-h-svh">
      <div className="max-w-7xl flex flex-col items-center justify-center gap-6 container mx-auto px-4">
        <h1 className="text-fluid-6xl uppercase leading-none tracking-tight font-bold font-display text-center">Modern {" "}
          <Highlighter action="highlight" strokeWidth={4} color="#FF9800" animationDuration={800} iterations={3} padding={10}>
            webb
          </Highlighter>{" "} och {" "}
          <Highlighter action="highlight" strokeWidth={4} color="#87CEFA" animationDuration={800} iterations={3} padding={10}>
            AI
          </Highlighter> {" "}
          <Highlighter action="highlight" strokeWidth={4} color="#E4FF30" animationDuration={800} iterations={3} padding={10}>
            utan krångel
          </Highlighter>{" "}</h1>
        <p className="text-fluid-lg text-center">
          Transparent månadspris från 4 900 kr.
          <br />
          Allt ingår: design · utveckling · AI · support.
          <br />
          Inga timpriser. Inga överraskningar.
        </p>

        <div className="mt-10">
          <Button size="lg">
            Boka samtal (30 min, kostnadsfritt)
          </Button>
        </div>
      </div>
    </section>
  )
}