const router = require('express').Router()
const sequelize = require('../config/connection')
const { Expense_Form, User } = require('../models')


router.get('/', (req, res) => {
  res.render('homepage')
})

router.get('/login', (req,res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login')
})

router.get('/tracker', (req, res) => {
  res.render('expense-tracker')
})

router.get('/calc', (req, res) => {
  res.render('calculator')
})


module.exports = router