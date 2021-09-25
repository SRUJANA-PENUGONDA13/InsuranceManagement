const mongoose = require('mongoose')

const { Schema } = mongoose

const policySchema = new Schema({
    policyId : {
        type : Number,
        required: true,
        unique: true
    },
    dateOfPurchase: {
        type: String
    },
    customerId: {
        type: Number
    },
    fuel: {
        type: String
    },
    vehicleSegment: {
        type: String
    },
    premium: {
        type: Number,
        min: 0, 
        max: 1000000
    },
    bodilyInjuryLiability: {
        type: Number
    },
    personalInjuryProtection: {
        type: Number
    },
    propertyDamageLiability: {
        type: Number
    },
    collision: {
        type: Number
    },
    comprehensive: {
        type: Number
    },
    customerGender: {
        type : String
    },
    customerIncomeGroup: {
        type: String
    },
    customerRegion: {
        type: String
    },
    customerMaritalStatus:
    {
        type: String
    }
})

const PolicyDetails = mongoose.model('PolicyDetails', policySchema );
module.exports =  PolicyDetails