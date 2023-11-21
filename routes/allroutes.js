const router = require('express').Router();
const {sendMail} = require('../controllers/appController')
const {verifyEmail} = require("../middleware/verrifyemail")

// // HTTP Request ==========

router.post("/sendmail",[verifyEmail], sendMail)


module.exports = router
