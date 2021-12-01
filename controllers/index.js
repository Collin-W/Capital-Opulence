const router = require('express').Router()
const apiRoutes = require('./api')
const homeRoutes = require('./home-routes');
<<<<<<< HEAD

=======
>>>>>>> 41e0c74c1bd0da1d1eb7e5be96a685060c29cf8b
const dashboardRoutes = require('./dashboard-routes')

router.use('/api', apiRoutes)
router.use('/', homeRoutes)
router.use('/dashboard', dashboardRoutes)

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router