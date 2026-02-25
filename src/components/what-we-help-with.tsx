import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";
import { SERVICES } from "@/constants/services";

function ShaderGradientBlock({
  shaderProps,
  label,
}: {
  shaderProps: Record<string, string | number | boolean>;
  label?: string;
}) {
  return (
    <div className="col-span-1 order-2 md:order-0 relative h-[250px] md:h-[400px] rounded-xl overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <ShaderGradientCanvas className="size-full pointer-events-none">
          <ShaderGradient {...shaderProps} />
        </ShaderGradientCanvas>
      </div>
      {label && (
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
          <span className="text-white text-2xl font-bold">{label}</span>
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
    <section>
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-fluid-4xl font-bold font-display text-center">Det vi hjälper till med</h2>

        <div className="grid grid-cols-1 gap-20 mt-10 md:mt-20">
          {SERVICES.map((service, index) => (
            <div key={service.title} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {index % 2 === 0 ? (
                <>
                  <TextBlock title={service.title} description={service.description} detail={service.detail} />
                  <ShaderGradientBlock shaderProps={service.shaderProps} label={service.title} />
                </>
              ) : (
                <>
                  <ShaderGradientBlock shaderProps={service.shaderProps} label={service.title} />
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
