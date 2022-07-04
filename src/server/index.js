const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const path = require('path');
const passport = require('passport');

const PORT = 5000;
const server = express();

server.listen( PORT, () =>{
    console.log(`Server running on http://localhost:${PORT}`);
});