import { Link } from "@tanstack/react-router";
import { MobileNav } from "./ui/mobile-nav";
import { Button } from "@/components/ui/button";
import * as m from "@/paraglide/messages";

export function AppHeader() {
  const navItems = [
    { label: m.nav_pricing(), to: "/" as const, hash: "pricing" as const },
    { label: m.nav_services(), to: "/" as const, hash: "services" as const },
    { label: m.nav_contact(), to: "/contact" as const },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-background/70 backdrop-blur-sm border-b border-border/90">
      <div className="container mx-auto max-w-7xl flex items-center justify-between px-4">
        <Link to="/" className="text-fluid-lg font-bold font-display uppercase">Orkesto®</Link>

        <MobileNav items={navItems} className="md:hidden" />
        <div className="items-center gap-4 hidden md:flex">
          <nav>
            <ul className="flex items-center gap-4 group">
              {navItems.map((item) => (
                <li key={`${item.to}-${"hash" in item ? item.hash : ""}`}>
                  <Link
                    to={item.to}
                    {...("hash" in item ? { hash: item.hash } : {})}
                    className="transition-opacity duration-300 group-hover:opacity-50 hover:opacity-100!"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="secondary">
              {m.nav_book_call()}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}