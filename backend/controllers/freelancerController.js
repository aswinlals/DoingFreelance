const Freelancer = require('../models/freelancerModel')
const mongoose = require('mongoose')

// get all freelancers
const getFreelancers = async (req, res) => {
  const freelancers = await Freelancer.find({}).sort({createdAt: -1})

  res.status(200).json(freelancers)
}

// get a single freelancer
const getFreelancer = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No freelancer like that'})
  }

  const freelancer = await Freelancer.findById(id)

  if (!freelancer) {
    return res.status(404).json({error: 'No freelancer registered'})
  }

  res.status(200).json(freelancer)
}

// create a new workout
const createFreelancer = async (req, res) => {
  const {name,skills,price,experienceLevel,portfolioLink,walletAddress} = req.body

  // add to the database
  try {
    const freelancer = await Freelancer.create({ name,skills,price,experienceLevel,portfolioLink,walletAddress })
    res.status(200).json(freelancer)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a workout
const deleteFreelancer = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No freelancer like that'})
  }

  const freelancer = await Freelancer.findOneAndDelete({_id: id})

  if(!freelancer) {
    return res.status(400).json({error: 'No freelancer like that'})
  }

  res.status(200).json(freelancer)
}

// update a workout
const updateFreelancer = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No freelancer like that'})
  }

  const freelancer = await Freelancer.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!freelancer) {
    return res.status(400).json({error: 'No freelancer like that'})
  }

  res.status(200).json(freelancer)
}

module.exports = {
  getFreelancers, 
  getFreelancer, 
  createFreelancer, 
  deleteFreelancer, 
  updateFreelancer
}