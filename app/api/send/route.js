//import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;
export async function POST(res , req) {
  const {body} = await req.json();
  const {email , subject,message} =body;
  try {
    const data = await resend.emails.send({
      from: "akash<akashkumar0678@gmail.dev> ",
      to: email,
      subject: 'subject',
      react: (
        <>
        <div>Email body</div>
        <h1>{subject}</h1>
        <div>Thank you for contacting us!</div>
        <div>New message submit!</div>
        <div>{message}</div>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}







