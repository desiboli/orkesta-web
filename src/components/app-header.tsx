import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { MobileNav } from "./ui/mobile-nav";

const navigation = [
  {
    label: "Priser",
    href: "pricing",
  },
  {
    label: "Tjänster",
    href: "services",
  },
]

export function AppHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-background/70 backdrop-blur-sm border-b border-border/90">
      <div className="container mx-auto max-w-7xl flex items-center justify-between px-4">
        <Link to="/" className="text-fluid-lg font-bold font-display uppercase">Orkesta®</Link>

        <MobileNav items={navigation} className="md:hidden" />
        <div className="items-center gap-4 hidden md:flex">
          <nav>
            <ul className="flex items-center gap-4 group">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link to={"/"} hash={item.href} className="transition-opacity duration-300 group-hover:opacity-50 hover:opacity-100!">{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <Button variant="secondary">
            Boka samtal
          </Button>
        </div>
      </div>
    </header>
  )
}