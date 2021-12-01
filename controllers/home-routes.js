const router = require('express').Router()
const sequelize = require('../config/connection')


router.get('/', (req, res) => {
 res.render('homepage')
})

router.get('/login', (req,res) => {
  res.render('login')
})

router.get('/tracker', (req, res) => {
  res.render('expense-tracker')
})

router.get('/calc', (req, res) => {
  res.render('calculator')
})


module.exports = router