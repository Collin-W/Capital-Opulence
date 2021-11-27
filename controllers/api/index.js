const router = require('express').Router()

const userRoutes = require('./user-routes')
const expenseTrackerRoutes = require

router.use('/users', userRoutes)

module.exports = router