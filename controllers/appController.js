const nodemailer = require('nodemailer')
require("dotenv").config()

const sendMail = (req, res) => {
  

  const {email} = req.body

    const transporter = nodemailer.createTransport({
        service : "gmail",
        auth: {
            user: process.env.AUTH,
            pass: process.env.PASSWORD
        }
    })
    
    const mailOptions = {
        from: process.env.AUTH,
        to: email,
        subject: "nodemailer Test",
        text: "test Sending gmail using Node js"
    } 
    
    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error)
            res.status(404).json({err: error})
        }
        else{
            console.log(`Email Sent: ${info.response}`)
            res.status(201).json({msg: "Send Email Mission Successfull...!"})
        }
    })


  
}


module.exports = { sendMail }