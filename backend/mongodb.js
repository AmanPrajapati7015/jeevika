const mongoose = require('mongoose');

const policySchema = new mongoose.Schema({
    PolicyNo: Number,
    Name: String,
    Address: String,
    Amount: String,
    DOB: Date,
    NomineeName: String,
    Relation: String,
    Aadhar: Number,
    photoPath: String,
    signaturePath: String,
});

const detailsSchema = new mongoose.Schema({
    cName: {
        type: String,
        required: true
    },
    adminID: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gst: {
        type: String,
        required: true
    }
});

const CompanyDetails = mongoose.model('Details', detailsSchema);
const PolicyModel = mongoose.model('policy', policySchema);

// const Users = mongoose.model("user", userSchema);

module.exports = {PolicyModel, CompanyDetails}
