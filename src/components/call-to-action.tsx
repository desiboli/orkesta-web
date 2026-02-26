import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section>
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center px-4 md:gap-10">
        <div className="flex flex-col gap-6 max-w-2xl">
          <h2 className="text-fluid-4xl font-bold font-display leading-none text-center md:text-left">Ska vi prata?</h2>
          <h3 className="text-fluid-xl text-center md:text-left">Ett förutsättningslöst samtal tar 30 minuter. Vi lyssnar först – sedan berättar vi vad vi kan göra för er.</h3>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2">
          <Button size="lg">
            Boka samtal (30 min, kostnadsfritt)
          </Button>
          <span className="text-sm font-light">Vi hör av oss inom 24 timmar</span>
        </div>
      </div>
    </section>
  )
}