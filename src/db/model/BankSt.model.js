const mongoose =require('mongoose')
const Schema=mongoose.Schema

const BankSchema=Schema({
    maxloan:{type:Number,required:true},
    intrestR:{type:Number,required:true},
    Amount:{type:Number,required:required},
    expenses:{type:Number,required:required},
    requirments:{type:String,required:true},
    bankLink:{type:String,required:true},
    useremail:{type:String,required:true}
})
const bank=mongoose.model('Bank',BankSchema)
module.exports=bank