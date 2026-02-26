import { Button } from "@/components/ui/button";

export function AppHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-background/70 backdrop-blur-sm border-b border-border/90">
      <div className="container mx-auto max-w-7xl flex items-center justify-between px-4">
        <a href="/" className="text-fluid-lg font-bold font-display uppercase">Orkesta®</a>

        <Button variant="secondary">
          Boka samtal
        </Button>
      </div>
    </header>
  )
}