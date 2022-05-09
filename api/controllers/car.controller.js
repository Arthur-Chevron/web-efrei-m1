db = require("../models/index")
const Cars = db.Cars

exports.findAll = async (req, res) => {
  try {
    const allCars = await Cars.find({})
    if (allCars.length === 0) return res.status(200).send("You don't have any car")

    return res.status(200).send({message: "See all your cars", data: allCars})
  } catch(err) {
    return res.status(500).send({message: "Error", err: err})
  }
}


exports.findOne = async (req, res) => {
  const _id = req.query._id

  if (!_id) return res.status(400).send("_id is required")

  try {
    const oneCar = await Cars.findOne({_id: _id})

    if (!oneCar) return res.status(404).send("Car doesn't exist")
    return res.status(200).send({message: "See your car id : " + _id, data: oneCar})

  } catch(err) {
    return res.status(500).send({message: "Error", err: err})
  }
}


// add a car
exports.add = async (req, res) => {
  const brand = req.body.brand
  const horse_power = req.body.horse_power
  const num_doors = req.body.num_doors
  const model = req.body.model

  if (!brand) return res.status(400).send("Brand is required")
  if (!horse_power) return res.status(400).send("Horse power is required")
  if (!num_doors) return res.status(400).send("Number of doors is required")
  if (!model) return res.status(400).send("Model is required")
  if (horse_power <= 0) return res.status(400).send("Horse power must be greater than 0")
  if (num_doors <= 0) return res.status(400).send("Car must have at least 1 door")

  try {

    const newCar = {
      brand: brand,
      horse_power: horse_power,
      num_doors: num_doors,
      model: model
    }

    const addNewCar = await Cars.create(newCar)
    return res.status(200).send({message: "Add confirm", data: addNewCar})

  } catch (err) {
    return res.status(500).send({message: "Error", err: err})
  }
}


exports.update = async (req,res) => {
  const _id = req.query._id
  const brand = req.body.brand
  const horse_power = req.body.horse_power
  const num_doors = req.body.num_doors
  const model = req.body.model

  if (!_id) return res.status(400).send("_id is required")

  let updateCar = {}
  if (brand !== null && brand !== '') updateCar.brand = brand
  if (horse_power !== null && horse_power !== '') updateCar.horse_power = horse_power
  if (num_doors !== null && num_doors !== '') updateCar.num_doors = num_doors
  if (model !== null && model !== '') updateCar.model = model

  if (horse_power <= 0) return res.status(400).send("Horse power must be greater than 0")
  if (num_doors <= 0) return res.status(400).send("Car must have at least 1 door")

  try {
    const data = await Cars.findByIdAndUpdate({_id: _id}, updateCar)

    if (!data) return res.status(404).send("Car doesn't exist")
    return res.status(200).send({message: "Car succesfully updated", data: data})

  } catch(err) {
    return res.status(500).send({message: "Error", err: err})
  }
}

exports.deleteACar = async (req, res) => {
  const _id = req.query._id

  if (!_id) return res.status(400).send("_id is required")

  try {
    const deleteCar = await Cars.findOneAndDelete({_id: _id})

    if (!deleteCar) return res.status(404).send("Car doesn't exist")
    return res.status(200).send({message: "Delete your car id : " + _id, data: deleteCar})

  } catch(err) {
    return res.status(500).send({message: "Error", err: err})
  }
}