const router = require('express').Router();
const { BlogPost, User } = require('../models');
const sessions = require("express-session");

var session; 

router.get('/', async (req, res) => {
    try {
        session = req.session;
        if (session.user_id) {
            res.render('homepage')
        } else {
            res.render('login', {
            login: true,
        })};
    } catch(err){
        res.status(500).json(err);
    }  
});

// get all blogposts
router.get('/homepage', async (req, res) =>{
    try {
        const blogData = await BlogPost.findAll({
            include: [{ model: User, attributes: ['username'], }]
        });
        const blogPosts = blogData.map((post) => 
            post.get({ plain: true })
        );
        res.status(200);
        res.render('homepage', {
            blogPosts,
            homepage: true,
            logged_in: req.session.logged_in
        })
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/dashboard', async (req, res) => {
    // const session = req.session;
    res.render('dashboard', {
    });
    // console.log('session',session);
    // console.log('username:', req.session.username, 'user_id', req.session.user_id);
});

router.post('/partial', async(req, res) => {

});

router.get('/logout', async(req, res) => {
    res.render('login', {
        login: true
    });
})

module.exports = router;