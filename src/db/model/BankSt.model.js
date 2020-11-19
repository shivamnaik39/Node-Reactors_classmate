const mongoose =require('mongoose')
const Schema=mongoose.Schema
var Expenses=Schema({
    goods:{type:String},
    prices:{type:Number}
});
const BankSchema=Schema({
    dueDate:String,
    Amount:{type:Number,required:required},
    paid:{type:Number,required:required},
    intrestR:{type:Number,required:required},
    expenses:[Expenses]
})
const bank=mongoose.model('Bank',BankSchema)
module.exports=bank