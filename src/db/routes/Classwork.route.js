const router=require('express').Router();
let User=require('../model/Classwork.model');
let multer=require('multer'),
    uuidv4=require('uuidv4')
    

var cloudinary=require('cloudinary').v2
cloudinary.config({
    cloud_name:'savishkar',
    api_key:'485787349522969',
    api_secret:'zOTZ3DN66ch5LSY7cqcjf5yVu3E'
})
const DIR='./Notes/';

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,DIR);
    },
    filename:(req,file,cb)=>{
        const filename=file.originalname.toLowerCase().split(' ').join('-');
        cb(null,uuidv4+'-'+filename)
    }
})
var upload = multer({
    storage: storage,
    
});
//check
router.post('/addStudent/:id',(req,res)=>{
    const studentid=req.params.id
    const syllabus=url+'/Notes/'+req.file.filename
    const subject=[{
        Sname: ' ',
        grade:[{marks:0}],
        faculty:' ',
        notes:[{link:' '}]
    }]
    const assign=[{
        Aname: ' ',
        dueDate:Date(),
        statuse:true,
        content:' '
    }]
    
    const Examination=Date()

    const newUser=new User({studentid,syllabus,subject,assign,Examination})
    console.log(newUser)
    /*cloudinary.uploader.upload(newUser.syllabus,{resource_type:"raw"},(err,result)=>{
        console.log('in cloud')
        if(err){
            console.log(err)
            res.status(500).json(err)
        }
        else{
            newUser.syllabus=result.url*/
            newUser.save()
            .then(result => {
                console.log(result)
                res.status(201).json({
                message: "User registered successfully!",
               
            })
        })
        .catch(err => {
            console.log(err),
                res.status(500).json({
                    error: err
                });
        })
})
//check
router.post('/addSyllabus/:id',upload.single('syllabus'),(req,res)=>{
    const studentid=req.params.id
    const url=req.protocol+'://'+req.get('host')
    const syllabus=url+'/Notes/'+req.file.filename 
    User.findOneAndUpdate({studentid:req.params.id},(err,user)=>{
        user.syllabus=syllabus
        user.save()
        .then(response=>res.status(200).send({response}))
        .catch(err=>res.status(500).send({err}))
    })
       
    


})
//work
router.put('/addAssign/:id',(req,res)=>{
    User.findOneAndUpdate({studentid:req.params.id},{$push:{"assign":{
        "Aname":req.body.aname,
        "dueDate":Date(req.body.date),
        "statuse":false,
        "content":' ',
        "priority":req.body.priority,
        "grades":0
    }
}

})
.then(result=>{
    const sub=result.assign
    res.status(200).send({sub})
})
.catch(err =>{
    res.status(500).send({err})
})
})
//works
router.put('/addSubject/:id',(req, res)=>{
    console.log(req.body)
    User.findOneAndUpdate({studentid:req.params.id},{$push:{"subject":{
        "Sname":req.body.sname,
        "faculty":req.body.faculty,
        "grade":[{marks:0}],
        "notes":[{link:' '}]
    }
}
    })

.then(result=>{
    const sub=result.subject
    res.status(200).send({sub})
})
.catch(err =>{
    res.status(500).send({err})
})
    
})
//work
router.get('/GetAssignment/:id',(req,res)=>{
    User.findOne({studentid:req.params.id},(err,user)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            const Assgn=user.assign
            res.status(200).send({Assgn})
        }
    })
})
//works
router.get('/GetNotes/:id',(req,res)=>{
    User.findOne({'subject._id':req.params.id},(err,user)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            for(let i=0;i<user.subject.length;i++){
                if(user.subject[i]._id==req.params.id)
                {
                    console.log('in for')
                    const Notes=user.subject[i].notes
                    return res.status(200).send({Notes})
                }
            }
            
        }
    })
})
//works
router.get('/GetSub/:id', (req, res) => {
    console.log(req.params.id)
    User.findOne({studentid:req.params.id},(err,user)=>{
        if(err){
            
            res.status(500).send(err)
        }
        else {
            console.log(user)
            const Subject=user.subject
            res.status(200).send({Subject})
        }
    })
})
//works
router.put('/addNotes/:id',upload.single('content'),(req,res)=>{
    console.log(req.body.subid)
    const url=req.protocol+'://'+req.get('host')
    const content=url+'/Notes/'+req.file.filename
    User.findOneAndUpdate({'subject._id':req.body.subid},{$push:{
        "subject.$[outer].notes":{"link":content}
    }},
    { "arrayFilters":[{"outer._id": req.body.subid}]}
)
.then(result=>{
    const sub=result.subject.notes
    res.status(200).send({sub})
})
.catch(err =>{
    res.status(500).send(err)
})
    
})
//works
router.put('/addGrades/:id',(req,res)=>{
    console.log(req.body)
    User.findOneAndUpdate({'subject._id':req.body.subid},{$push:{
        "subject.$[outer].grade":{"marks":req.body.grade}
    }},
    { "arrayFilters":[{"outer._id": req.body.subid}]}
)
.then(result=>{
    const sub=result.subject
    res.status(200).send({sub})
})
.catch(err =>{
    res.status(500).send(err)
})
    
})
//check
router.put('/addAssStatus/:id',(req,res)=>{
    
    User.updateOne({'assign._id':req.params.id},{$set:{'assign':{
        "statuse":false
    }}})
    .then(result=>{
        const sub=result.assign
        res.status(200).send({sub})
    })
    .catch(err =>{
        res.status(500).send(err)
    }) 
    })
//check
router.put('/updateAssStatus/:id',(req,res)=>{
    User.updateOne({studentid:req.params.id},{$set:{'assign':{
        "statuse":true
    }}})
    .then(result=>{
        const sub=result.assign
        res.status(200).send({sub})
    })
    .catch(err =>{
        res.status(500).send(err)
    }) 
})
//check
router.put('/addCopy/:id',upload.single('content'),(req,res)=>{
    console.log(req.body.subid)
    const url=req.protocol+'://'+req.get('host')
    const content=url+'/Notes/'+req.file.filename
    User.findOneAndUpdate({'assign._id':req.body.subid},{$push:{
        "assign.$[outer].content":content
    }},
    { "arrayFilters":[{"outer._id": req.body.subid}]}
)
.then(result=>{
    const sub=result
    res.status(200).send({sub})
})
.catch(err =>{
    res.status(500).send(err)
})
    
})
module.exports=router;