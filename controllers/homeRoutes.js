const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('login');
})

router.get('/homepage', async (req, res) => {
    res.render('homepage', {
        homepage: true,
    });
})

module.exports = router;