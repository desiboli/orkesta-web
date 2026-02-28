import { Button } from "@/components/ui/button";
import * as m from "@/paraglide/messages";

export function CallToAction() {
  return (
    <section>
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center px-4 md:gap-10">
        <div className="flex flex-col gap-6 max-w-2xl">
          <h2 className="text-fluid-4xl font-bold font-display leading-none text-center md:text-left">{m.cta_heading()}</h2>
          <h3 className="text-fluid-xl text-center md:text-left">{m.cta_description()}</h3>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2">
          <Button size="lg">
            {m.cta_button()}
          </Button>
          <span className="text-sm font-light">{m.cta_footer()}</span>
        </div>
      </div>
    </section>
  )
}