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