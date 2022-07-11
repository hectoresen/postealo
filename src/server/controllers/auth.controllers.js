const passport = require('passport');
const User = require('../models/user.model');

module.exports = {
    registerPost: (req, res, next) =>{
        const {name, password, email} = req.body;
        console.log(`NAME = ${name}, EMAIL = ${email}, PASSWORD = ${password}`);

        if(!password || !email || !name){
            console.log(1);
            return res.status(400).json({message: 'Debes completar todos los campos'});
        };

        passport.authenticate('register', (error, user) =>{
            if(error){
                return res.status(403).json({message: error.message});
            };

            req.logIn(user, (error) =>{
                if(error){
                    return res.status(403).json({message: error.message});
                };
                let registerUser = user;
                registerUser.password = null;

                return res.json(registerUser);
            });
        })(req, res, next);
    }
};

