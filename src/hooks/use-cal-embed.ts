import { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'

const CAL_EU_EMBED_URL = 'https://app.cal.eu/embed/embed.js'

export function useCalEmbed() {
  useEffect(() => {
    async function initCal() {
      const cal = await getCalApi({
        namespace: 'quickchat',
        embedJsUrl: CAL_EU_EMBED_URL,
      })
      cal('ui', {
        cssVarsPerTheme: {
          light: { 'cal-brand': '#241F1F' },
          dark: { 'cal-brand': '#E4FF30' },
        },
        hideEventTypeDetails: true,
        layout: 'month_view',
      })
    }
    initCal()
  }, [])
}
