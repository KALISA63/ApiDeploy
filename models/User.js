const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        // unique:true,
    },
        email:{
            type:String,
            require:true,
        },
        password:{
            type:String,
            required:true,
        },
        picture:{
            type:String,
            require:false,
            default:'',
        },
})
{timestamp:true}

module.exports=mongoose.model("User",UserSchema)