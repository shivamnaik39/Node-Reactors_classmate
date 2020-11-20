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
//Works
router.post('/addStudent/:id', (req, res) => {
    console.log(req.params.id)
    const studentid=req.params.id
    const syllabus=' '
    const subject=[{
        Sname: ' ',
        grade:[{marks:0}],
        faculty:' ',
        notes:[{link:' ',title:' '}],
        extnotes:[{link:' ',title:' '}],
        assid:[{ids:' '}]
    }]
    const assign=[{
        Aname: ' ',
        dueDate:Date(),
        statuse:1,
        content:' ',
        grades:0
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
//work
router.post('/addSyllabus/:id',upload.single('syllabus'),(req,res)=>{
    console.log(req.body)
    const url=req.protocol+'://'+req.get('host')
    
    User.findOne({studentid:req.params.id})
    .then(user=>{
        user.syllabus=url+'/Notes/'+req.file.filename 
        user.save()
        .then(result=>res.status(200).send({result}))
        .catch(err =>res.status(400).json('Error:'+err))
    })
    .catch(err=>res.status(500).send({err}))
})
//Check
router.put('/addAssign/:id',(req,res)=>{
    console.log(req.body)
    User.findOneAndUpdate({studentid:req.params.id},{$push:{"assign":{
        "Aname":req.body.aname,
        "dueDate":Date(req.body.dueDate),
        "statuse":req.body.status,
        "content":req.body.content,
        "grades":0
    }
}
})
.then(result=>{
    console.log(result)
    res.status(200).send('Assignment Added successfully')
})
.catch(err =>{
    console.log(err)
    res.status(500).send(err)
})
})
//works
router.put('/addSubject/:id',(req, res)=>{
    console.log(req.body)
    User.findOneAndUpdate({studentid:req.params.id},{$push:{"subject":{
        "Sname":req.body.sname,
        "faculty":req.body.faculty,
        "grade":[{marks:0}],
        "notes":[{link:' '}],
        "extnotes":[{link:' '}],
        "assid":[{ids:' '}]
    }
}
    })

.then(result=>{
    const sub=result.subject
    res.status(200).send("Subject added")
})
.catch(err =>{
    res.status(500).send({err})
})
    
})
//works
router.get('/GetAssignment/:id',(req,res)=>{
    User.findOne({studentid:req.params.id},(err,user)=>{
        if(err){
            res.status(500).send(err)
        }
        if(user.assign==null){
            res.status(404).send('Not Found')
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
            return res.status(404).send('Not Found')
            
        }
    })
})
//works
router.get('/GetSub/:id',(req,res)=>{
    User.findOne({studentid:req.params.id},(err,user)=>{
        if(err){
            
            res.status(500).send(err)
        }
        if(user.subject==null){
            res.status(404).send('No subject provided')
        }
        else{
            const Subject=user.subject
            res.status(200).send({Subject})
        }
    })
})
//works
router.put('/addNotes/:id',upload.single('content'),(req,res)=>{
    console.log(req.body)
    const url=req.protocol+'://'+req.get('host')
    const content=url+'/Notes/'+req.file.filename
    User.findOneAndUpdate({'subject._id':req.body.subid},{$push:{
        "subject.$[outer].notes":{"link":content,"title":req.body.title}
    }},
    { "arrayFilters":[{"outer._id": req.body.subid}]}
)
.then(result=>{
    const sub=result.subject.notes
    res.status(200).send('Notes Added successfully')
})
.catch(err =>{
    res.status(500).send(err)
})
    
})
//works
router.put('/addLink/:id',(req,res)=>{
    console.log(req.body.subid)
    User.findOneAndUpdate({'subject._id':req.body.subid},{$push:{
        "subject.$[outer].extnotes":{"link":req.body.link,"title":req.body.title}
    }},
    { "arrayFilters":[{"outer._id": req.body.subid}]}
)
.then(result=>{
    const sub=result.subject.notes
    res.status(200).send('Link Added successfully')
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
    
    User.update({'assign._id':req.body.aid},{$set:{
        "assign.$[outer].statuse":0,
        }},{ "arrayFilters":[{"outer._id": req.body.aid}]})
    .then(result=>{
        const sub=result.assign
        res.status(200).send('GOOD  Going Boss')
    })
    .catch(err =>{
        console.log(err)
        res.status(500).send(err)
    }) 
    })
//check
router.put('/updateAssStatus/:id',(req,res)=>{
    User.update({'assign._id':req.body.id},{$set:{
        "assign.$[outer].statuse":1,
        

    }},{ "arrayFilters":[{"outer._id": req.body.aid}]})
    .then(result=>{
        const sub=result.assign
        res.status(200).send('GRT!! Have yourself a Treat you have earned it')
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