const mongoose = require('mongoose');

const MilkdistributionSchema = new mongoose.Schema({
    custumername: { type: String, required: true},
    custumernumber: { type: String, required: true},
    custumerlocation: { type: String, required: true},
    date: { type: String, required: true },
    totalmilk: { type: Number, required: true },
    totalcost: { type: Number, required: true },
    comment: { type: String, required: true },
   
}, { timestamps: true });

module.exports = mongoose.model('Milkdistribution', MilkdistributionSchema );
