

const router = require('express').Router()
const validate = require('../utils/validate')
const dbOperations = require('../db/user')


//@route GET /
//@description Fetch user search Page as Home page
router.get('/',(request, response)=>{
    response.render('index',{errors : '', message : '',user : null})
})

// @route POST /
// @description Search user using emailId
router.post('/',async (request, response)=>{
    const body = request.body
    const validObj = validate(body)
    console.log(body)
    if(validObj.isValid){
        let user = await dbOperations.searchUser(body)
        if(user){
            console.log(user.dataValues)
            response.render('index',{errors : '', message : 'User found successfully',user : user.dataValues})
        }else{
            response.render('index',{errors : '', message : 'No such User Exists',user : null})
        }
    }else{
        response.render('index',{errors : validObj.errors, message : '', user : null})
    }
})

//@route GET /add
//@description Fetch user register page
router.get('/add',(request, response)=>{
    response.render('register',{errors : null, message : ''})
})

// @route POST /add
// @description Register user if not exists, else update the details
router.post('/add',async (request, response)=>{
    
    const body = request.body
    const validObj = validate(body)
    if(validObj.isValid){
        let message = await dbOperations.addUser(body)
        response.render('register',{errors : null, message})
    }else{
        response.render('register',{errors : validObj.errors, message : ''})
    }

})

// @route GET /delete/:emailId
// @description Delete the user after searching
router.get('/delete/:emailId',async (request, response)=>{
    const body = request.body
    console.log(request.params.emailId)
    const validObj = validate(body)
    if(validObj.isValid){
        let message = await dbOperations.deleteUser(request.params.emailId)
        response.render('index',{errors : '', message, user : null})
    }else{
        response.render('index', {errors : validObj.errors, message : '', user : null})
    }
})


module.exports  = router