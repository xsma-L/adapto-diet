const { check } = require("express-validator")
const jwt = require('jsonwebtoken')

exports.validateSignUp = [
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 6 })
]

exports.validateLogin = [
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Password is required').exists()
]

exports.isLogged = (req, res, next) => {
    const token = req.headers.authorization

    if (!token) {
        return res.status(401).json({ message: 'Token non fourni' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          return res.status(401).json({ message: 'Token invalide' });
        }
        
        // Si le token est valide, vous pouvez stocker les informations de l'utilisateur dans req.user
        res.locals.user = decoded
        next() // Passez à la route suivante
    })
}