const mongoose = require('mongoose')

const Schema = mongoose.Schema

const freelancerSchema = new Schema({

    name:{
        type:String,
        required:true
    },
   
    price: {
        type: Number,
        required: true,
      },
      skills: {
        type: String,
        required: true,
      },
      experienceLevel: {
        type: String,
        required: true,
      },
      portfolioLink: {
        type: String,
        required: false,
      },

      walletAddress: {
        type: String,
        required: true,
      }


}, { timestamps: true })




module.exports = mongoose.model('Freelancer', freelancerSchema)