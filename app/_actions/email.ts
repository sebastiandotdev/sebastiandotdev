'use server'

import process from 'node:process'
import { Resend } from 'resend'
import { EmailTemplate } from '../email-template'

interface EmailForm {
  email: string
  username: string
  description: string
}

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  const form = Object.fromEntries(formData.entries()) as unknown as EmailForm

  const { data, error } = await resend.emails.send({
    from: form.email,
    to: ['sebastian@castrogarciajs.dev'],
    subject: form.description,
    react: EmailTemplate({ username: form.username }),
  })

  console.log({ data, error })
}
