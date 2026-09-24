import { Resend } from "resend";

const resend = new Resend(globalThis.process?.env?.RESEND_API_KEY);

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const {
      name,
      email,
      company,
      phone,
      service,
      budget,
      message,
    } = req.body || {};

    if (!name || !email || !service || !message) {
      return res.status(400).json({
        success: false,
        message: "Please complete all required fields.",
      });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company || "Not provided");
    const safePhone = escapeHtml(phone || "Not provided");
    const safeService = escapeHtml(service);
    const safeBudget = escapeHtml(budget || "Not provided");
    const safeMessage = escapeHtml(message);

    const { data, error } = await resend.emails.send({
      from: "Kardengey Website <onboarding@resend.dev>",
      to: ["kardengey@gmail.com"],
      replyTo: email,
      subject: `New Kardengey Enquiry — ${name}`,

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            max-width: 650px;
            margin: 0 auto;
            color: #111;
            line-height: 1.6;
          "
        >

          <h1 style="margin-bottom: 30px;">
            New Kardengey Enquiry
          </h1>

          <p>
            <strong>Name:</strong>
            ${safeName}
          </p>

          <p>
            <strong>Email:</strong>
            ${safeEmail}
          </p>

          <p>
            <strong>Company / Brand:</strong>
            ${safeCompany}
          </p>

          <p>
            <strong>Phone / WhatsApp:</strong>
            ${safePhone}
          </p>

          <p>
            <strong>Service:</strong>
            ${safeService}
          </p>

          <p>
            <strong>Budget:</strong>
            ${safeBudget}
          </p>

          <hr
            style="
              margin: 30px 0;
              border: 0;
              border-top: 1px solid #ddd;
            "
          />

          <h3>
            Project details
          </h3>

          <p
            style="
              white-space: pre-line;
              line-height: 1.7;
            "
          >
            ${safeMessage}
          </p>

          <hr
            style="
              margin: 30px 0;
              border: 0;
              border-top: 1px solid #ddd;
            "
          />

          <p
            style="
              font-size: 12px;
              color: #777;
            "
          >
            Submitted through the Kardengey website.
          </p>

        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        success: false,
        message: "Unable to send your enquiry.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Your enquiry has been sent successfully.",
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
}