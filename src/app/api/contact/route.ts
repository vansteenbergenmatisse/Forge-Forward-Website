import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, consentMarketing, consentNonMarketing } = body;

    if (!name || !phone || !email) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // Wire up to Resend / SendGrid / your CRM here.
    // For now, log to stdout (visible in Vercel function logs).
    console.log("[contact]", { name, phone, email, consentMarketing, consentNonMarketing });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
