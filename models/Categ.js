const mongoose = require("mongoose");
const CategSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  icon: {
    type: String,
    require: false,
    default: "",
  },
},{
    timestamp: true
  });



module.exports = mongoose.model("Categ", CategSchema);
