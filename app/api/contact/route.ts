import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// 🔒 Remove qualquer HTML
function stripHtml(text: string) {
  return text.replace(/<[^>]*>?/gm, "");
}

// 🔒 Bloqueia links
function containsUrl(text: string) {
  return /(https?:\/\/|www\.)/i.test(text);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Campos obrigatórios não preenchidos." },
        { status: 400 }
      );
    }

    // 🔒 Bloquear HTML (inclui <img>, <script>, etc)
    if (/<[^>]*>/g.test(message)) {
      return NextResponse.json(
        { error: "HTML não é permitido." },
        { status: 400 }
      );
    }

    // 🔒 Sanitizar removendo qualquer HTML residual
    const safeName = stripHtml(name);
    const safeEmail = stripHtml(email);
    const safeSubject = stripHtml(subject);
    const safeMessage = stripHtml(message);

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "henriquepivettidev@gmail.com",
      subject: `Contato do site: ${safeSubject}`,
      html: `
        <h3>Nova mensagem do portfólio</h3>
        <p><strong>Nome:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Mensagem:</strong><br/>${safeMessage}</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao enviar mensagem." },
      { status: 500 }
    );
  }
}
