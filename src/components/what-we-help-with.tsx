import { getServices } from "@/constants/services";
import * as m from "@/paraglide/messages";

function ImageBlock({ src, label }: { src: string; label?: string }) {
  return (
    <div className="col-span-1 order-2 md:order-0 relative h-[250px] md:h-[400px] rounded-xl overflow-hidden">
      <img
        src={src}
        alt={label ?? ""}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {label && (
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
          <span className="text-white text-shadow-lg text-2xl font-bold">{label}</span>
        </div>
      )}
    </div>
  );
}

function TextBlock({ title, description, detail }: { title: string; description: string; detail: string }) {
  return (
    <div className="col-span-1 order-1 md:order-0 flex flex-col justify-center gap-4 max-w-sm mx-auto">
      <h3 className="text-fluid-lg font-semibold">{title}</h3>
      <p>{description}</p>
      <p className="text-sm font-light">{detail}</p>
    </div>
  );
}

export function WhatWeHelpWith() {
  return (
    <section id="services">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          <h2 className="text-fluid-4xl font-bold font-display text-center leading-none">{m.services_heading()}</h2>
        </div>

        <div className="grid grid-cols-1 gap-20 mt-10 md:mt-20">
          {getServices().map((service, index) => (
            <div key={service.title} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {index % 2 === 0 ? (
                <>
                  <TextBlock title={service.title} description={service.description} detail={service.detail} />
                  <ImageBlock src={service.image} label={service.title} />
                </>
              ) : (
                <>
                  <ImageBlock src={service.image} label={service.title} />
                  <TextBlock title={service.title} description={service.description} detail={service.detail} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
