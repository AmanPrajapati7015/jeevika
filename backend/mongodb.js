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

const PolicyModel = mongoose.model('policy', policySchema);
// const Users = mongoose.model("user", userSchema);

module.exports = {PolicyModel}
