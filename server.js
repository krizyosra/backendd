const express = require("express")
var cookieParser = require('cookie-parser')
const app= express()

require("dotenv").config()
const PORT=process.env.PORT


const connect= require("./config/connectDB")
const RoutesProduct=require('./routes/RoutesProduct')
const Routeuser= require("./routes/RoutesUSer")
const cors = require("cors");

//const corsOptions = {
  /////  origin: 'https://client-jade-chi.vercel.app/', 
   // methods: ['GET', 'POST', 'PUT', 'DELETE'], 
   // allowedHeaders: ['Content-Type', 'Authorization'], 
  //  credentials: true, 
  //};
  const allowedOrigins = ['https://client-jade-chi.vercel.app'];

  const corsOptions = {
    origin: function (origin, callback) {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,  // Si vous travaillez avec des cookies ou des sessions
  };
  
  app.use(cors(corsOptions));

connect()
//app.use(cors(corsOptions))

app.options('*', cors(corsOptions));
app.use(express.json())
app.use('/api/product', RoutesProduct)
app.use('/api/user',Routeuser)




 





/*
app.use(function(req,res){
    res.status(404).send("not found")
})
*/

app.listen(PORT,(err)=>{


    console.log(err)
    console.log("server is running")
})

