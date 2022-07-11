const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL;
const DB_CONFIG = {useNewUrlParser: true, useUnifiedTopology: true};

const dbConnect = async () =>{
    try{
        const response = await mongoose.connect(DB_URL, DB_CONFIG);
        const {host, port, name} = response.connection;
        console.log(`DB conectada a ${name}, en ${host}:${port}`);
    }catch(error){
        console.log('Error al conectar la DB', error);
    };
};

module.exports = {
    DB_URL,
    DB_CONFIG,
    dbConnect
}
