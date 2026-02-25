import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="bg-background h-screen flex items-center justify-center max-h-svh">
      <div className="max-w-7xl flex flex-col items-center justify-center gap-6 container mx-auto px-4">
        <h1 className="text-fluid-6xl uppercase leading-none tracking-tight font-bold font-display text-center">Modern webb och AI utan krångel</h1>
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