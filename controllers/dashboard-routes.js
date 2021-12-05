const router = require('express').Router()
const {User, Expense_Form} = require('../models')

// default dashboard route
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
    
    // map out forms get plain json without extra stuff
    const EXPForms = dbEXPFormData.map(expForm => expForm.get({ plain: true}))
    
    // place holder for username
    let usersName 
    
    // if there is an expense from get the users name
    // else leave it empty
    if(EXPForms.length){
      usersName = EXPForms[0].user
    }else{
      usersName = ''
    }
    
    // render page dashboard
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
    // if there is data then continue
    if(!dbEXPFormData){
      res.status(400).json({ message: 'No expense form found with that id'})
      return
    }

    // get plain json
    const expForm = dbEXPFormData.get({plain: true})
   
    // render page update-expform
    res.render('update-expform', {expForm, loggedIn: req.session.loggedIn})
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})


module.exports = router