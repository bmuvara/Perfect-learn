const mongoose = require('mongoose');

const DiseaseSchema = new mongoose.Schema({
    animalname: { type: String, required: true},
    animalnumber: { type: String, required: true},
    dob: { type: String, required: true},
    species: { type: String, required: true},
         breed: { type: String, required: true},
    signsobserved: { type: String, required: true},
    suspecteddisease: { type: String, required: true},
    treatmentgiven: { type: String, required: true},
    treatmentdate: { type: String, required: true },
    doseused: { type: String, required: true },
    doseadminstered: { type: String, required: true },
    nextduedate: { type: String, required: true },
    vetname: { type: String, required: true },
    comment: { type: String, required: true }
   
}, { timestamps: true });

module.exports = mongoose.model('Disease', DiseaseSchema );
