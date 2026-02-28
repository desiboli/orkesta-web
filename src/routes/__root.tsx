import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { AppHeader } from '@/components/app-header'
import * as m from '@/paraglide/messages'
import { getLocale } from '@/paraglide/runtime'
import { localizeHref } from '@/paraglide/runtime'

import appCss from '../styles.css?url'

const SITE_URL = import.meta.env.PUBLIC_SITE_URL ?? 'https://orkesta.se'

export const Route = createRootRoute({
  head: () => {
    const title = m.meta_title()
    const description = m.meta_description()
    return {
      meta: [
        { charSet: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { title },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: '/og.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: SITE_URL },
        { property: 'og:site_name', content: 'Orkesta' },
        { property: 'og:locale', content: getLocale() === 'sv' ? 'sv_SE' : 'en_US' },
        { property: 'og:locale:alternate', content: getLocale() === 'sv' ? 'en_US' : 'sv_SE' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: '/og.png' },
      ],
      links: [
        { rel: 'stylesheet', href: appCss },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon-apple.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon.png' },
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'alternate', hreflang: 'sv', href: `${SITE_URL}${localizeHref('/', { locale: 'sv' })}` },
        { rel: 'alternate', hreflang: 'en', href: `${SITE_URL}${localizeHref('/', { locale: 'en' })}` },
        { rel: 'alternate', hreflang: 'x-default', href: SITE_URL },
      ],
    }
  },

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang={getLocale()}>
      <head>
        <HeadContent />
      </head>
      <body>
        <AppHeader />
        {children}
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
