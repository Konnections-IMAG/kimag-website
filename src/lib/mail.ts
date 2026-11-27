import { EMAIL, PHONE_DISPLAY, SITE_URL } from '@/app/lib/site';
import { escapeHtml } from './contactGuard';
import { createGmailTransport } from './smtp';

const transporter = createGmailTransport({
  user: process.env.MAIL_USER,
  pass: process.env.MAIL_PASS,
});

export async function sendContactFormEmail({
  name,
  email,
  phone,
  subject,
  message,
  requestCaseStudies
}: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  requestCaseStudies?: boolean;
}) {
  // Admin email address - you can change this to your preferred email
  const adminEmail = process.env.ADMIN_EMAIL || process.env.MAIL_USER;

  // Everything below is visitor input, so escape it before it goes into HTML.
  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    phone: escapeHtml(phone),
    subject: escapeHtml(subject),
    message: escapeHtml(message),
  };
  
  await transporter.sendMail({
    from: `Contact Form <${process.env.MAIL_USER}>`,
    to: adminEmail,
    replyTo: email,
    subject: `New Contact Form Submission: ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #2d6389; margin: 0;">Konnections IMAG</h1>
          <p style="color: #666; margin: 5px 0;">New Contact Form Submission</p>
        </div>
        
        <div style="background: linear-gradient(135deg, #2d6389 0%, #348992 100%); padding: 30px; border-radius: 15px; color: white; text-align: center; margin-bottom: 30px;">
          <h2 style="margin: 0 0 10px 0;">📧 New Contact Message</h2>
          <p style="margin: 0; opacity: 0.9;">Someone has submitted a message through your website</p>
        </div>
        
        <div style="padding: 20px; background: #f9f9f9; border-radius: 10px; margin-bottom: 30px;">
          <h3 style="color: #2d6389; margin-top: 0;">Contact Details:</h3>
          <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #348992;">
            <p style="margin: 5px 0; color: #333;"><strong>Name:</strong> ${safe.name}</p>
            <p style="margin: 5px 0; color: #333;"><strong>Email:</strong> <a href="mailto:${safe.email}" style="color: #348992;">${safe.email}</a></p>
            ${phone ? `<p style="margin: 5px 0; color: #333;"><strong>Phone:</strong> <a href="tel:${safe.phone}" style="color: #348992;">${safe.phone}</a></p>` : ''}
            <p style="margin: 5px 0; color: #333;"><strong>Subject:</strong> ${safe.subject}</p>
            ${requestCaseStudies ? '<p style="margin: 5px 0; color: #d73c77;"><strong>Requested:</strong> Relevant case studies / examples</p>' : ''}
          </div>
        </div>

        <div style="padding: 20px; background: #f9f9f9; border-radius: 10px; margin-bottom: 30px;">
          <h3 style="color: #2d6389; margin-top: 0;">Message:</h3>
          <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #d73c77;">
            <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${safe.message}</p>
          </div>
        </div>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="mailto:${safe.email}?subject=Re: ${encodeURIComponent(subject)}" 
             style="display: inline-block; background: linear-gradient(135deg, #2d6389 0%, #348992 100%); 
                    color: white; text-decoration: none; padding: 15px 30px; border-radius: 8px; 
                    font-weight: bold; font-size: 16px;">
            ↩️ Reply to ${safe.name}
          </a>
        </div>
        
        <div style="border-top: 1px solid #eee; padding-top: 20px; text-align: center; color: #666; font-size: 14px;">
          <p>This message was sent through the contact form on your Konnections IMAG website.</p>
          <p>Submitted on: ${new Date().toLocaleString('en-IN', { 
            timeZone: 'Asia/Kolkata',
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}</p>
        </div>
      </div>
    `
  });
}

/**
 * Goes to an address the visitor typed, which may not be theirs. It therefore
 * contains no visitor-supplied text: otherwise the form could be used to send
 * arbitrary content from our mailbox.
 */
export async function sendContactConfirmationEmail({
  email,
  requestCaseStudies
}: {
  email: string;
  requestCaseStudies?: boolean;
}) {
  await transporter.sendMail({
    from: `Konnections IMAG Team <${process.env.MAIL_USER}>`,
    to: email,
    subject: `Thank you for contacting Konnections IMAG - We received your message`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #2d6389; margin: 0;">Konnections IMAG</h1>
          <p style="color: #666; margin: 5px 0;">Integrated Communications Consultancy</p>
        </div>
        
        <div style="background: linear-gradient(135deg, #2d6389 0%, #348992 100%); padding: 30px; border-radius: 15px; color: white; text-align: center; margin-bottom: 30px;">
          <h2 style="margin: 0 0 10px 0;">✅ Message Received!</h2>
          <p style="margin: 0; opacity: 0.9;">Thank you for reaching out to us</p>
        </div>
        
        <div style="padding: 20px; background: #f9f9f9; border-radius: 10px; margin-bottom: 30px;">
          <h3 style="color: #2d6389; margin-top: 0;">Hello,</h3>
          <p style="color: #333; line-height: 1.6;">
            Thank you for contacting Konnections IMAG! We've successfully received your message and our team will review it shortly.
          </p>
          <p style="color: #333; line-height: 1.6;">
            We reply to every enquiry within one business day. If your message is urgent, please call us directly on <strong>${PHONE_DISPLAY}</strong>.
          </p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #348992; margin: 20px 0;">
            <h4 style="margin: 0 0 15px 0; color: #2d6389;">What happens next?</h4>
            <ul style="color: #333; line-height: 1.6; margin: 0; padding-left: 20px;">
              <li>Our team will review your message and requirements</li>
              <li>We'll prepare relevant information and solutions for your needs</li>
              <li>A team member will reach out to you with next steps</li>
              <li>We'll schedule a call or meeting if needed to discuss your project</li>
            </ul>
          </div>

          ${requestCaseStudies ? `
          <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #d73c77; margin: 20px 0;">
            <h4 style="margin: 0 0 10px 0; color: #2d6389;">Case studies on the way</h4>
            <p style="color: #333; line-height: 1.6; margin: 0;">
              You asked for relevant case studies and examples — our team will include a set tailored to your sector when they respond.
            </p>
          </div>
          ` : ''}

          <p style="color: #333; line-height: 1.6;">
            If you did not contact us, you can safely ignore this email.
          </p>
        </div>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${process.env.BASE_URL || SITE_URL}" 
             style="display: inline-block; background: linear-gradient(135deg, #2d6389 0%, #348992 100%); 
                    color: white; text-decoration: none; padding: 15px 30px; border-radius: 8px; 
                    font-weight: bold; font-size: 16px;">
            🌐 Visit Our Website
          </a>
        </div>
        
        <div style="border-top: 1px solid #eee; padding-top: 20px; text-align: center; color: #666; font-size: 14px;">
          <p>This is an automated confirmation email. Please do not reply to this email.</p>
          <p>If you have additional questions, please contact us at <a href="mailto:${EMAIL}" style="color: #348992;">${EMAIL}</a></p>
          <p style="margin-top: 20px;">
            Best regards,<br>
            <strong style="color: #2d6389;">The KIMAG Team</strong>
          </p>
        </div>
      </div>
    `
  });

}
