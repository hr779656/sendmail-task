const express = require('express');
const allroutes = require('./routes/allroutes')

const app = express();
const port = 8080;


app.use(express.json())

// Routes ====
app.use('/api', allroutes)


app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`)
})


