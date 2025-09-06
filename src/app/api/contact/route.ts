import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, interest, message } = await request.json();

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_GMAIL_USER,
        pass: "cyzi xbky yykm oaxp",
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.NEXT_PUBLIC_GMAIL_USER,
      subject: `New Contact: Porfolio Contant Page`,
      text: `
          Name: ${name}
          Email: ${email}
          Interest: ${interest}
          
          Message:
          ${message}
        `,
      html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2>📩 New Contact Request</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Interest:</strong> ${interest}</p>
            <p><strong>Message:</strong></p>
            <blockquote style="border-left: 3px solid #ccc; margin: 10px 0; padding-left: 10px;">
              ${message}
            </blockquote>
          </div>
        `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully",
        description: `Thanks for reaching out, I will get back to you soon.`,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to send email. Please try again later." }, { status: 500 });
  }
}
