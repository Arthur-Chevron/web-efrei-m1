module.exports = (mongoose) => {
  let schema = mongoose.Schema({
    brand:String,
    horse_power:Number,
    num_doors:Number,
    model:String
  })

  return mongoose.model("cars", schema)
}