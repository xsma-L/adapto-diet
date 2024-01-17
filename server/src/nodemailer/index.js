const hbs = require('nodemailer-express-handlebars')
const nodemailer = require('nodemailer')
const path = require('path')

// initialize nodemailer
var transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth:{
            user: 'adaptodiet.contact@gmail.com',
            pass: process.env.GMAIL_KEY
        }
    }
);

// point to the template folder
const handlebarOptions = {
    viewEngine: {
        partialsDir: path.resolve('src/nodemailer/views/'),
        defaultLayout: false,
    },
    viewPath: path.resolve('src/nodemailer/views/'),
};

// use a template file with nodemailer
const sendConfirmationMail = async (user) => {
    transporter.use('compile', hbs(handlebarOptions))
    
    const mailOptions = {
    from: "Adapto'diet", // sender address
    template: "email", // the name of the template file, i.e., email.handlebars
    to: user.email,
    subject: `Bienvenue chez Adapto'diet, ${user.name}`,
    context: {
        name: user.name,
        company: "Adapto'diet",
        confirmationLink: user.token
    },
    }

    try {
        await transporter.sendMail(mailOptions)
    } catch (error) {
    console.log(`Nodemailer error sending email to ${user.email}`, error)
    }
}

module.exports = { sendConfirmationMail }