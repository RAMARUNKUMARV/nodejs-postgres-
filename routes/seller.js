
const router=require('express').Router()//import express

const seller =require('../controllers/seller')

router.get('/seller/:id',seller.GetSeller)
router.get('/seller-address/:id',seller.GetSellerAddress)
router.post('/seller-address',seller.CreateSellerAddress)

module.exports=router