import * as m from "@/paraglide/messages";

export function Testimonials() {
  return (
    <section>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          <h2 className="text-fluid-4xl font-bold font-display text-center leading-none whitespace-pre-line">
            {m.testimonials_heading()}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 md:mt-20">
          <div className="flex flex-col md:gap-10 gap-4 col-span-1">
            <p className="text-fluid-xl font-semibold">{m.testimonial_1()}</p>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground text-center leading-10 text-fluid-sm font-medium">GB</div>
              <div className="flex flex-col">
                <p className="font-medium">{m.testimonial_1_name()}</p>
                <p className="text-sm font-light">{m.testimonial_1_role()}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-4 col-span-1">
            <p className="text-fluid-xl font-semibold">{m.testimonial_2()}</p>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground text-center leading-10 text-fluid-sm font-medium">AS</div>
              <div className="flex flex-col">
                <p className="font-medium">{m.testimonial_2_name()}</p>
                <p className="text-sm font-light">{m.testimonial_2_role()}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-4 col-span-1 md:col-start-2">
            <p className="text-fluid-xl font-semibold">{m.testimonial_3()}</p>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground text-center leading-10 text-fluid-sm font-medium">JE</div>
              <div className="flex flex-col">
                <p className="font-medium">{m.testimonial_3_name()}</p>
                <p className="text-sm font-light">{m.testimonial_3_role()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}