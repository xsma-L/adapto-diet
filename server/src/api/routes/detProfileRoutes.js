const express = require("express")
const router = express.Router()
const dietProfileController = require("../controllers/dietProfile")
const { isLogged } = require('../middlewares/authMiddleware')

router.post("/create-profile",  dietProfileController.createDietProfile )

module.exports = router