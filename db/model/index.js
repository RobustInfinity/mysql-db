
const {DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT} = require('../../config')

const {Sequelize} = require('sequelize')
const UserModel = require('./user')

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD,{
    dialect : 'mysql',
    host : DB_HOST,
    port : DB_PORT
})


const User = UserModel(sequelize, Sequelize)

sequelize.sync(function(err){console.log(err)})
   

module.exports = {
    User
}
