import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import * as m from "@/paraglide/messages";

export function AppFooter() {
  return (
    <footer className="mt-20 px-4">
      <div className="container mx-auto max-w-7xl bg-[#241F1F] text-secondary-foreground px-10 pt-20 pb-10 rounded-2xl gap-20 flex flex-col justify-between overflow-hidden">
        <div className="flex flex-col gap-2 max-w-sm">
          <h3 className="uppercase text-2xl leading-none font-bold font-display">{m.footer_brand()}</h3>
          <h4 className="text-lg font-light uppercase">{m.footer_tagline()}</h4>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-2">
          <nav>
            <h5 className="text-2xl font-medium mb-4">{m.footer_contact()}</h5>
            <ul className="flex flex-col gap-2 font-light">
              <li>
                <a href="mailto:info@orkesta.se">hello@orkesta.se</a>
              </li>
              <li>
                <a href="tel:+46701234567">+46 (0)73 698 67 52</a>
              </li>
              <li>{m.footer_location()}</li>
            </ul>
          </nav>

          <div className="mt-10 flex flex-col md:items-center gap-2">
            <Button size="lg">
              {m.nav_book_call_now()}
            </Button>
            <span className="text-xs font-light">{m.cta_footer()}</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-light uppercase order-last md:order-first">
            {m.footer_copyright({ year: new Date().getFullYear() })}
          </p>
          <nav className="text-xs uppercase order-first md:order-last">
            <ul className="flex items-center flex-wrap gap-1 group">
              <li>
                <Link to="/" className="transition-opacity duration-300 group-hover:opacity-50 hover:opacity-100!">{m.footer_privacy()}</Link>
              </li>
              <span>•</span>
              <li>
                <Link to="/" className="transition-opacity duration-300 group-hover:opacity-50 hover:opacity-100!">{m.footer_terms()}</Link>
              </li>
              <span>•</span>
              <li>
                <Link to="/" className="transition-opacity duration-300 group-hover:opacity-50 hover:opacity-100!">{m.footer_cookies()}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}