const express = require("express")
const mongoose = require("mongoose")
const dotenv=require("dotenv");
const app = express();
const bodyParser = require('body-parser');

const userController = require("./Controllers/UserRegistrationController")
const ComplainController = require("./Controllers/ComplainController")

// Adjust the limit option according to your requirements
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));

const cors= require("cors");
app.use(cors());

app.use(express.json());


dotenv.config()

mongoose.connect("mongodb://127.0.0.1:27017/CybromComplain",)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err))


app.post("/userSave",userController.userSave)
app.post("/userLogin",userController.userLogin ) ;


//complain 
app.post("/complain", ComplainController.saveComplain); 
app.get("/getComplaints", ComplainController.getComplaints); 
app.post("/complaints/:id", ComplainController.updateComplaintResponse); 


const PORT = process.env.PORT || 5000;


app.listen (PORT , ()=>{
    console.log(`Server is running in ${PORT}`);
})