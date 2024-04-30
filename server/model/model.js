const mongoose = require('mongoose');

const donationsSchema = new mongoose.Schema({
    foodName:{
        type: String,
        require: true
    },
    foodQuantity:{
        type: String,
        require: true
    },
    address:{
        type: String,
        require: true
    },
    phoneNumber:{
        type: Number,
        require: true
    },
    foodType:{
        type: String,
        enum:['Veg', 'Non-Veg']
    }
})

const Donations = mongoose.model('Donations', donationsSchema);

module.exports = Donations;