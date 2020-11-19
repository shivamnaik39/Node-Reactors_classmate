const mongoose=require('mongoose')
const Schema=mongoose.Schema
var subjectsSchema = Schema({ 
    Sname: String, 
    grade: {type:Array,required:true},
    notes: {type:Array}


});
var AssignmentSchema = Schema({ 
    Aname:String,
    dueDate:{type:Date,required:true},
    statuse:{type:Boolean,required:true},
    content:{type:String}
});



const ClassWorkSchema=new Schema({
    course:{
          type:String,
        required:true
    },
    subject:[subjectsSchema],
    assign:[AssignmentSchema],
    syllabus:{type:String,required:true},
    faculty:{type:String,required:true},
    Examination:{type:Date,required:true}
    
})

const classwork=mongoose.model('classwork',ClassWorkSchema);

module.exports=classwork