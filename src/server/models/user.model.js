const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: { type: String, required: true},
        email: { type: String, required: true},
        role: {
            enum: ['admin', 'user'],
            type: String,
            default: 'user',
            required: true,
        },
        password: {type: String, required: true}
    },
    {timeseries: true}
);

const User = mongoose.model('Users', userSchema);

module.exports = User;