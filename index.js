const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')

//no nested hrequest object
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

const {PORT} = require('./config')

//importing route modules
const users = require('./routes/user')
app.use('/', users)

//setting server
app.listen(PORT,(err, res)=>{
    if(err){
        throw new Error('Server Intiating Error')
    }
    console.log(`Starting server successfully at ${PORT}`)
})
