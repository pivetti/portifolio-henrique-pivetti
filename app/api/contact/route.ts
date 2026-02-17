import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Mantém estado entre requisições (ambiente simples)
const rateLimitMap = new Map<string, number[]>();

// 🔒 Função para escapar HTML (proteção contra XSS)
function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor
      ? forwardedFor.split(",")[0]
      : req.headers.get("x-real-ip") || "unknown";

    const now = Date.now();
    const windowTime = 60 * 1000; 
    const maxRequests = 3;

    if (!rateLimitMap.has(ip)) {
      rateLimitMap.set(ip, []);
    }

    const timestamps = rateLimitMap.get(ip)!;

    const filtered = timestamps.filter(
      (time) => now - time < windowTime
    );

    if (filtered.length >= maxRequests) {
      return NextResponse.json(
        { error: "Muitas requisições. Tente novamente em um minuto." },
        { status: 429 }
      );
    }

    filtered.push(now);
    rateLimitMap.set(ip, filtered);

    const body = await req.json();
    const { name, email, subject, message, company } = body;

    // 🔒 Honeypot (campo invisível no form)
    if (company) {
      return NextResponse.json(
        { error: "Spam detectado." },
        { status: 400 }
      );
    }

    // 🔒 Campos obrigatórios
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Campos obrigatórios não preenchidos." },
        { status: 400 }
      );
    }

    // 🔒 Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email inválido." },
        { status: 400 }
      );
    }

    // 🔒 Bloquear links
    const urlRegex = /(https?:\/\/|www\.)/i;
    if (urlRegex.test(message)) {
      return NextResponse.json(
        { error: "Links não são permitidos." },
        { status: 400 }
      );
    }

    // 🔒 Tamanho mínimo
    if (message.length < 10) {
      return NextResponse.json(
        { error: "Mensagem muito curta." },
        { status: 400 }
      );
    }

    // 🔒 Sanitização
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

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
    return NextResponse.json(
      { error: "Erro ao enviar mensagem." },
      { status: 500 }
    );
  }
}
