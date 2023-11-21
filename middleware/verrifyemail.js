const verifyEmail = (req, res, next) =>{
    const {email} = req.body

   if(isvalidemail(email)){
    next();
   }
   else{
    res.status(404).json("please provide a valid email")
   }
}


function isvalidemail(email){
    return email.includes('@gmail') && email.includes('.com')
}


module.exports = {verifyEmail}