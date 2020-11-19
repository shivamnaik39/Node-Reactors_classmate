const router=require('express').Router();
let User=require('../model/BankSt.model');
router.post('/add',(req,res)=>{
    const paid=req.body.paid
    const amount=req.body.amount-req.body.paid
    const intrestR=req.body.intrestR
    const expenses=[{
        goods:' ',
        prices:0
    }]
    const newUser=new User({paid,amount,intrestR,expenses})
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
})
router.post('/addExpenses/:id',(req,res)=>{
   User.updateOne({id:req.params.id})
   .then(user =>{
    const expenses=[{
        goods:req.body.good,
        prices:req.body.price
    }]
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

   })
    
    const newUser=new User({paid,amount,intrestR,expenses})
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
})
router.post('/payFees',(req,res)=>{

})
