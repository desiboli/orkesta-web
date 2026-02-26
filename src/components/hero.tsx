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
        <p className="text-fluid-lg text-center max-w-4xl">
          Transparent månadsabonnemang från 4 900 kr/mån – design, utveckling, AI-integration och support. Inga timpriser, inga överraskningar. Vi hjälper svenska små och medelstora bolag att modernisera digitalt och få resultat snabbt.
        </p>

        <div className="mt-10 flex flex-col items-center gap-2">
          <Button size="lg">
            Boka kostnadsfritt samtal (30 min)
          </Button>
          <p className="text-sm font-light">Snabb leverans · Sverige-baserat · AI som faktiskt sparar tid</p>
        </div>
      </div>
    </section>
  )
}