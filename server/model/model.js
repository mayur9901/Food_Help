const mongoose = require('mongoose');

const donationsSchema = new mongoose.Schema({
    foodName:{
        type: String,
        required: true
    },
    foodQuantity:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: Number,
        required: true
    },
    foodType:{
        type: String,
        enum:['Veg', 'Non-Veg']
    }
})

const Donations = mongoose.model('Donations', donationsSchema);

module.exports = Donations;