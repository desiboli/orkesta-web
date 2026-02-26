import { Marquee } from "./ui/marquee";

export function ClientLogos() {
  return (
    <div className="container mx-auto max-w-7xl -mt-20 px-4">
      <h2 className="text-sm text-center text-foreground/70">Företag vi har arbetat med</h2>

      <Marquee className="mt-10" speed="slow" gap="80px" fade autoFill pauseOnHover>
        <img src="/clients/assessio.svg" className="size-40 saturate-50" alt="Client Logo 1" />
        <img src="/clients/redeye.svg" className="size-40 saturate-50" alt="Client Logo 2" />
        <img src="/clients/regeringskansliet.svg" className="size-40 saturate-50" alt="Client Logo 3" />
        <img src="/clients/sida.svg" className="size-40 saturate-50" alt="Client Logo 4" />
        <img src="/clients/svt.svg" className="size-40 saturate-50 mr-20" alt="Client Logo 5" />
      </Marquee>
    </div>
  )

  // return (
  //   <div className="container mx-auto max-w-7xl -mt-20 px-4">
  //     <h2 className="text-sm text-center text-foreground/70">Företag vi har arbetat med</h2>

  //     <div className="flex flex-wrap items-center justify-center gap-20 mt-10">
  //       <img src="/clients/assessio.svg" className="w-fit h-12 saturate-50" alt="Client Logo 1" />
  //       <img src="/clients/redeye.svg" className="w-fit h-12 saturate-50" alt="Client Logo 2" />
  //       <img src="/clients/regeringskansliet.svg" className="w-fit h-12 saturate-50" alt="Client Logo 3" />
  //       <img src="/clients/sida.svg" className="w-fit h-12 saturate-50" alt="Client Logo 4" />
  //       <img src="/clients/svt.svg" className="w-fit h-14 saturate-50" alt="Client Logo 5" />
  //     </div>
  //   </div>
  // )
}