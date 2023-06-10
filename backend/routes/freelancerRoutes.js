const express = require('express')
const {
  getFreelancers, 
  getFreelancer, 
  createFreelancer, 
  deleteFreelancer, 
  updateFreelancer
} = require('../controllers/freelancerController')

const router = express.Router()

// GET all freelancers
router.get('/', getFreelancers)

// GET a single freelancer
router.get('/:id', getFreelancer)

// POST a new freelancer
router.post('/', createFreelancer)

// DELETE a freelancer
router.delete('/:id', deleteFreelancer)

// UPDATE a freelancer
router.patch('/:id', updateFreelancer)

module.exports = router