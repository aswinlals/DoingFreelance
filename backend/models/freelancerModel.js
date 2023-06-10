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
        required: true,
      },

      walletAddress: {
        type: String,
        required: false,
      }


}, { timestamps: true })




module.exports = mongoose.model('Freelancer', freelancerSchema)