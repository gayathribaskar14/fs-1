// const router = require('express').Router();
// let User = require('../models/user');

// router.route('/').get((req, res) => {
//   User.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/add').post((req, res) => {
//   const username = req.body.username;
//    console.log(username);
//   const newUser = new User({username});
//    console.log(newUser);
//   newUser.save()
//     .then(() => res.json('User added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// module.exports = router;
const express=require('express');
const router=express.Router();

let User=require('../models/user');

router.get('/',(req,res)=>{
  User.find()
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('Error: '+err));
});

router.post('/add',(req,res)=>{
  const username=req.body.username;
  // console.log(username);
  const newUser=new User({username});

  newUser.save()
    .then(()=>res.json('User Added!'))
    .catch(err=>res.status(400).json('Error: '+err));
});

module.exports=router;