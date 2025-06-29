import nodemailer from "nodemailer";

class EmailService {
  constructor() {
    if (
      !process.env.EMAIL_HOST ||
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASSWORD
    ) {
      console.error(
        "Email configuration missing. Please check your .env.local file"
      );
      return;
    }

    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async sendEmail(to, subject, html, text = "") {
    try {
      if (!this.transporter) {
        return { success: false, error: "Email service not configured" };
      }

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: to,
        subject: subject,
        html: html,
        text: text,
      };

      console.log("Sending email to:", to);
      const result = await this.transporter.sendMail(mailOptions);
      console.log("Email sent successfully:", result.messageId);
      return { success: true, messageId: result.messageId };
    } catch (error) {
      console.error("Email error:", error);
      return { success: false, error: error.message };
    }
  }

  async sendWelcomeEmail(userEmail, userName) {
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Contacting Us</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 0 20px rgba(0,0,0,0.1);">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 300;">Thank You!</h1>
            <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">We've received your message</p>
          </div>
          
          <!-- Content -->
          <div style="padding: 40px 30px;">
            <h2 style="color: #333333; margin: 0 0 20px 0; font-size: 24px; font-weight: 400;">Hello ${userName},</h2>
            
            <p style="color: #666666; line-height: 1.6; margin: 0 0 20px 0; font-size: 16px;">
              Thank you for reaching out to us. We have successfully received your message and appreciate you taking the time to contact us.
            </p>
            
            <p style="color: #666666; line-height: 1.6; margin: 0 0 20px 0; font-size: 16px;">
              Our team will review your inquiry and get back to you as soon as possible, typically within 24-48 hours during business days.
            </p>
            
            <div style="background-color: #f8f9fa; border-left: 4px solid #667eea; padding: 20px; margin: 30px 0;">
              <p style="color: #333333; margin: 0; font-size: 14px; font-style: italic;">
                <strong>What happens next?</strong><br>
                • We'll review your message carefully<br>
                • Our team will prepare a detailed response<br>
                • You'll receive a follow-up email with answers to your questions
              </p>
            </div>
            
            <p style="color: #666666; line-height: 1.6; margin: 0 0 20px 0; font-size: 16px;">
              If you have any urgent questions, please don't hesitate to reach out to us again.
            </p>
            
            <p style="color: #666666; line-height: 1.6; margin: 0; font-size: 16px;">
              Best regards,<br>
              <strong>The Development Team</strong>
            </p>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e9ecef;">
            <p style="color: #999999; margin: 0; font-size: 14px;">
              This is an automated message. Please do not reply to this email.
            </p>
            <p style="color: #999999; margin: 10px 0 0 0; font-size: 12px;">
              © 2024 Development Team. All rights reserved.
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    const text = `
Thank You for Contacting Us

Hello ${userName},

Thank you for reaching out to us. We have successfully received your message and appreciate you taking the time to contact us.

Our team will review your inquiry and get back to you as soon as possible, typically within 24-48 hours during business days.

What happens next?
• We'll review your message carefully
• Our team will prepare a detailed response
• You'll receive a follow-up email with answers to your questions

If you have any urgent questions, please don't hesitate to reach out to us again.

Best regards,
The Development Team

---
This is an automated message. Please do not reply to this email.
© 2024 Development Team. All rights reserved.
    `;

    return this.sendEmail(
      userEmail,
      "Thank You for Contacting Us - We've Received Your Message",
      html,
      text
    );
  }

  async sendNotificationEmail(contactData) {
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 0 20px rgba(0,0,0,0.1);">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%); padding: 40px 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 300;">New Message</h1>
            <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Contact form submission received</p>
          </div>
          
          <!-- Content -->
          <div style="padding: 40px 30px;">
            <h2 style="color: #333333; margin: 0 0 30px 0; font-size: 24px; font-weight: 400;">Contact Form Submission</h2>
            
            <div style="background-color: #f8f9fa; border-radius: 8px; padding: 25px; margin-bottom: 30px;">
              <div style="margin-bottom: 20px;">
                <h3 style="color: #333333; margin: 0 0 10px 0; font-size: 18px; font-weight: 500;">Contact Information</h3>
                <p style="color: #666666; margin: 5px 0; font-size: 16px;">
                  <strong style="color: #333333;">Name:</strong> ${
                    contactData.name
                  }
                </p>
                <p style="color: #666666; margin: 5px 0; font-size: 16px;">
                  <strong style="color: #333333;">Email:</strong> 
                  <a href="mailto:${
                    contactData.email
                  }" style="color: #667eea; text-decoration: none;">${
      contactData.email
    }</a>
                </p>
                <p style="color: #666666; margin: 5px 0; font-size: 16px;">
                  <strong style="color: #333333;">Date:</strong> ${new Date().toLocaleString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    }
                  )}
                </p>
              </div>
              
              <div>
                <h3 style="color: #333333; margin: 0 0 15px 0; font-size: 18px; font-weight: 500;">Message</h3>
                <div style="background-color: #ffffff; border: 1px solid #e9ecef; border-radius: 6px; padding: 20px;">
                  <p style="color: #333333; margin: 0; line-height: 1.6; font-size: 16px; white-space: pre-wrap;">${
                    contactData.message
                  }</p>
                </div>
              </div>
            </div>
            
            <div style="background-color: #e8f5e8; border-left: 4px solid #28a745; padding: 20px; margin: 30px 0;">
              <p style="color: #155724; margin: 0; font-size: 14px;">
                <strong>Action Required:</strong> Please review this message and respond to the customer within 24-48 hours.
              </p>
            </div>
            
            <p style="color: #666666; line-height: 1.6; margin: 0; font-size: 16px;">
              Best regards,<br>
              <strong>Website Contact System</strong>
            </p>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e9ecef;">
            <p style="color: #999999; margin: 0; font-size: 14px;">
              This is an automated notification from your website contact form.
            </p>
            <p style="color: #999999; margin: 10px 0 0 0; font-size: 12px;">
              © 2024 Development Team. All rights reserved.
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    const text = `
New Contact Form Submission

Contact Information:
Name: ${contactData.name}
Email: ${contactData.email}
Date: ${new Date().toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })}

Message:
${contactData.message}

---
Action Required: Please review this message and respond to the customer within 24-48 hours.

Best regards,
Website Contact System

---
This is an automated notification from your website contact form.
© 2024 Development Team. All rights reserved.
    `;

    return this.sendEmail(
      process.env.ADMIN_EMAIL,
      "New Contact Form Submission - Action Required",
      html,
      text
    );
  }
}

export const emailService = new EmailService();
