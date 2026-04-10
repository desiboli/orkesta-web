import { BadgeCheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCalEmbed } from "@/hooks/use-cal-embed";
import * as m from "@/paraglide/messages";
import { getLocale } from "@/paraglide/runtime";

export function Pricing() {
  useCalEmbed()
  const locale = getLocale();
  const pricing = [
    {
      name: m.pricing_plan_bas(),
      price: 7900,
      featured: false,
      features: [
        m.pricing_feature_1_bas(),
        m.pricing_feature_2_bas(),
        m.pricing_feature_3_bas(),
      ],
    },
    {
      name: m.pricing_plan_standard(),
      price: 14900,
      featured: true,
      features: [
        m.pricing_feature_1_standard(),
        m.pricing_feature_2_standard(),
        m.pricing_feature_3_standard(),
        m.pricing_feature_4_standard(),
      ],
    },
    {
      name: m.pricing_plan_premium(),
      price: 29900,
      featured: false,
      features: [
        m.pricing_feature_1_premium(),
        m.pricing_feature_2_premium(),
        m.pricing_feature_3_premium(),
        m.pricing_feature_4_premium(),
      ],
    },
  ];

  return (
    <section id="pricing">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          <h2 className="text-fluid-4xl font-bold font-display text-center leading-none">{m.pricing_heading()}</h2>
          <h3 className="text-fluid-xl text-center leading-tight">{m.pricing_subheading()}</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10 md:mt-20">
          {pricing.map((item) => (
            <div key={item.name} className={cn("bg-card/30 rounded-xl p-10 flex flex-col justify-between", item.featured && "bg-secondary text-secondary-foreground")}>
              <h3 className={cn("text-fluid-lg", item.featured && "text-fluid-2xl")}>{item.name}</h3>
              <p className={cn("text-fluid-2xl font-bold", item.featured && "text-fluid-3xl")}>
                {Intl.NumberFormat(locale === "sv" ? "sv-SE" : "en-GB").format(item.price)} kr/mån
              </p>

              <div className="flex flex-col gap-2 mt-10">
                {item.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <BadgeCheckIcon className={cn("size-4", item.featured && "text-primary")} />
                    <p className="">{feature}</p>
                  </div>
                ))}
              </div>

              <Button
                variant={item.featured ? "default" : "secondary"}
                size={item.featured ? "lg" : "default"}
                className="w-full mt-20"
                data-cal-namespace="quickchat"
                data-cal-link="team/orkesto/quickchat"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              >
                {m.pricing_cta()}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-sm font-light text-center mt-10">{m.pricing_footer()}</p>
      </div>
    </section>
  )
}