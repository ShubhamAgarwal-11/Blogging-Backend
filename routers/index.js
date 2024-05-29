const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller')
const commentController = require('../controllers/comments.controller')

router.get('/posts',postController.getAllPosts)
router.post('/posts/create',postController.createPost)

router.get('/comments',commentController.getAllComments)
router.post('/comments/create',commentController.createComments)

module.exports = router;
