const prisma = require("@prisma/client")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

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
        res.status(201).json({ message: 'User created', userId: user.id })
    } catch (error) {
        res.status(500).json({ message: 'Error creating user' })
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body

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