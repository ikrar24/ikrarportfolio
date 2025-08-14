import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

console.log("EMAIL_USER from .env =>", process.env.EMAIL_USER);
console.log("EMAIL_PASS from .env =>", process.env.EMAIL_PASS);

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());


const  PORT = 5000|| process.env.PORT





// Route


app.get("/", (req , res)=>{
    res.send(" Hello From Contect Api Test ")
})




app.post("/send-email", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    try {
        // Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Send email
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_USER, // your email
            subject: `New Message from ${name}`,
            text: message,
            html: `<h3>New Contact Form Submission</h3>
                   <p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong> ${message}</p>`
        });

        res.json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to send email" });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
