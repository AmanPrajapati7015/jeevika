const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');

const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;
const mongoURI = "mongodb+srv://aman7015:aman7015@cluster0.wva3zeh.mongodb.net/?retryWrites=true&w=majority"

const { PolicyModel, CompanyDetails } = require('./mongodb')
const imagesURL = "http://localhost:3000/"

const secretUser = "Aman7015"

const upload = multer({ dest: "uploads/" });

// Middleware to parse form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const userAuthentication = (req, res, next) => {
    console.log(req.headers.authorization.split(" ")[1]);
    let authToken = req.headers.authorization.split(" ")[1];
    jwt.verify(authToken, secretUser, async (err, user) => {
        if (err) {
            console.log("error in auth decoding");
            return res.status(403).send("Error in verifing authtoken")
        }
        else {
            console.log(user);
            const found = await CompanyDetails.findOne({cName: user.cName});
            req.user = found //used while adding to watchlist
            if (found) {
                return next();
            }
            console.log("didn't find user");
            return res.status(400).send("Authentication of user failed")
        }
    })
};

app.get("/api/me",userAuthentication, (req, res)=>{
    res.json(req.user);
})


// Route to handle form submission
app.post('/api/add-policy', upload.fields([{ name: 'photo' }, { name: 'signature' }]), async (req, res) => {
    console.log(req.body);
    const { PolicyNo, Name, Address, Amount, DOB, NomineeName, Relation, Aadhar } = req.body;
    const photoPath =  imagesURL+req.files['photo'][0].path;
    const signaturePath = imagesURL+req.files['signature'][0].path;

    const policyDetails = { PolicyNo, Name, Address, Amount, DOB, NomineeName, Relation, Aadhar, photoPath, signaturePath }
    console.log(policyDetails);

    let policy =  new PolicyModel(policyDetails);
    await policy.save();

    res.send('Form submitted successfully!');
});

app.post('/api/company-register', async (req,  res)=>{
    let company = new CompanyDetails(req.body);
    await company.save();
    res.send('Form submitted successfully!');
})

app.get("/api/admin-signin", async(req, res)=>{
    let data = req.body;
    let user = await CompanyDetails.findOne(data);
    const obj = {cName:user.cName}
    if (user) {
        console.log(obj);
        let token = jwt.sign(obj, secretUser);
        res.json({ message: 'Logged in successfully', token });
    } else {
        res.status(403).json({ message: 'User authentication failed' });
    }
})



// Serve uploaded images statically
app.get('/uploads/:name', (req, res) => {
    res.sendFile(__dirname + '/uploads/' + req.params.name);
})

mongoose.connect(mongoURI, { dbName: "jeevika" })
    .then(() => {
        console.log("connected to Database");
        app.listen(PORT, () => {
            console.log(`Example app listening on port ${PORT}`)
        })
    })


//store this object in mongodb
