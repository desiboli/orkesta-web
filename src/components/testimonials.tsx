export function Testimonials() {
  return (
    <section>
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-fluid-4xl font-bold font-display text-center">Därför väljer svenska
          bolag oss</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
          <div className="flex flex-col gap-10 col-span-1">
            <p className="text-fluid-xl font-semibold">Orkesta Studio hjälpte oss modernisera vår digitala närvaro och effektivisera interna processer. Resultatet märktes direkt.</p>

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground text-center leading-10 text-fluid-sm font-medium">EL</div>
              <div className="flex flex-col">
                <p className="font-medium">Erik Lydecker</p>
                <p className="text-sm font-light">CEO Orkesta</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 col-span-1">
            <p className="text-fluid-xl font-semibold">Snabbt, tydligt och inga oändliga möten.</p>

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground text-center leading-10 text-fluid-sm font-medium">AS</div>
              <div className="flex flex-col">
                <p className="font-medium">Anna Svensson</p>
                <p className="text-sm font-light">CEO Svensson AB</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 col-span-1 md:col-start-2">
            <p className="text-fluid-xl font-semibold">Äntligen raka priser och AI som faktiskt fungerar.</p>

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground text-center leading-10 text-fluid-sm font-medium">JE</div>
              <div className="flex flex-col">
                <p className="font-medium">Johan Eriksson</p>
                <p className="text-sm font-light">CEO Eriksson AB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}