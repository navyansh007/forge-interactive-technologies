export async function POST(request: Request) {
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, company, projectType, budget, message, source } = body;

  if (!email) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Full contact form requires name and message
  if (source !== "cta" && (!name || !message)) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  // TODO: wire up Resend — add RESEND_API_KEY to .env.local and install `resend` package
  // import { Resend } from 'resend'
  // const resend = new Resend(process.env.RESEND_API_KEY)
  // await resend.emails.send({
  //   from: 'Forge Contact <noreply@forgeinteractive.io>',
  //   to: 'hello@forgeinteractive.io',
  //   subject: `New enquiry from ${name || email}`,
  //   text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nType: ${projectType}\nBudget: ${budget}\n\n${message}`,
  // })

  console.log("[contact]", { name, email, company, projectType, budget, message, source });

  return Response.json({ ok: true });
}
