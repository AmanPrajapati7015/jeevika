const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');

const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;
const mongoURI = "mongodb+srv://aman7015:aman7015@cluster0.wva3zeh.mongodb.net/?retryWrites=true&w=majority"

const { PolicyModel } = require('./mongodb')
const imagesURL = "http://localhost:3000/"

const upload = multer({ dest: "uploads/" });

// Middleware to parse form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
