const bcrypt = require('bcryptjs');
const User = require('../../models/user');
const jwt = require('jsonwebtoken');

module.exports = {
    createUser: async args => {
        try {
            const fetchedUser = await User.findOne({email: args.userInput.email});
            if(fetchedUser) {
                console.log("User already exists.")
                throw new Error("User already exists.");
            }
            let userName = args.userInput.userName ? args.userInput.userName : args.userInput.email.split('@')[0];
            const user = new User({
                email: args.userInput.email,
                password: await bcrypt.hash(args.userInput.password, 12),
                userName: userName
            });
            const newUser = await user.save();
            console.log("New user created.");
            return {
                ...newUser._doc,
                password: null
            };
        } catch(err) {
            throw err;
        }
    },
    login: async ({email, password}) => {
        try {
            const user = await User.findOne({ email: email });
            if(!user) {
                throw new Error('User does not exist');
            }
            const isEqual = await bcrypt.compare(password, user.password);
            if(!isEqual) throw new Error('Password is incorrect!');
            const token = jwt.sign({userId: user.id, email: user.email}, 'supersecretkey', {
                expiresIn: '1h'
            });
            return {
                userId: user.id,
                userName: user.userName,
                token: token,
                tokenExpiration: 1
            }
        } catch(err) {
            throw err;
        }
    }
}