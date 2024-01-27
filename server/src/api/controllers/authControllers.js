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


        res.status(201).send({ message: 'User created'})
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'Error creating user' })
    }
}

exports.emailConfirmation = async (req, res) => {
    const { token } = req.body
    const decoded = jwt.decode(token)

    try {
        
        const updateUser = await prismaClient.user.update({
            where: {
                email: decoded.email
            },
            data: {
                verified: true
            }
        })
    
        if(!updateUser) {
            res.status(500).send({ message: "Error verifing account" })
        }
    
        res.status(200).send({ message: "Account verified"})
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Error verifing account" })
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await prismaClient.user.findUnique({
            where: { email },
        })

        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(401).send({ message: 'Email or password is incorrect' })
        }

        const dietRequest = await prismaClient.informations.findUnique({
            where:{ userId: user.id}
        })

        const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '6h' })
        const dietProfile = dietRequest ? true : false

        res.status(200).send({ token, userId: user.id, dietProfile: dietProfile})
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'Login failed' })
    }
}