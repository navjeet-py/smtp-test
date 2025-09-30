import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const toEmail = process.env.TEST_TO_EMAIL; 
const fromEmail = process.env.TEST_FROM_EMAIL;

(async () => {
  try {
    const msg = {
      to: toEmail,
      from: fromEmail,
      subject: "Render SendGrid Test",
      text: "This is a test email sent from Render using SendGrid API",
      html: "<strong>This is a test email sent from Render using SendGrid API</strong>",
    };

    const [response] = await sgMail.send(msg);
    console.log("Email sent successfully!");
    console.log("Status Code:", response.statusCode);
  } catch (error) {
    console.error("Failed to send email:", error);
  }
})();
