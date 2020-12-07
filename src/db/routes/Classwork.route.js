const router=require('express').Router();
let User=require('../model/Classwork.model');
let Student=require('../model/Student.model');
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
const nodemailer=require('nodemailer');
const transporter=nodemailer.createTransport({
    service:'Gmail' ,
    
    auth:{
        user:'savishkargec@gmail.com',
        pass:'for@*web'
   }
})
let cron = require('node-cron');


cron.schedule('2-4 58 0 1-31 * *', (req,res) => {
    User.find()
    .then(user =>{
        for(let i=0;i<user.length;i++){
            for(let j=0;i<user[i].assign.length;j++){
                console.log(user[i].assign[j].dueDate-new Date())
                let difftime=new Date().getTime()-user[i].assign[i].dueDate.getTime();
                let diifday=difftime/(1000 * 3600 * 24);
                if(diifday<2){
                    Student.findById(user[i].studentid)
                    .then(student=>{
                        console.log('running a task every minute');
                        transporter.sendMail({
                        to:student.email,
                        from:"savishkargec@gmail.com",
                        subject:"Assignment Due",
                        html:`
                        <p>Hi ${student.name}<br /> looks like you haven't completed ${user[i].assign[j]} assignment yet!</p>
                        <h5>lets fnish it off shall we<br /> if you have already completed the assignment do let us know</h5>
                        <h1>Have A Wonderful Day<br /><small>from classmates</small></h1>
                        `
                  },(err,result)=>{
                    if(err){
                        console.log(err)
                    }
                    else{
                    }
                    transporter.close()
                })
                    })
                    
                }
            }
        }
    })
   
});























//Works fine
router.post('/addStudent/:id', (req, res) => {
    console.log("called")
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
        subid:' ',
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
//work fine required:(file name syllabus)
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
//Works Fine requires subject id Ass Name and Date 
router.put('/addAssign/:id',(req,res)=>{
    console.log(req.body)
    console.log("the id is"+req.params.id)
    User.findOneAndUpdate({studentid:req.params.id},{$push:{"assign":{
        "subid":req.body.subid,
        "Aname":req.body.aname,
        "dueDate":Date(req.body.dueDate),
        "statuse":-1,
        "content":req.body.content,
        "grades":0
    }
}
})
        .then(result => {
    console.log("inthen")
    console.log(result)
    res.status(200).send('Assignment Added successfully')
})
.catch(err =>{
    console.log(err)
    console.log("inerror")
    res.status(500).send(err)
})
})
//works fine requires subject name faculty
router.put('/addSubject/:id',(req, res)=>{
    console.log(req.body)
    User.findOneAndUpdate({studentid:req.params.id},{$push:{"subject":{
        "Sname":req.body.sname,
        "faculty":req.body.faculty,
        "grade":[{marks:0}],
        "notes":[{link:' '}],
        "extnotes":[{link:' '}]
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
//works fine requires subject id
router.get('/GetAssignment/:id',(req,res)=>{
    console.log(req.params.id)
    const Assign=[]
    User.find({'assign.subid':req.params.id},(err,user)=>{
        if(err){
            res.status(500).send(err)
        }
        if(user[0]==null){
            res.status(200).send('No assignment')
        }
        else{
            console.log(user)
            const Stud=user[0]
            console.log(Stud.assign[1])
            for(let i=1;i<Stud.assign.length;i++){
                if(Stud.assign[i].subid==req.params.id){
                    Assign.push(Stud.assign[i])
                }
            }
            if(Assign.length!=0){
                return res.status(200).send(Assign)
            }
            else{
                return res.status(404).send('No Data Found')
            }
        }
    })
    .then(result=>{
        console.log(result)
    })
})
//works fine requires subjectid
router.get('/GetNotes/:id',(req,res)=>{
    const Notes=[]
    User.findOne({'subject._id':req.params.id},(err,user)=>{
        if(err){
            res.status(500).send(err)
        }
        if(user.subject==null){
            res.status(404).send('Not Found')
        }
        else{
            for(let i=0;i<user.subject.length;i++){
                if(user.subject[i]._id==req.params.id)
                {
                    console.log('in for')
                    Notes.push(user.subject[i].notes)
                    
                }
            }
            if(Notes.length!=0){
                return res.status(200).send(Notes)
            }
            else{
            return res.status(404).send('Not Found')
            }
        }
    })
})
//work fine required subject id
router.get('/GetNotesExt/:id',(req,res)=>{
    const Notes=[]
    User.findOne({'subject._id':req.params.id},(err,user)=>{
        if(err){
            res.status(500).send(err)
        }
        if(user.subject==null){
            res.status(404).send('Not Found')
        }
        else{
            for(let i=0;i<user.subject.length;i++){
                if(user.subject[i]._id==req.params.id)
                {
                    console.log('in for')
                    Notes.push(user.subject[i].extnotes)
                    
                }
            }
            if(Notes.length!=0){
                return res.status(200).send({Notes})
            }
            else{
            return res.status(404).send('Not Found')
            }
        }
    })
})
//works fine requires studentid
router.get('/GetSub/:id', (req, res) => {
    console.log(req.params.id)
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
//works fine requires content file and title
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
//works fine requires link and title
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
//works requires grade subject id 
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
//worksFine nothing to be honest
router.put('/addAssStatus/:id',(req,res)=>{
    
    User.updateOne({'assign._id':req.body.aid},{$set:{
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
//workfine requires grade
router.put('/updateAssStatus/:id',(req,res)=>{
    User.updateOne({'assign._id':req.body.aid},{$set:{
        "assign.$[outer].statuse":1,
        "assign.$[outer].grades":req.body.grade
    }},{ "arrayFilters":[{"outer._id": req.body.aid}]})
    .then(result=>{
        const sub=result.assign
        res.status(200).send('GRT!! Have yourself a Treat you have earned it')
    })
    .catch(err =>{
        res.status(500).send(err)
    }) 
})
//check future ke liye 
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