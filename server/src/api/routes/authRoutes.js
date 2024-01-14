const express = require("express")
const router = express.Router()
const authController = require("../controllers/authControllers")
const { validateSignUp, validateLogin } = require('../middlewares/authMiddleware');

router.post("/signup", validateSignUp, authController.signup)
router.post("/login", validateLogin, authController.login)

module.exports = router