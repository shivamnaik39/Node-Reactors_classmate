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
const DIR='./Notes';

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
router.route('/').get((req,res)=>{
    User.find()
    .then(story=>res.json(story))
    .catch(err=>res.status(400).json('Error:'+err))
})
router.post('/add',upload.single('content'),(req,res)=>{
    const url=req.protocol+'://'+req.get('host')
    const syllabus=url+'/Notes'+req.file.filename    
    const faculty=req.body.faculty
    const subject=[{
        sname: ' ',
        grade:[],
        notes:[]
    }]
    const assign=[{
        Aname: ' ',
        dueDate:' ',
        statuse:' '
    }]
    const course=req.body.course
    const Examination=Date(req.body.date)

    const newUser=new User({syllabus,faculty,subject,assign,course,Examination})

    cloudinary.uploader.upload(newUser.syllabus,{resource_type:"raw"},(err,result)=>{
        if(err){

            res.status(500).json(err)
        }
        else{
            newUser.syllabus=result.url
            newUser.save()
            .then(result => {
                res.status(201).json({
                message: "User registered successfully!",
                userCreated: {
                    title:result.title,
                    content:result.content
                }
            })
        })
        .catch(err => {
            console.log(err),
                res.status(500).json({
                    error: err
                });
        })
        }
    })

})
router.put('/addNotes/:id',upload.single('content'),(req,res)=>{
    const url=req.protocol+'://'+req.get('host')
    const content=url+'/Notes'+req.file.filename
    User.updateOne({id:req.params.id})
    .then(user=>{
        const Subject=[{
            sname: req.body.sname,
            grade:[],
            notes:notes.append({content})
        }]
        user.subject.append(Subject)
        cloudinary.uploader.upload(user.subject.content,{resource_type:"raw"},(err,result)=>{
            if(err){
    
                res.status(500).json(err)
            }
            else{
                user.syllabus=result.url
                user.save()
                .then(result => {
                    res.status(201).json({
                    message: "User registered successfully!",
                    userCreated: {
                        title:result.title,
                        content:result.content
                    }
                })
            })
            .catch(err => {
                console.log(err),
                    res.status(500).json({
                        error: err
                    });
            })
            }
        })
    })
    

    

   

})

router.put('/addAssStatus/:id',(req,res)=>{
    
    User.updateOne({id:req.params.id})
    .then(user=>{
        const Assign={
            Aname: req.body.sname,
            dueDate:Date(req.body.dueDate),
            statuses:false,
            content:' '
        }
        user.assign.append(Assign)
        user.save()
                .then(result => {
                    res.status(201).json({
                    message: "User registered successfully!"
                })
            })
            .catch(err => {
                console.log(err),
                    res.status(500).json({
                        error: err
                    });
        
        })
    })
})
router.put('/updateAssStatus/:id',upload.single('content'),(req,res)=>{
    const url=req.protocol+'://'+req.get('host')
    
    User.updateOne({id:req.params.id})
    .then(user=>{
        const Assign=[{
            Aname: req.body.sname,
            dueDate:Date(req.body.dueDate),
            statuses:req.body.status
        }]
        user.assign.append(Assign)
        user.save()
                .then(result => {
                    res.status(201).json({
                    message: "User registered successfully!"
                })
            })
            .catch(err => {
                console.log(err),
                    res.status(500).json({
                        error: err
                    });
        
        })
    })
    

    

   

})
router.put('/addAssi/:id',upload.single('content'),(req,res)=>{
    const url=req.protocol+'://'+req.get('host')
    const content=url+'/Notes'+req.file.filename
    User.updateOne({id:req.params.id})
    .then(user=>{
        const Assign=[{
            aname:user.name,
            dueDate:user.dueDate,
            statuses:true,
            content:content

        }]
        user.assign.append(Assign)
        cloudinary.uploader.upload(user.assign.content,{resource_type:"raw"},(err,result)=>{
            if(err){
    
                res.status(500).json(err)
            }
            else{
                user.syllabus=result.url
                user.save()
                .then(result => {
                    res.status(201).json({
                    message: "User registered successfully!",
                    userCreated: {
                        title:result.title,
                        content:result.content
                    }
                })
            })
            .catch(err => {
                console.log(err),
                    res.status(500).json({
                        error: err
                    });
            })
            }
        })
    })
    

    

   

})

module.exports=router;