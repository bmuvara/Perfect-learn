const mongoose = require('mongoose');
const MilkrecordSchema = new mongoose.Schema({
    cowname: {
        type: String,
        required: true,
    
    },
    cownumber: {
        type: String,
        required: true,
        
    },
    date: {
        type: String,  // If this represents a date, use type: Date
        required: true
    },
    totalMilk: {
        type: Number,  // Consider changing this to Number if it's a quantity
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    milkingtime: {
        type: String,
        enum: ['Asubuhi', 'Mchana', 'Jioni'],
        required: true
    }
}, { timestamps: true });

try {
    const Milkrecord = mongoose.model('Milkrecord', MilkrecordSchema);
    module.exports=Milkrecord
    console.log('Model created successfully');
} catch (err) {
    console.log('Error creating model:', err);
}




/* const Milkrecord=mongoose.model('User',MilkrecordSchema)

module.exports=Milkrecord; */