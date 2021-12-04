const router = require('express').Router()
const {User, Expense_Form} = require('../../models') 

//get all expense forms
router.get('/', (req, res) => {
  Expense_Form.findAll()
  .then(dbExpFormData => res.json(dbExpFormData))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

//get all expense forms by user id

router.get('/user/:user_id', (req, res) => {
  Expense_Form.findAll({
    where: {
      user_id : req.params.user_id
    }
  })
  .then( dbExpFormData => {
     // if there is data then continue
    if(!dbExpFormData){
      res.status(404).json({ message: "No user found with that id"})
      return
    }

    res.json(dbExpFormData)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

//get sinlge expense form by id
router.get('/:id', (req, res) => {
  Expense_Form.findOne({
    where: {
      id: req.params.id
    }
  })
  .then( dbExpFormData => {
     // if there is data then continue
    if(!dbExpFormData){
      res.status(404).json({ message: 'No Expense froms found with that id'})
      return
    }
    
    res.json(dbExpFormData)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})


//create expense form
router.post('/', (req, res) => {

  // create variable with req.body
  const expForms = req.body

  //add current signed in user to each expense form
  let mappedExpForms = expForms.expenseArray.map(x => 
    {
      x.user_id = req.session.user_id
      return x
    })

  //bulk create all the expense forms
  Expense_Form.bulkCreate(mappedExpForms)
  .then(dbExpFormData => res.json(dbExpFormData))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

// update expense for by id
router.put('/:id', (req, res) => {
  Expense_Form.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(dbExpFormData => {
    // if there is data then continue
    if(!dbExpFormData){
      res.status(404).json({ message: 'No Expense froms found with that id'})
      return
    }
    
    res.json(dbExpFormData)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

//delete expense form by id
router.delete('/:id', (req, res) => {
  Expense_Form.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbExpFormData => {
    // if there is data then continue
    if(!dbExpFormData){
      res.status(404).json({ message: 'No Expense froms found with that id'})
      return
    }

    res.json(dbExpFormData)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})


module.exports = router