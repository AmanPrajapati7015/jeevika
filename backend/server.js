const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;


const upload = multer({ dest: "uploads/" });

// Middleware to parse form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to handle form submission
app.post('/api/add-policy', upload.fields([{ name: 'photo' }, { name: 'signature' }]), (req, res) => {
    console.log(req.body);
    const { PolicyNo, Name, Address, Amount, DOB, NomineeName, Relation, Aadhar } = req.body;
    const photoPath = req.files['photo'][0].path;
    const signaturePath = req.files['signature'][0].path;

    const policyDetails = { PolicyNo, Name, Address, Amount, DOB, NomineeName, Relation, Aadhar, photoPath, signaturePath }
    console.log(policyDetails);

    res.send('Form submitted successfully!');
});

// Serve uploaded images statically
app.use('/uploads', express.static('uploads'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
