import handler, { createServerEntry } from '@tanstack/react-start/server-entry'
import { paraglideMiddleware } from '@/paraglide/server'

export default createServerEntry({
  fetch(request) {
    // TanStack Router handles URL rewriting via deLocalizeUrl/localizeUrl,
    // so we pass the original request to avoid redirect loops
    return paraglideMiddleware(request, () => handler.fetch(request))
  },
})
