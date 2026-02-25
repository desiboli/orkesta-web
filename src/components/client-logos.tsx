export function ClientLogos() {
  return (
    <div className="container mx-auto max-w-7xl -mt-20">
      <h2 className="text-sm text-center text-foreground/70">Företag vi har arbetat med</h2>

      <div className="flex flex-wrap items-center justify-center gap-20 mt-10">
        <img src="/clients/logoipsum-360.svg" className="w-fit h-12 grayscale" alt="Client Logo 1" width={100} height={100} />
        <img src="/clients/logoipsum-391.svg" className="w-fit h-12 grayscale" alt="Client Logo 2" width={100} height={100} />
        <img src="/clients/logoipsum-414.svg" className="w-fit h-12 grayscale" alt="Client Logo 3" width={100} height={100} />
        <img src="/clients/logoipsum-416.svg" className="w-fit h-12 grayscale" alt="Client Logo 4" width={100} height={100} />
        <img src="/clients/logoipsum-418.svg" className="w-fit h-12 grayscale" alt="Client Logo 5" width={100} height={100} />
      </div>
    </div>
  )
}