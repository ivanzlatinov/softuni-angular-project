const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../models/User");


const secret = 'a-023902923klsdalk';

const tokenBlackList = new Set();

async function register(email, username, password) {
 const existing  = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
  if(existing) {
    throw new Error('Email is taken');
  }

 const user = await User.create({
    email,
    username,
    hashedPassword: await bcrypt.hash(password, 10)
  });

  return createToken(user);
}


async function login(email,password) {
    const user  = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
    if(!user) {
      throw new Error('Incorrect email or password');
    }

    const match = await bcrypt.compare(password, user.hashedPassword);
    if(!match) {
        throw new Error('Incorrect email or password');
    }
    
    return createToken(user);
}

async function logout(token) {
   tokenBlackList.add(token);
}

function createToken(user) {
    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email
    };

    return  {
        _id: user._id,
        username: user.username,
        email: user.email,
       accessToken: jwt.sign(payload, secret)
    }
}

function parseToken(token){
   if(tokenBlackList.has(token)) {
    throw new Error('Token is blacklisted');
   }

   return jwt.verify(token, secret);
}


module.exports = {
    register,
    login,
    logout,
    parseToken
};