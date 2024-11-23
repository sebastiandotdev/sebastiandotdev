'use server'

interface EmailForm {
  email: string
  username: string
  description: string
}

export async function sendEmail(formData: FormData) {
  const form = Object.fromEntries(formData.entries()) as unknown as EmailForm

  console.log(form)
}
