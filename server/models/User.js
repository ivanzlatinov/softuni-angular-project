const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    username: {
        type: String,
        required: true,
        minlength: [5, 'Username must be at least 5 characters!'],
        maxlength: [10, 'Username cannot have more than 10 characters!'],
    },
    hashedPassword: { type: String, required: true}
});


userSchema.index({ email: 1}, {
    collation: {
        locale: 'en',
        strength: 2
    }
})

const User = model('User', userSchema);

module.exports = User;