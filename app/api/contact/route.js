import { emailService } from "../../utils/sendEmail";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();
    if (!email || typeof email !== "string" || email.trim() === "") {
      return Response.json(
        { success: false, message: "Email is required." },
        { status: 400 }
      );
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }
    if (
      !process.env.EMAIL_HOST ||
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASSWORD
    ) {
      console.error("Missing email environment variables");
      return Response.json(
        { success: false, message: "Email configuration is incomplete" },
        { status: 500 }
      );
    }

    // Send welcome email to user
    const welcomeResult = await emailService.sendWelcomeEmail(email, name);
    if (!welcomeResult.success) {
      console.error("Welcome email failed:", welcomeResult.error);
    }

    // Send notification email to admin
    const notificationResult = await emailService.sendNotificationEmail({
      name,
      email,
      message,
    });
    if (!notificationResult.success) {
      console.error("Notification email failed:", notificationResult.error);
    }

    // Check if at least one email was sent successfully
    if (!welcomeResult.success && !notificationResult.success) {
      return Response.json(
        { success: false, message: "Failed to send email" },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Your message has been sent successfully",
    });
  } catch (error) {
    console.error("API Error:", error);
    return Response.json(
      { success: false, message: "Error sending message" },
      { status: 500 }
    );
  }
}
