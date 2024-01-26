const express = require("express")
const router = express.Router()
const dietProfileController = require("../controllers/dietProfileControllers")
const { isLogged } = require('../middlewares/authMiddleware')

router.post("/", isLogged, dietProfileController.createDietProfile)
router.get("/", isLogged, dietProfileController.getDietProfile)
router.put("/update", isLogged, dietProfileController.updateDietProfile)
router.delete("/delete", isLogged, dietProfileController.deleteDietProfile)

module.exports = router