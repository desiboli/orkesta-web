import { getLocale, setLocale } from '@/paraglide/runtime'
import { Globe } from 'lucide-react'

export function LanguageSwitcher() {
  // const locale = getLocale()

  return (
    <div className="flex items-center gap-1.5 text-xs uppercase order-2">
      <Globe className="size-3.5" />
      <button
        type="button"
        onClick={() => setLocale("sv")}
        className={`transition-opacity duration-300 ${getLocale() === "sv" ? "opacity-100 font-medium" : "opacity-50 hover:opacity-80 cursor-pointer"}`}
      >
        SV
      </button>
      <span>/</span>
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`transition-opacity duration-300 ${getLocale() === "en" ? "opacity-100 font-medium" : "opacity-50 hover:opacity-80 cursor-pointer"}`}
      >
        EN
      </button>
    </div>

    // <button
    //   type="button"
    //   onClick={() => setLocale(locale === 'sv' ? 'en' : 'sv')}
    //   className="text-sm font-medium uppercase transition-opacity duration-300 hover:opacity-70"
    //   aria-label={locale === 'sv' ? 'Switch to English' : 'Byt till svenska'}
    // >
    //   {locale === 'sv' ? 'EN' : 'SV'}
    // </button>
  )
}
