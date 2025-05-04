const userModel = require("../models/user.model");
const blackListTokenModel = require('../models/blacklistToken.model');

const captainModel = require("../models/captain.model");

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



module.exports.authUser = async (req,res,next) =>
    {
    const token = req.cookies.token || req.headers.Authorization.split(" ")[1];

    if(!token){
        return res.status(401).json({message:"Unauthorized token not available"})
    }

    const isBlacklisted = await blackListTokenModel.findOne({token:token});

    if(isBlacklisted){
        return res.status(401).json({message:"Unauthorized blacklisted"})
    }

    try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);

        req.user = user;

        return next();

    }catch(err){
        console.log(err)
        return res.status(401).json({message:"Unauthorized error"});

        
    }

};



module.exports.authCaptain = async (req,res,next) =>
    {
    const token = req.cookies.token || req.headers.Authorization.split(" ")[1];

    if(!token){
        return res.status(401).json({message:"Unauthorized token not available"})
    }

    const isBlacklisted = await blackListTokenModel.findOne({token:token});

    if(isBlacklisted){
        return res.status(401).json({message:"Unauthorized blacklisted"})
    }

    try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);

        req.captain = captain;

        return next();

    }catch(err){
        console.log(err)
        return res.status(401).json({message:"Unauthorized error"});

        
    }

}