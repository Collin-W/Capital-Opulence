const router = require('express').Router();
const userRoutes = require('./user-routes');
const expenseRoutes = require('./expense-routes');

router.use('/expenses', expenseRoutes);
router.use('/user', userRoutes);

module.exports = router;