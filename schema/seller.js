const db = require("../connection/postgres");


module.exports=(sequelize,Sequelize)=>{
    const Seller = sequelize.define('sellers', {
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
        user_id:{
            type:Sequelize.INTEGER,
            allowNull:true
        },
    },);
      return Seller
}
