const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const path = require('path');
const passport = require('passport');
const MongoStore = require('connect-mongo')(session);

const userRouter = require('./routes/auth.routes');

const dotenv = require('dotenv').config({path:'./.env.local'})

const PORT = process.env.PORT || 4000;
const server = express();


const {dbConnect} = require('./config/db');
dbConnect();

require('./passport');


server.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
server.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, 'public')))

server.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: false,
            secure: false,
            sameSite: false,
        },
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
);

server.use(passport.initialize());
server.use(passport.session());


/* ROUTES */
server.use('/auth', userRouter);



server.use('*', (req, res, next) => {
    const error = new Error('Ruta no encontrada');
    error.status = 404;
    next(error);
})

server.use((error, req, res, next) => {
    return res.status(error.status || 500).json(error);
});


server.listen( PORT, () =>{
    console.log(`Server running on http://localhost:${PORT}`);
});