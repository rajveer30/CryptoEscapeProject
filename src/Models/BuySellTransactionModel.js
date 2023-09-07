const mongoose= require('mongoose')
const buyselltransactionSchema=new mongoose.Schema({
   
email:{
    type: String,
    unique:false
},
 payment:{
    type:Object,
    require:true,
 }
},{collection:'TransactionData'} )

const buyselltransactionmodel=new mongoose.model('TransactionData',buyselltransactionSchema);
module.exports=buyselltransactionmodel;

