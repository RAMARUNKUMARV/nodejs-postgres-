const db= require("../connection/postgres");

module.exports=(sequelize,Sequelize)=>{
    const Address = sequelize.define('address', {
        id: {
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        name:{
            type:Sequelize.STRING,
            allowNull:false
        },
        country:{
            type:Sequelize.STRING,
            allowNull:true
        },
        state:{
            type:Sequelize.STRING,
            allowNull:true
        },
        city:{
            type:Sequelize.STRING,
            allowNull:true
        },
        seller_id :{
            type:Sequelize.INTEGER,
            allowNull:true
        }
    },);
   return Address
}