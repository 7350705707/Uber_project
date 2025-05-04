const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const blackListTokenModel = require('../models/blacklistToken.model');

const { validationResult} = require('express-validator');


module.exports.registerCaptain = async (req, res) => {
       const errors = validationResult(req);
       if (!errors.isEmpty()) {
           return res.status(422).json({ errors: errors.array() });
       }
       try {
             const { fullname, email, password, vehicle } = req.body;

             const isCaptainAlreadyExists = await captainModel.findOne({email});

             if(isCaptainAlreadyExists){
                return res.status(409).json({message: "Captain already exists"});   

             }

             const hashedPassword = await captainModel.hashPassword(password);
             const captain = await captainService.createCaptain({
                firstname: fullname.firstname,
                lastname: fullname.lastname,
                email,
                password: hashedPassword,
                color: vehicle.color,
                plate: vehicle.plate,
                capacity: vehicle.capacity,
                vehicleType: vehicle.vehicleType,
             });

             const token = await captain.generateAuthToken();

             res.status(201).json({token,captain});
       }catch (error) {
             console.error(error);
             res.status(500).json({ message: 'Internal server error' });
       }


};



module.exports.loginCaptain = async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
            }
            try {
                  const { email, password } = req.body;
      
                  const captain = await captainModel.findOne({email}).select('+password');
      
                  if(!captain){
                  return res.status(401).json({message: "Invalid credentials"});   
      
                  }
      
                  const isPasswordMatch = await captain.comparePassword(password);
      
                  if(!isPasswordMatch){
                  return res.status(401).json({message: "Invalid credentials"});   
      
                  }
      
                  const token = await captain.generateAuthToken();
                  
                    res.cookie('token', token);

                  res.status(200).json({token,captain});
            }catch (error) {
                  console.error(error);
                  res.status(500).json({ message: 'Internal server error' });
            }
      
      
      }


module.exports.getCaptainProfile = async (req, res) => {
    try {
        const captain = await captainModel.findById(req.captain._id);
        res.status(200).json({captain});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


module.exports.logoutCaptain = async (req, res) => {
    try {
        const token = req.cookies.token || req.headers.Authorization.split(" ")[1];
            if (!token) {
                  return res.status(401).json({ message: 'Unauthorized token not available' });
            }
            await blackListTokenModel.create({token});
        res.clearCookie('token');
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

