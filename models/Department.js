const mongoose = require("mongoose")
const DepartmentSchema = new mongoose.Schema({

    departId:{
        type:String,
        required:true,
    },

    departName:{
        type:String,
        required:true,
    },
    HOD:{
        type:String,
        required:true,
    },
    startDate:{
        type:String,
        required:true,
    },
    nofStud:{
        type:Number,
        required:true,
    },

},
{ timestamps: true}
);

module.exports = mongoose.model("Department", DepartmentSchema);