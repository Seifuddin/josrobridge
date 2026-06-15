import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, phone, service, message } = await req.json();

    const data = await resend.emails.send({
      from: "Josro Bridge <onboarding@resend.dev>",
      to: "info@josrobridge.com",
      subject: `New Inquiry: ${service || "General Contact"}`,
      html: `
        <div style="font-family: Arial; padding: 10px;">
          <h2>New Contact Form Submission</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service:</strong> ${service}</p>

          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return Response.json({
      success: true,
      message: "Email sent successfully",
      data,
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: "Failed to send email",
      error: error.message,
    });
  }
}