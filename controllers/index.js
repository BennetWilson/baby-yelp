const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
<<<<<<< Updated upstream
router.use('/dashboard', dashboardRoutes);
=======
router.use('/dashboard', dashboardRoutes)

// router.use('/dashboard', dashboardRoutes);

>>>>>>> Stashed changes
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;