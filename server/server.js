const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
    }
});

app.post('/api/contact', async (req, res) => {
    const { name, email, phone, company, message } = req.body;

    try {
        const mailOptions = {
            from: `Contact Form <${process.env.EMAIL_USERNAME}>`,
            to: process.env.EMAIL_USERNAME,
            replyTo: email,
            subject: `📥 Contact Inquiry from ${name}`,
            text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Company: ${company}
        Message: ${message}
      `,
            html: `
  <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
    <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; padding: 30px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
      
      <!-- Logo -->
      <div style="text-align: center; margin-bottom: 20px;">
        <img src="https://drive.google.com/uc?export=view&id=1jkUq938xWQTEzSmubyyib2gdCSWgdnwT" alt="Delamore Logo" style="max-width: 60px; height: auto;">

      </div>

      <!-- Header -->
      <h2 style="text-align: center; color: #2c3e50;">📥 New Contact Inquiry</h2>

      <!-- Contact Info -->
      <p style="font-size: 16px; color: #333;"><strong>Name:</strong> ${name}</p>
      <p style="font-size: 16px; color: #333;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #3498db;">${email}</a></p>
      <p style="font-size: 16px; color: #333;"><strong>Phone:</strong> <a href="tel:${phone}" style="color: #27ae60;">${phone}</a></p>
      <p style="font-size: 16px; color: #333;"><strong>Company:</strong> ${company || 'N/A'}</p>

      <!-- Message Box -->
      <p style="font-size: 16px; color: #333;"><strong>Message:</strong></p>
      <div style="background-color: #ecf0f1; padding: 15px; border-left: 4px solid #f39c12; border-radius: 5px; font-size: 15px; color: #2c3e50;">
        ${message || 'No additional message'}
      </div>

      <!-- Footer -->
      <hr style="margin: 40px 0; border: none; border-top: 1px solid #ddd;">
      <p style="text-align: center; font-size: 13px; color: #888;">This message was sent via your website contact form.</p>
    </div>
  </div>
`

        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: true,
            message: '✅Message sent successfully!',
        });
    } catch (err) {
        console.error('Error sending contact email:', err);
        res.status(500).json({
            success: false,
            message: 'Failed to send message',
            error: err.message,
        });
    }
});


const indexPath = path.resolve(__dirname, '../client/dist');
app.use(express.static(indexPath, {
  maxAge: '1y',
  immutable: true
}));

app.get('/', (req, res) => {
    res.setHeader('Cache-Control', 'no-store');
    res.sendFile(path.join(indexPath, 'index.html'));
});

app.get('/test-email', async (req, res) => {
    try {
        await transporter.verify();
        res.send('SMTP connection verified!');
    } catch (err) {
        res.status(500).send(`SMTP verification failed: ${err.message}`);
    }
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});