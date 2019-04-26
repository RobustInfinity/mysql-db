
module.exports = (obj)=>{

    let dataObject = obj
    let errors = {}

    //@validate emailId , if exists
    if("emailId" in dataObject){
        if(dataObject.emailId !== null && dataObject.emailId !==''){
            let regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
            if(!regex.test(dataObject.emailId)){
                errors.emailId = 'Error : Invalid Email'
            }
        }else{
            errors.emailId = 'Error : Email Required'
        }
    }
    
    //@validate emailId , if exists
    if("password" in dataObject){
        if(dataObject.password !== null && dataObject.password !==''){
            if(dataObject.password.length > 50){
                errors.password = 'Error : Password must have maximum 50 chars.'
            }
        }else{
            errors.password = 'Error : Password Required'
        }
    }
    
    //@validate username , if exists
    if("userName" in dataObject){
        if(dataObject.userName !== null && dataObject.userName !== ''){
            if(dataObject.userName.length > 50){
                errors.userName = 'Error : Username must have maximum 50 chars.'
            }
        }else{
            errors.userName = 'Error : Username must have maximum 50 chars.'
        }
    }
    
    //@validate phoneNumber , if exists
    if("phoneNumber" in dataObject){
        if(dataObject.phoneNumber !== null && dataObject.phoneNumber !== ''){
            if(dataObject.phoneNumber.length !== 10){
                errors.phoneNumber = 'Error : Invalid Phone Nubmer'
            }
        }else{
            errors.phoneNumber = 'Error : Phone Number Required'
        }
    }
    
    return {
        errors,
        isValid : Object.keys(errors).length > 0 ? false : true
    }
    
}