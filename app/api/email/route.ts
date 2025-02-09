import nodemailer from 'nodemailer'
import process from 'node:process'
import { NextResponse } from 'next/server'

const getEnvVariable = (key: string): string => {
  const processValue = process.env[key]
  if (processValue) return processValue

  try {
    // @ts-expect-error
    const denoValue = Deno.env.get(key)
    if (denoValue) return denoValue
  } catch {
    // Si Deno.env no está disponible, no hacer nada
  }

  throw new Error(`Variable de entorno ${key} no encontrada`)
}

export async function POST(req: Request) {
  const { name, email, message } = await req.json()
  const user = getEnvVariable('EMAIL_USER')
  const pass = getEnvVariable('EMAIL_PASS')

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user,
      pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  })

  const HTMLTemplate = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">
        Hola, un placer conocerte
      </h2>
      
      <div style="background: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
        <h3 style="color: #444; margin-top: 0;">Detalles del Remitente:</h3>
        <p style="margin: 5px 0;"><strong>Nombre:</strong> ${name}</p>
        <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
      </div>

      <div style="background: #f9f9f9; padding: 20px; border-radius: 5px;">
        <h3 style="color: #444; margin-top: 0;">Mensaje:</h3>
        <p style="white-space: pre-line; color: #666;">${message}</p>
      </div>
      
      <div style="margin-top: 20px; font-size: 12px; color: #999; text-align: center;">
        <p>Este mensaje fue enviado desde el formulario de contacto de tu portafolio web.</p>
      </div>
    </div>
  `
  try {
    await transporter.sendMail({
      from: user,
      to: 'sebastiandotdev@gmail.com',
      subject: `Nuevo mensaje de ${name}`,
      html: HTMLTemplate,
      text: `
        DE: ${name}
        Correo electronico: ${email}
        Solicitud: ${message}
      `,
    })

    return NextResponse.json({ message: 'Email enviado exitosamente' })
  } catch (error) {
    const isErr = error as Error

    return NextResponse.json(
      {
        error: 'Error al enviar el email',
        message: isErr.message,
        platform: 'process' in globalThis ? 'Node.js' : 'Deno',
      },
      { status: 500 },
    )
  }
}
