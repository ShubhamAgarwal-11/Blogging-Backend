const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller')

router.get('/',postController.hello)

module.exports = router;
