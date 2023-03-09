db=require("./connection/postgres");//database connecting
const morgan=require('morgan')//api hits time
const express=require('express')//frame work

const dotenv=require('dotenv')//config env file
dotenv.config()

var app=express()

db.sequelize.sync()//db connected or not
  .then(() => {
    console.log("connected database.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
//routes
const user = require('./routes/user')
//middleware
app.use(express.json())
app.use(morgan("common"))

app.use(express.urlencoded({extended:true}))//en coded body
const PORT=8000

app.use('/v1/',user)//groups

app.listen(PORT,function(){console.log( PORT,'service Started ')})//server port running
