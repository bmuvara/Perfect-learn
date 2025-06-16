const mongoose = require('mongoose');

const MilkrecordSchema = new mongoose.Schema({
    cowname: { type: String, required: true},
    cownumber: { type: String, required: true},
    date: { type: String, required: true },
    total: { type: Number, required: true },
    comment: { type: String, required: true },
    milkingperiod: { type: String,  required: true }
}, { timestamps: true });

module.exports = mongoose.model('Milkrecord', MilkrecordSchema);
