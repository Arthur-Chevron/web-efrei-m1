const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dbConfig = require("./config/db.config")
const db = require("./models/index")
const carController = require("./controllers/car.controller")
const carConnectionObj = db.Cars
const carRoutes = require("./routes/car.routes")

const app = express();

app.use(cors(
    {
      "origin": "*"
    }
))

carRoutes(app)

app.get("/",(req,res) => {
  res.status(200).send("welcome to our exemple api")
});

mongoose.connect(dbConfig.url,{})
.then(
  console.log("connected succed")
).catch(err=>{
  console.log("connection failed",err)
});

app.listen(8085,()=>{
  console.log("application running on port 8085");
})

