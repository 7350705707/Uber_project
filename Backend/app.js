
const dotenv = require('dotenv');

dotenv.config();

const userRoutes = require("./routes/user.route");
const captainRoutes = require("./routes/captain.route");

const express = require('express');

const app = express();

const cors = require('cors');
const connectToDb = require('./db/db');

const cookieParser = require("cookie-parser")

connectToDb();

// Configure CORS to allow credentials and specify allowed origins
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173', 'http://192.168.31.229:5173' , 'http://192.168.176.170:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


app.get('/', (req,res)=>{
    res.send('Hello World!')
});


app.use("/users", userRoutes);
app.use("/captains", captainRoutes)





module.exports = app;
