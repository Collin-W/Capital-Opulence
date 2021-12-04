const router = require('express').Router()
const apiRoutes = require('./api')
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes')

// api routes
router.use('/api', apiRoutes)
// homepage routes
router.use('/', homeRoutes)
// dashboard routes
router.use('/dashboard', dashboardRoutes)

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router