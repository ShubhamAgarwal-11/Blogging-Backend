const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller')
const commentController = require('../controllers/comments.controller')
const likeController = require('../controllers/like.controller')

router.get('/posts',postController.getAllPosts)
router.post('/posts/create',postController.createPost)

router.get('/comments',commentController.getAllComments)
router.post('/comments/create',commentController.createComments)
router.delete('/comment/delete/:id',commentController.deleteComment)

router.get("/likes",likeController.getAllLikes)
router.post("/likes/create",likeController.createLike);
router.delete('/like/delete/:id',likeController.unlike)
module.exports = router;
