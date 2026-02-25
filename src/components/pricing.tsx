import { BadgeCheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const pricing = [
  {
    name: "Basic",
    price: 4900,
    featured: false,
    features: [
      "Löpande säkerhet & uppdateringar",
      "Mindre ändringar",
      "Månatlig AI-rådgivning (30 min)",
    ],
  },
  {
    name: "Pro",
    price: 9900,
    featured: true,
    features: [
      "Ny modern design & utveckling",
      "Praktisk AI-integration",
      "Månadsvis optimering",
      "Prioriterad support",
    ],
  },
  {
    name: "Premium",
    price: 19900,
    featured: false,
    features: [
      "Full AI-transformation",
      "Custom verktyg & system",
      "Dedikerad kontaktperson",
      "Regelbundna genomgångar",
    ],
  },
];

export function Pricing() {
  return (
    <section>
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-fluid-4xl font-bold font-display text-center">Våra abonnemang</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 md:mt-20">
          {pricing.map((item) => (
            <div key={item.name} className={cn("bg-card rounded-xl p-10 flex flex-col justify-between", item.featured && "bg-secondary text-secondary-foreground")}>
              <h3 className="text-fluid-lg">{item.name}</h3>
              <p className="text-fluid-2xl font-bold">{Intl.NumberFormat('sv-SE').format(item.price)} kr/mån</p>

              <div className="flex flex-col gap-2 mt-10">
                {item.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <BadgeCheckIcon className="w-4 h-4" />
                    <p className="">{feature}</p>
                  </div>
                ))}
              </div>


              <Button variant={item.featured ? "default" : "secondary"} className="w-full mt-20">
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