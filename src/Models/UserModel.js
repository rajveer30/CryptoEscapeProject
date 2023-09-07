const mongoose= require('mongoose')  //schema
const userSchema=new mongoose.Schema({
email:{
    type: String,
    require:true,
    unique:true
},

password:{
    type:String,
    require:true
}
},{collection:'userdata'} ) //giving collection name

const usermodel=new mongoose.model('userdata',userSchema); //crates model from schema
module.exports=usermodel;
