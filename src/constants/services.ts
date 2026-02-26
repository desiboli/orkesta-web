import {
  SHADER_CONFIG_HALO,
  SHADER_CONFIG_MANDARIN,
  SHADER_CONFIG_SUNSET,
  SHADER_CONFIG_UNIVERSE,
  SHADER_CONFIG_VIOLA,
  SHADER_CONFIG_NIGHTY_NIGHT,
  SHADER_CONFIG_INTERSTELLA,
} from './shader'

export const SERVICES = [
  {
    title: 'Modern webbdesign',
    description:
      'Vi skapar rena, snabba och konverteringsdrivna webbplatser som känns premium och bygger förtroende från första sekunden.',
    detail:
      'T.ex. mobilanpassad design med fokus på tydliga CTA:er, minimala laddtider och högkvalitativ typografi som säljer era tjänster/produkter.',
    shaderProps: { ...SHADER_CONFIG_HALO },
  },
  {
    title: 'Praktisk AI-integration',
    description:
      'Vi bygger in AI-verktyg som faktiskt sparar tid och pengar – som chatbots, automatiserad kundsupport, smart innehållsgenerering eller prediktiv analys.',
    detail:
      'T.ex. integration av Grok, ChatGPT-liknande modeller eller enkla automatiseringar via Zapier/Make som hanterar leads eller schemaläggning utan kodkrångel.',
    shaderProps: { ...SHADER_CONFIG_MANDARIN },
  },
  {
    title: 'Snabb & säker webbutveckling',
    description:
      'Vi bygger robusta, framtidssäkra webbplatser med modern teknik (Next.js/React, headless CMS) som tål hög trafik och håller sig uppdaterade automatiskt.',
    detail:
      'T.ex. prestanda >95/100 på PageSpeed, inbyggd säkerhet mot vanliga hot, automatiska uppdateringar och skalbar hosting som växer med ert bolag.',
    shaderProps: { ...SHADER_CONFIG_SUNSET },
  },
  {
    title: 'Konverteringsoptimering',
    description:
      'Vi analyserar och förbättrar er webb för fler leads, bokningar eller köp – med A/B-tester, heatmaps och UX-justeringar baserat på verklig data.',
    detail:
      'T.ex. öka konverteringsgraden med 20–50% genom bättre formulär, tydligare erbjudanden, snabbare checkout eller personifierade landningssidor.',
    shaderProps: { ...SHADER_CONFIG_INTERSTELLA },
  },
  {
    title: 'Löpande förvaltning & support',
    description:
      'Vi sköter allt det tråkiga så ni slipper: säkerhetsuppdateringar, backup, hosting, buggfixar och snabba svar på era frågor.',
    detail:
      'T.ex. prioriterad support inom 4 timmar vardagar, månadsrapport med förbättringsförslag, och proaktiv övervakning så er sajt aldrig ligger nere.',
    shaderProps: { ...SHADER_CONFIG_VIOLA },
  },
  {
    title: 'AI-förståelse & utbildning för ert team',
    description:
      'Vi lär er och ert team hur AI fungerar i praktiken – utan buzzwords – så ni kan använda det dagligen utan att vara beroende av oss för varje liten sak.',
    detail:
      'T.ex. 1–2 timmars workshop per kvartal, enkla guider för verktyg som Copilot, Midjourney eller AI för kundservice, och råd om hur ni undviker vanliga AI-fällor.',
    shaderProps: { ...SHADER_CONFIG_NIGHTY_NIGHT },
  },
]
