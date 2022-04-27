module.exports = (app) =>{
  const router = require('express').Router();
   const carController = require("../controllers/car.controller");

   router.get("/findall",carController.findAll);
   router.post("/update",carController.update);

   app.use("/cars",router);
}
