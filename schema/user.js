const db = require("../connection/postgres");

module.exports=(sequelize,Sequelize)=>{
    const User = sequelize.define('users', {
        id: {
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        name:{
            type:Sequelize.STRING,
            allowNull:false
        },
        password:{
            type:Sequelize.STRING,
            allowNull:false
        },
        is_active:{
            type:Sequelize.BOOLEAN,
            allowNull:false
        },
        country:{
            type:Sequelize.STRING,
            allowNull:true
        },
    },);
     return User
}
