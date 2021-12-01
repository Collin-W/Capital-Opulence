const router = require('express').Router()
const apiRoutes = require('./api')
<<<<<<< HEAD
const homeRoutes = require('./home-routes')
=======
const homeRoutes = require('./home-routes');

>>>>>>> 7a4db45c695efe22d7c69ba16d90b30555f7eebb
const dashboardRoutes = require('./dashboard-routes')

router.use('/api', apiRoutes)
router.use('/', homeRoutes)
router.use('/dashboard', dashboardRoutes)


module.exports = router