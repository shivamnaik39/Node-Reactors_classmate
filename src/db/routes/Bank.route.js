const router=require('express').Router();
let User=require('../model/BankSt.model');
const Razorpay=require('razorpay')
const shortid=require('shortid')


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

   console.log('running a task every minute');
   User.find()
   .then(user => {
       for(var i=0; i<user.length; i++)
       {
        transporter.sendMail({
            to:user.useremail,
            from:"savishkargec@gmail.com",
            subject:"Mothly Expendediture",
            html:`
            <p>Hi here is your Monthly expenditure:${user.expenses}
            thaml you
            </p>
            `
        },(err,result)=>{
            if(err){
                console.log(err)
            }
            else{
            }
            transporter.close()
        })
       }
   })
   
});
router.post('/add/:id',(req,res)=>{
    const maxloan=req.body.maxloan
    const amount=0
    const intrestR=req.body.intrestR
    const expenses=0
    const requirments=req.body.requirments
    const bankLink=req.body.bankLink
    const useremail=req.body.useremail
    
    const newUser=new User({id,amount,intrestR,expenses,requirments,bankLink,useremail})
    newUser.save()
            .then(result => {
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
router.post('/addExpenses/:id',(req,res)=>{
   User.updateOne({id:req.params.id})
   .then(user =>{
    user.amount=req.body.amount
    user.expenses=user.expenses+amount
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

module.exports =router;
