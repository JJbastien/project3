const express = require ('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Student = require ('../../models/Student')
const User = require ('../../models/User')



//route for current student information
router.get('/', passport.authenticate('jwt' ,{session: false}),(req, res) =>{
   Student.findOne({user: req.user.id}) 
   .then(Student =>{
       if(!Student){
           return res.status(400).json({err:'this is not a student'})
       }
       else(Student)
   })
   .catch(err => res.status(404).json({err: "not working"}))
})
//this is the route to add a student information

router.post('/', passport.authenticate('jwt' ,{session: false}),(req, res) =>{
  const studentInfo = {};
  studentInfo.user = req.user.id;
  if(req.body.handle) studentInfo.handle = req.body.handle;
  if(req.body.telehpone) studentInfo.telehpone = req.body.telehpone;
  if(req.body.isActive) studentInfo.isActive = req.body.isActive;
  if(req.body.grade) studentInfo.grade = req.body.grade;

    Student.findOne({user:req.user.id})
    .then(student =>{
        if(student){
            Student.findOneAndUpdate({user:req.user.id},
            {$set: studentInfo},
            {new:true}  
                )
            .then(student => res.json({student}))
        }else {
            Student.findOne({handle:studentInfo.handle})
            .then(student =>{
                if(student){
                    
                    res.status(400).json({err:'handle exists'})
                }
                new Student(studentInfo).save().then(student => res.json(student))
            })
            
        }

    })
  
 })

module.exports = router;