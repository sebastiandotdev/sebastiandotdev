import nodemailer from 'nodemailer'
import process from 'node:process'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  // @ts-expect-error Only on Deno Deploy
  const user = Deno.env.get('EMAIL_USER')

  // @ts-expect-error Only on Deno Deploy
  const pass = Deno.env.get('EMAIL_PASS')

  const { name, email, message } = await req.json()

  console.log({ user, pass })
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
      },
      { status: 500 },
    )
  }
}
