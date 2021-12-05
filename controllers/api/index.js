const router = require('express').Router()
const userRoutes = require('./user-routes')
const expenseFormRoutes = require('./expense_form-routes')

// user routes
router.use('/users', userRoutes)
// expense form routes
router.use('/expform', expenseFormRoutes)

module.exports = router