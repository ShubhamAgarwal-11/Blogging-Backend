const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller')

router.get('/posts',postController.getAllPosts)
router.post('/posts/create',postController.createPost)

module.exports = router;
