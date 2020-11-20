const mongoose=require('mongoose')
const Schema=mongoose.Schema
var subjectsSchema = Schema({ 
    Sname: {type:String, required:true}, 
    grade: [{marks:{type:Number,required:true}}],
    faculty:{type:String,required:true},
    notes: [{link:{type:String,required:true}}]


});
var AssignmentSchema = Schema({ 
    Aname:String,
    dueDate:{type:Date,required:true},
    statuse:{type:Boolean,required:true},
    content:{type:String,required:true},
    priority:{type:Number},
    grades:{type:Number}
});



const ClassWorkSchema=new Schema({
    studentid:String,
    subject:[subjectsSchema],
    assign:[AssignmentSchema],
    syllabus:{type:String,required:true},
    Examination:{type:Date,required:true}
    
})

const classwork=mongoose.model('classwork',ClassWorkSchema);

module.exports=classwork