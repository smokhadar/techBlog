const router = require('express').Router();
const { BlogPost } = require('../../models');
const { User } = require('../../models');

//post
router.post('/', async (req, res) => {
    try { 
        const blogData = await BlogPost.create({
            ...req.body,
        user_id: req.session.user_id,
    });
         res.status(200).json(blogData);
        // res.render('homepage', {
        //     blogPosts
        // })
    } catch(err) {
        res.status(500).json(err);
    }
});

//get a single post
router.get('/:id', async (req, res) => {
    try {
        const blogData = await BlogPost.findByPk(req.params.id, {
            include: [{ model: User }]
        });
        if (!blogData) {
            res.status(400).json({ message: 'No post found with that id!'});
            return;
        };
        // const blogPosts = blogData.map((post) => post.get({ plain: true }));
        res.status(200).json(blogData);
        // res.render('homepage', {
        //     blogPosts
        // });
    } catch(err) {
        res.status(500).json(err);
    }
});

//get all user posts
router.get('/user/:id', async (req, res) => {
    try {
        const blogData = await BlogPost.findAll({
            where: {
                user_id: req.params.id
            },
            include: [{ model: User, attributes: ['username'], }]
        });
        if (!blogData) {
            res.status(400).json({ message: 'No post found with that user id!'});
            return;
        } 
        const blogPosts = blogData.map((post) => post.get({ plain: true }));
        res.status(200);
        res.render('dashboard', {
            blogPosts,
        });
    } catch(err) {
        res.status(500).json(err);
    }
});

// update by id
router.put('/:id', (req, res) => {
    BlogPost.update(
        {
            title: req.body.title,
            body: req.body.body,
            user_id: req.body.user_id,
        },
        {
             where: {
                id: req.params.id,
            },
        })
        .then((updatedPost) => res.json(updatedPost))
        .catch((err) => res.json(err));
});

//delete by id
router.delete('/:id', async (req, res) => {
    try {

    } catch(err) {

    }
})

module.exports = router;
