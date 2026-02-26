import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { AppHeader } from '@/components/app-header'

import appCss from '../styles.css?url'


export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Orkesta - Modern webbdesign och AI utan krångel',
      },
      // Open Graph
      { property: 'og:title', content: 'Orkesta - Modern webbdesign och AI utan krångel' },
      { property: 'og:description', content: 'Behöver ni modern webbdesign, AI-integration och transparent prissättning? ORKESTA är webbyrån för svenska bolag – månadsabonnemang från 4 900 kr. Inga timpriser, snabb leverans. Boka samtal idag!' },
      { property: 'og:image', content: '/og.png' },
      { property: 'og:type', content: 'article' },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Orkesta - Modern webbdesign och AI utan krångel' },
      { name: 'twitter:description', content: 'Behöver ni modern webbdesign, AI-integration och transparent prissättning? ORKESTA är webbyrån för svenska bolag – månadsabonnemang från 4 900 kr. Inga timpriser, snabb leverans. Boka samtal idag!' },
      { name: 'twitter:image', content: '/og.png' },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon-apple.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon.png',
      },
      // { rel: 'manifest', href: '/site.webmanifest', color: '#fffff' },
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
