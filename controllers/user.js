const db = require("../connection/postgres");
const bcrypt = require('bcrypt');
//CreateUser
async function CreateUser(req, res) {

   try {
      let password = await bcrypt.hash(req.body.password, 10)
      req.body.password = password
      console.log("pass", password);
      let user = await db.User.create(req.body)

      console.log("user", user);
      //create seller 

      let seller = await db.Seller.create({ 'name': user.name, 'user_id': user.id, 'country': user.country })
      console.log("seller", seller);
      return res.status(200).json({ message: user });
   }

   catch (err) {
      res.status(500).json({ message: err.message });
   }
}

//GetUserById
async function GetUserById(req, res) {
   try {
      const user = await db.User.findOne({
         include: {
            model: db.Seller,
            include: db.Address
         },
         where: { id: req.params.id }
      });
      return res.status(200).json({
         message: user
      });
   }

   catch (err) {
      res.status(500).json({ message: err.message });
   }
}

//GetAllUser
async function GetAllUser(req, res) {
   try {
      const users = await db.User.findAll({ include: db.Seller });
      return res.status(200).json({ message: users });
   }

   catch (err) {
      res.status(500).json({ message: err.message });
   }
}


//UpdateUser
async function UpdateUser(req, res) {
   try {
      const users = await db.User.update({
         where: { id: req.params.id }
      });
      return res.status(200).json({ message: users });
   }

   catch (err) {
      res.status(500).json({ message: err.message });
   }
}


//DeleteUser
async function DeleteUser(req, res) {
   try {
      const users = await db.User.destroy({
         where: { id: req.params.id }
      });
      return res.status(200).json({ message: users });
   }

   catch (err) {
      res.status(500).json({ message: err.message });
   }
}

//export API's
module.exports = { CreateUser, GetUserById, GetAllUser, DeleteUser, UpdateUser }