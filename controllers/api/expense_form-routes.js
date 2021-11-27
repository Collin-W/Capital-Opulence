const router = require('express').Router()
const {User, Expense_Form} = require('../../models') 

//get all expense forms
router.get('/', (req, res) => {
  Expense_Form.findAll()
  .then(dbEPTXData => res.json(dbEPTXData))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

//get all expense forms by user id

router.get('/:user_id', (req, res) => {
  Expense_Form.findAll({
    where: {
      from_user : req.params.user_id
    }
  })
  .then( dbEPTXData => {
    if(!dbEPTXData){
      res.status(404).json({ message: "No user found with that id"})
      return
    }

    res.json(dbEPTXData)
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
    },
    include: {
      model: User,
      attributes: [{ exlcude: 'password'}]
    }
  })
  .then( dbEPTXData => {
    if(!dbEPTXData){
      res.status(404).json({ message: 'No Expense froms found with that id'})
      return
    }
    
    res.json(dbEPTXData)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

//create expense form
router.post('/', (req, res) => {
  Expense_Form.create({
    date: req.body.date,
    type: req.body.type,
    description: req.body.description,
    amount: req.body.description,
    from_user: req.body.from_user
  })
  .then(dbEPTXData => res.json(dbEPTXData))
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
  .then(dbEPTXData => {
    if(!dbEPTXData){
      res.status(404).json({ message: 'No Expense froms found with that id'})
      return
    }

    res.json(dbEPTXData)
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
  .then(dbEPTXData => {
    if(!dbEPTXData){
      res.status(404).json({ message: 'No Expense froms found with that id'})
      return
    }

    res.json(dbEPTXData)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})


module.exports = router