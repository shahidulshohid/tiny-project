const express = require("express");
const app = express();
const helmet = require("helmet");
const mongoose = require("mongoose");
require("dotenv").config();
const morgan = require("morgan");
const { readdirSync } = require("fs");
const cors = require("cors");


//middlewares
app.use(helmet());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan(("dev")))
app.use(cors());


//DB connection

mongoose
       .connect(process.env.DATABASE)
       .then(()=> console.log("DB connected"))
       .catch((err)=> console.log("DB Error =>",err));


       //server
       const port = process.env.PORT || 8000;


       app.listen(port, ()=>{
        console.log(`App is running on port $(port)`);
       });