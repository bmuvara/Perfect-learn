const mongoose = require('mongoose');

const DewormingSchema = new mongoose.Schema({
    animalname: { type: String, required: true},
    animalnumber: { type: String, required: true},
    dob: { type: String, required: true},
    species: { type: String, required: true},
         breed: { type: String, required: true},
    date: { type: String, required: true },
    dewormerused: { type: String, required: true },
    doseadminstered: { type: String, required: true },
    nextduedate: { type: String, required: true },
    vetname: { type: String, required: true },
    comment: { type: String, required: true }
   
}, { timestamps: true });

module.exports = mongoose.model('Deworming', DewormingSchema );
