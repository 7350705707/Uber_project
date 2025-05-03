const mongoose = require("mongoose");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength: [3, "firstname must be at least 3 characters long"]
        },
        lastname:{
            type:String,
            minlength:[3,"Lastname must be at least 3 characters long"]
        }
    },
    email:{
        type:String,
        required : true,
        unique:true,
        lowercase:true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password:{
        type:String,
        required:true,
        select: false,

    },
    socketId: {
        type:String,

    },
    status:{
        type:String,
        enum: ['active','inactive'],
        default:'inactive',
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[3,"color must be at least 3 characters long"],
        },
        plate:{
            type:String,
            required:true,
            minlength:[3, "plate must be at least 3 characters"]
        },
        capacity:{
            type:Number,
            required:true,
            min:[1, "Capacity must be at least 1"],
        },
        vehicleType:{
            type:String,
            enum:['car','motorcycle','auto'],
            required:true,
        },
    },
    location:{
        lat:{
            type:Number,


        },
        long:{
            type:Number,
        }
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    
});



captainSchema.methods.generateAuthToken = async function () {
    const token = await jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'});
    return token;
}


captainSchema.methods.comparePassword = async function (password) {
    const isMatch = await bcrypt.compare(password, this.password);
    return isMatch;

}


captainSchema.statics.hashPassword = async function (password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
}


const captainModel = mongoose.model('captain', captainSchema);


module.exports = captainModel;


