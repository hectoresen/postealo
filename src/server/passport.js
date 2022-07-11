const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('./models/user.model');

const saltRound = 5;

const validate = email =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

passport.serializeUser((user, done) =>{
    return done(null, user._id);
});

passport.deserializeUser(async(userId, done) =>{
    try{
        const existsUser = await User.findById(userId);
        return done(null, existsUser);
    }catch(error){
        return done(error);
    };
});

passport.use(
    'register',
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true,
        },
        async(req, email, password, done) =>{
            try{
                if(email.length <6){
                    const error = new Error('El email es demasiado corto');
                    return done(error);
                };
                const validEmail = validate(email);

                if(!validEmail){
                    const error = new Error('Email no válido');
                    return done(error);
                };

                const existsUser = await User.findOne({
                    email: email.toLocaleLowerCase()
                });

                if(existsUser){
                    const error = new Error('Ya existe un usuario con este email');
                    return done(error);
                };

                const hash = await bcrypt.hash(password, saltRound);

                const newUser = new User({
                    email: email.toLowerCase(),
                    name: req.body.name,
                    password: hash
                });

                const savedUser = await newUser.save();

                return done(null, savedUser);

            }catch(error){
                return done(error);
            }
        }
    )
);



