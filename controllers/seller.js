const db = require("../connection/postgres");

async function GetSeller(req, res) {
    try {
        const seller = await db.Seller.findOne({
            include: [
                {
                    model: db.User,
                },
                {
                    model: db.Address,
                },
            ],
            where: { id: req.params.id }
        })
        // console.log("length",seller.addresses.length);
        // if (!seller.addresses.length==0){
        // console.log("seller---------------------------",seller.addresses[0].name);
        // }
        return res.status(200).json({ message: seller });
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}
async function CreateSellerAddress(req, res) {
    try {
        console.log("req", req.body);
        let sellerAddress = await db.Address.create(req.body)
        return res.status(200).json({ message: sellerAddress });
    }
    catch (err) {
        console.log("error", err);
        return res.status(500).json({ message: err.message });
    }
}
async function GetSellerAddress(req, res) {
    try {
        const seller = await db.Seller.findOne({ include: db.Address })
        return res.status(200).json({ message: seller });
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

module.exports = { GetSeller, CreateSellerAddress, GetSellerAddress }



// User.findAll({
//     include: [{
//       model: Role,
//       as: 'Roles'
//     }],
//     attributes:{ exclude: ['Password','createdAt','updatedAt'] }
//   })