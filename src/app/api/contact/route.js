import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, projectType, message } = body;

    // Валидация
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required' },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Отправка email через Resend
    const { data, error } = await resend.emails.send({
      from: 'TU2STYLISH <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL || 'inal@tubeev.com'],
      subject: `New Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a3a2f; border-bottom: 2px solid #1a3a2f; padding-bottom: 10px;">
            New Project Request
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 140px;">Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                <a href="mailto:${email}" style="color: #1a3a2f;">${email}</a>
              </td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                <a href="tel:${phone}" style="color: #1a3a2f;">${phone}</a>
              </td>
            </tr>
            ` : ''}
            ${projectType ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Project Type:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${projectType}</td>
            </tr>
            ` : ''}
          </table>

          <div style="margin-top: 20px;">
            <h3 style="color: #1a3a2f; margin-bottom: 10px;">Message:</h3>
            <p style="background: #f6f6f4; padding: 15px; border-radius: 5px; line-height: 1.6;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #888; font-size: 12px;">
            Sent from TU2STYLISH website contact form
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // TODO: Сохранять в БД когда будет подключена
    // TODO: Отправка в Telegram

    return NextResponse.json(
      { success: true, emailId: data?.id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
