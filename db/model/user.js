

//@Table "userData"
//@primary Key "emailId"

module.exports = (sequelize, type) => {
    return  sequelize.define('user',{
        userName : {
            type : type.STRING(25),
            allowNull : false
        },
        emailId : {                             
            type : type.STRING(50),
            allowNull : false,
            primaryKey : true
        },
        phoneNo :{
            type : type.STRING(10),
            allowNull : false
        },
        password : {
            type : type.STRING(50),
            allowNull : false
        },
        dateTime : {
            type : type.DATE,
            defaultValue : type.NOW
        }
    },{
        timestamps : false,
        tableName : 'userData' ,
        sequelize
    })
}



