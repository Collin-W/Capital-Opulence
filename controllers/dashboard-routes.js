const router = require('express').Router()
const sequelize = require('../config/connection')
const {User, Expense_Form} = require('../models')

router.get('/:id', (req, res) => {
  Expense_Form.findAll({
    where: {
      user_id: req.params.id
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

    res.render('dashboard', {EXPForms, usersName})
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

module.exports = router