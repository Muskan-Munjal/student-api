  require('dotenv').config()
 const express = require('express')
 const studentRouter = require('./router/student')
const app = express()
const PORT = process.env.PORT


app.listen(PORT , () => console.log(`Server is started on Port:${PORT}`))

app.get('/', (req , res) => {
    console.log(req.url)
    console.log(req.method)
    console.log(req.headers)
    res.send("Hello Express")
}
)




const logger = (req, res, next) => {
    console.log("request received")
    console.log({
        url:req.url,
        body:req.body,
        method: req.method 

    }) 
    next()
}

app.use(express.json())
 app.use(logger)
 app.use(studentRouter)

