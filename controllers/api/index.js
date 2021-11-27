const router = require('express').Router()

const userRoutes = require('./user-routes')
const expenseFormRoutes = require('./expense_form-routes')

router.use('/users', userRoutes)
router.use('/expform', expenseFormRoutes)

module.exports = router