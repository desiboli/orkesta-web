import { createServerFn } from '@tanstack/react-start'
import { Resend } from 'resend'

const RECIPIENTS = [
  'adam@orkesto.se',
  'erik@orkesto.se',
  'william@orkesto.se',
] as const

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export type ContactFormPayload = {
  name: string
  email: string
  company: string
  message: string
}

export type ContactFormResult =
  | { ok: true }
  | { ok: false; code: ContactErrorCode; message?: string }

export type ContactErrorCode =
  | 'validation_name'
  | 'validation_email'
  | 'validation_company'
  | 'validation_message'
  | 'not_configured'
  | 'send_failed'

export const submitContactForm = createServerFn({ method: 'POST' })
  .inputValidator((raw: unknown): ContactFormPayload => {
    const o =
      raw && typeof raw === 'object' ? (raw as Record<string, unknown>) : {}
    return {
      name: String(o.name ?? ''),
      email: String(o.email ?? ''),
      company: String(o.company ?? ''),
      message: String(o.message ?? ''),
    }
  })
  .handler(async ({ data }): Promise<ContactFormResult> => {
    const name = data.name.trim()
    const email = data.email.trim()
    const company = data.company.trim()
    const message = data.message.trim()

    if (!name || name.length > 200) {
      return { ok: false, code: 'validation_name' }
    }
    if (!email || !isValidEmail(email) || email.length > 320) {
      return { ok: false, code: 'validation_email' }
    }
    if (company.length > 200) {
      return { ok: false, code: 'validation_company' }
    }
    if (!message || message.length > 10_000) {
      return { ok: false, code: 'validation_message' }
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('[contact] RESEND_API_KEY is not set')
      return { ok: false, code: 'not_configured' }
    }

    const from =
      process.env.RESEND_FROM_EMAIL || 'Orkesto Contact <onboarding@resend.dev>'

    const resend = new Resend(apiKey)

    const html = `
      <h1>New contact form message</h1>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${
        company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ''
      }
      <p><strong>Message:</strong></p>
      <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(message)}</pre>
    `

    const text = [
      'New contact form message',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      '',
      'Message:',
      message,
    ]
      .filter(Boolean)
      .join('\n')

    const { error } = await resend.emails.send({
      from,
      to: [...RECIPIENTS],
      replyTo: email,
      subject: `Contact: ${name}`,
      html,
      text,
    })

    if (error) {
      console.error('[contact] Resend error:', error)
      return {
        ok: false,
        code: 'send_failed',
        message: error.message,
      }
    }

    return { ok: true }
  })

function escapeHtml(s: string): string {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}
