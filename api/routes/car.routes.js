const carController = require("../controllers/car.controller");
module.exports = (app) =>{
  const router = require('express').Router();
  const carController = require("../controllers/car.controller");

    // find a car
    router.get('/', carController.findOne)

    // get all car
    router.get("/findall",carController.findAll)

    // add a car
    router.post("/", carController.add)

    // update a car
    router.put("/", carController.update)

    // delete a car
    router.delete("/", carController.deleteACar)


   app.use("/cars",router);
}
