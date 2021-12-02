const router = require('express').Router()
const sequelize = require('../config/connection')
const {User, Expense_Form} = require('../models')

router.get('/', (req, res) => {
  Expense_Form.findAll({
    where: {
      user_id: req.session.user_id
    }, 
    include: {
      model: User,
      attributes: ['first_name', 'last_name']
    }
  })
  .then( dbEXPFormData => {
    
    
    const EXPForms = dbEXPFormData.map(expForm => expForm.get({ plain: true}))
    
    let usersName 
    
    
    if(EXPForms.length){
      usersName = EXPForms[0].user
    }else{
      usersName = ''
    }

    res.render('dashboard', {EXPForms, usersName, loggedIn: req.session.loggedIn})
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

//get post by id to update it 
router.get("/update/:id", (req, res) => {
  Expense_Form.findOne({
    where:{
      id: req.params.id
    }
  })
  .then( dbEXPFormData => {
    if(!dbEXPFormData){
      res.status(400).json({ message: 'No expense form found with that id'})
      return
    }

    const expForm = dbEXPFormData.get({plain: true})
   
    res.render('update-expform', {expForm, loggedIn: req.session.loggedIn})
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})


module.exports = router