db = require("../models/index")
const carConnectionObj = db.Cars

exports.findAll = async (req,res) => {
  const Cars = await carConnectionObj.find({})
  if (Cars.length === 0) res.status(200).send("You don't have any car")
  res.status(200).send("See all your cars : " + Cars)
}

exports.update = async (req,res) => {
  const id= "625e8149021f0246b7463c7b"

  try {
    const data = await carConnectionObj.findByIdAndUpdate(id, {horse_power:200})
    if (!data) res.status(404).send("coul not find requested car id")
    else res.status(200).send("car succesfully updated")
  } catch(err) {
    console.log(err);
    res.status(500).send("internal server error")
  }
}