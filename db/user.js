
const {User} = require('./model')

/*
*   @description add user, if not exists else @updateUser()
*/
const addUser = async (obj) => {

    try{
        let userObj = await searchUser(obj) 
        if(userObj){
            console.log('User already Exists',userObj)
            let updatedUser = await updateUser(obj)
            return 'User Updated Successfully'
        }else{
            let newUser = await User.build({
                emailId : obj.emailId,
                userName : obj.userName,
                password: obj.password,
                phoneNo : obj.phoneNo
            }).save()
            return 'User Created Successfully'
        }
    }catch(err){
        console.log('Unable to save',err)
    }
}

/*
*   @description update user, if exists
*/
const updateUser = async (obj)=>{

    try{

        let updatedUser = await User.update({
                userName : obj.userName,
                password: obj.password,
                phoneNo : obj.phoneNo
        },{
            where : {
                emailId : obj.emailId
            }
        })

        return updatedUser
    }catch(err){
        console.log('Unable to update',err)    
    }
    
}

/*
*   @description search user on the basis of EmailId
*/
const searchUser = async (obj) => {

    try{
        let userObj = await User.findOne({
            where : {
                emailId : obj.emailId
            }
        })
        console.log('Searched User', userObj)
        return userObj
    }catch(err){
        console.log('Unable to search',err)
    }
   
}

/*
*   @description delete user on the basis of EmailId
*/
const deleteUser = async (emailId) => {
    try{
        let userObj = await User.destroy({
            where : {
                emailId : emailId
            }
        })
        console.log('Deleted User', userObj)
        return 'User Deleted Successfully'
    }catch(err){
        console.log('Unable to delete')
    }
    
}

module.exports = {
    addUser,
    searchUser,
    deleteUser,
    updateUser
}