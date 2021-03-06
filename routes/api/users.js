const express = require ('express');
const router = express.Router();
const User = require('../../models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys')
const passport = require('passport');

router.get('/test', (req, res) => res.json({msg: 'user works'}));
// registration route

router.post('/register', (req, res)=>{
    User.findOne({email: req.body.email})
    .then(user =>{
        if(user){
            return res.status(404).json({email :'email already exists'})
        } else {
            const newUser = new User({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            })
            bcrypt.genSalt(10, (err, salt)=>{
                bcrypt.hash(newUser.password, salt, (err, hash)=>{
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                    .then(user =>res.json(user))
                    .catch(err =>console.log(err))
                })
            })
        }
    })
})

    //this is the route to login the user
    router.post('/login', (req, res)=>{
        const email = req.body.email;
        const password = req.body.password
        User.findOne({email})
        .then(user =>{
            if(!user){
                return res.status(404).json({email:'email not found'})
            }
            bcrypt.compare(password, user.password)
            .then(isMatch =>{
               if (isMatch)
               {
                   const payload = {
                       id:user.id,
                       name:user.name
                    };
                    jwt.sign(payload, keys.secretOrKey, {expiresIn: 36000},
                        (err, token) => {
                            res.json({
                                success:true, 
                                token: "bearer " + token
                            })

                        })
               }
               else{
                   return res.status(400).json({password:'password incorrect'})
               }
            })
        })
    })

    //this is a protecte route for a user that is logged in
    router.get('/current', passport.authenticate('jwt', {session: false}),(req, res)=>{
        res.json(req.user)
    } )

module.exports = router;
