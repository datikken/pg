const nodemailer = require('nodemailer');
require('dotenv').config();


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

const mailOptions = {
    from: 'tikken23@gmail.com',
    to: 'tikken23@gmail.com',
    subject: 'hello',
    text: 'works'
}

transporter.sendMail(mailOptions, (err) => {
    if(err) {
        console.error('email failed', )
    }
});

module.exports = transporter;