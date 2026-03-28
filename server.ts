import express from "express";
import { createServer as createViteServer } from "vite";
import { Resend } from 'resend';
import path from 'path';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes FIRST
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      const resendKey = process.env.RESEND_API_KEY;
      if (!resendKey) {
        console.warn("RESEND_API_KEY is missing. Simulating email send.");
        return res.status(500).json({ error: "Email service not configured. Please add RESEND_API_KEY." });
      }

      const resend = new Resend(resendKey);
      
      const data = await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>',
        to: ['tobiasblask@gmail.com'],
        subject: `Website Inquiry: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      });

      res.json({ success: true, data });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
