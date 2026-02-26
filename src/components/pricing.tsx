import { BadgeCheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const pricing = [
  {
    name: "Bas",
    price: 7900,
    featured: false,
    features: [
      "Löpande säkerhet & uppdateringar",
      "Mindre ändringar & buggfixar",
      "Månatlig AI-rådgivning (30 min)",
      "~10–15 timmar inkluderat/mån",
    ],
  },
  {
    name: "Standard",
    price: 14900,
    featured: true,
    features: [
      "Ny modern design & utveckling",
      "Praktisk AI-integration (chat, automation m.m.)",
      "Månadsvis optimering & rapporter",
      "Prioriterad support (inom 4 timmar)",
      "~20–40 timmar inkluderat/mån"
    ],
  },
  {
    name: "Premium",
    price: 29900,
    featured: false,
    features: [
      "Full AI-transformation & custom verktyg",
      "Dedikerad strateg & löpande rådgivning",
      "Avancerad analys & skalbar arkitektur",
      "VIP-support & quarterly deep-dive",
      "~50–80 timmar inkluderat/mån"
    ],
  },
];

export function Pricing() {
  return (
    <section>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          <h2 className="text-fluid-4xl font-bold font-display text-center">Våra abonnemang</h2>
          <h3 className="text-fluid-xl text-center leading-tight">Månadspris – transparent och förutsägbart.
            Inga timrapporter. Inga minimimånader. Uppsägning när du vill (30 dagars varsel).
            Du betalar bara för det du använder – vi tar risken.</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10 md:mt-20">
          {pricing.map((item) => (
            <div key={item.name} className={cn("bg-card/30 rounded-xl p-10 flex flex-col justify-between", item.featured && "bg-secondary text-secondary-foreground")}>
              <h3 className={cn("text-fluid-lg", item.featured && "text-fluid-2xl")}>{item.name}</h3>
              <p className={cn("text-fluid-2xl font-bold", item.featured && "text-fluid-3xl")}>{Intl.NumberFormat('sv-SE').format(item.price)} kr/mån</p>

              <div className="flex flex-col gap-2 mt-10">
                {item.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <BadgeCheckIcon className={cn("size-4", item.featured && "text-primary")} />
                    <p className="">{feature}</p>
                  </div>
                ))}
              </div>


              <Button variant={item.featured ? "default" : "secondary"} size={item.featured ? "lg" : "default"} className="w-full mt-20">
                Kom igång
              </Button>
            </div>
          ))}
        </div>

        <p className="text-sm font-light text-center mt-10">Inga timrapporter. Inga extrakostnader. Byte eller uppsägning när du vill efter första månaden.</p>
      </div>
    </section>
  )
}