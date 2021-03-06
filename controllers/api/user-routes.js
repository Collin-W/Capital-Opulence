const router = require('express').Router()
const {User, Expense_Form} = require('../../models') 

//get all users
router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password']}
  })
  .then( dbUserData => res.json(dbUserData))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

//get a sinlge user by id
router.get('/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Expense_Form,
      attributes: ['id','date', 'type', 'description']
    }
  })
  .then(dbUserData => {
    // if there is data then continue
    if(!dbUserData){
      res.status(404).json({ message: "No user found with that id"})
      return
    }
    
    res.json(dbUserData)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

//create user by id
router.post('/', (req, res) => {
  User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password
  })
  .then(dbUserData => {
    // start new sessions when user is created
    req.session.save( () => {
      req.session.user_id = dbUserData.id
      req.session.email = dbUserData.email
      req.session.loggedIn = true
      
      res.json(dbUserData)
    })

  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

//update user by id
router.put('/:id', (req, res) => {
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
  .then(dbUserData => {
    // if there is data then continue
    if(!dbUserData){
      res.status(404).json({ message: 'No user found with that id'})
      return
    }

    res.json(dbUserData)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

//delete user by id
router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbUserData => {
    // if there is data then continue
    if(!dbUserData){
      res.status(404).json({ message: 'No user found with that id'})
      return
    }

    res.json(dbUserData)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

//login request
router.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
  .then( dbUserData => {
    // if there is data then continue
    if(!dbUserData){
      res.status(400).json({ message: 'No user found with that email'})
      return
    }

    //validate password for login
    const validatePassword = dbUserData.checkPassword(req.body.password)
    if(!validatePassword){
      res.status(400).json( { message: 'Incorrect password'})
      return
    }

    // start new sessions when user logs in
    req.session.save( () => {
      req.session.user_id = dbUserData.id
      req.session.email = dbUserData.email
      req.session.loggedIn = true

      res.json({ user: dbUserData, message: "You are now logged in"})
    })
    })
    .catch( err => {
      console.log(err)
      res.status(500).json(err)
  })
})

//logout request
router.post('/logout', (req, res) => {
  // if logged in then destory session or quit session
  // else stop call
  if(req.session.loggedIn){
    req.session.destroy( () => {
      res.status(204).end()
    })
  } else {
    res.status(404).end()
  }
})


module.exports = router