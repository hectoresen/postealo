const passport = require('passport');

module.exports = {
    registerPost: (req, res, next) =>{
        const {name, password, email} = req.body;
        console.log(`NAME = ${name}, EMAIL = ${email}, PASSWORD = ${password}`);

        if(!password || !email || !name){
            return res.status(401).json({ message: 'Debes completar todos los campos' });
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

