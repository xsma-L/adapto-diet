const { check } = require("express-validator")

exports.validateSignUp = [
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 6 })
]

exports.validateLogin = [
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Password is required').exists()
]