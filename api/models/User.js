const mongoose=require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        name:{type:String,required:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        mobile:{type:Number,required:true,min:10},
    },
  {timestamps:true}
)

module.exports=mongoose.model('User',UserSchema)