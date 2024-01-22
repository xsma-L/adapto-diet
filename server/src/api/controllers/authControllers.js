const prisma = require("@prisma/client")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const mailer = require("../../nodemailer")

const prismaClient = new prisma.PrismaClient()

exports.signup = async (req, res) => {
    const { first_name, last_name, email, password } = req.body.data
    const hashedPassword = await bcrypt.hash(password, 12)

    try {
        const verifyEmail = await prismaClient.user.findUnique({ where: { email } })
        if(verifyEmail) {
           return res.status(401).send('User already exist')
        }

        const user = await prismaClient.user.create({
            data: {
                first_name,
                last_name,
                email,
                password: hashedPassword
            }
        })
        
        if(user) {
            const token = jwt.sign({ email: email }, process.env.JWT_SECRET, { expiresIn: '24h' })
            const mailData = {
                email: email,
                name: first_name,
                token: `http://localhost:3001/signup/confirmation/${token}`
            }
            await mailer.sendConfirmationMail(mailData)
        }


        res.status(201).json({ message: 'User created'})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error creating user' })
    }
}

exports.emailConfirmation = async (req, res) => {
    const { token } = req.body.data
    const decoded = jwt.decode(token)

    console.log('token data =>', token)

    const updateUser = await prismaClient.user.update({
        where: {
            email: decoded.email
        },
        data: {
            verified: true
        }
    })

    if(!updateUser) {
        res.status(500).json({ message: "Error verifing account" })
    }

    res.status(200).json({ message: "Account verified"})
}

exports.login = async (req, res) => {
    const { email, password } = req.body.data

    try {
        const user = await prismaClient.user.findUnique({ where: { email } })
        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(401).json({ message: 'Email or password is incorrect' })
        }

        const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' })
        res.status(200).json({ token, userId: user.id })
    } catch (error) {
        res.status(500).json({ message: 'Login failed' })
    }
}