import { getLocale, setLocale } from '@/paraglide/runtime'

export function LanguageSwitcher() {
  const locale = getLocale()

  return (
    <button
      type="button"
      onClick={() => setLocale(locale === 'sv' ? 'en' : 'sv')}
      className="text-sm font-medium uppercase transition-opacity duration-300 hover:opacity-70"
      aria-label={locale === 'sv' ? 'Switch to English' : 'Byt till svenska'}
    >
      {locale === 'sv' ? 'EN' : 'SV'}
    </button>
  )
}
