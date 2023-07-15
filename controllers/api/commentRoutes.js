const router = require('express').Router();
const { Comment, BlogPost, User } = require('../../models');

//post comment on post
router.post('/:id', async (req, res) => {
    try {
        const commentData = await Comment.create({
            ...req.body,
            // user_id: req.session.user_id,
            blog_post_id: req.params.id,
        });
        res.status(200).json(commentData);
        // res.render('homepage', {
        //     commentData
        // })
    } catch(err) {
        res.status(500).json(err);
    }
});

//get all
router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            include: [{ model: BlogPost, attributes: ['id'], },{ model: User, attributes: ['id'],}]
        });
        const comments = commentData.map((c) => c.get({ plain: true }));
        res.status(200).json(comments);
        // res.render('homepage', {
        //     comments,
        // })
    } catch(err) {
        res.status(500).json(err);
    }
});

//get by post
router.get('/:id', async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            where: {
                blog_post_id: req.params.blog_post_id
            },
            include: [{ model: BlogPost }, { model: User}]
        });
        const comments = commentData.map((c) => c.get({ plain: true }));
        res.status(200).json(comments);
    } catch(err) {
        res.status(500).json(err);
    }
});

//get by user

module.exports = router;