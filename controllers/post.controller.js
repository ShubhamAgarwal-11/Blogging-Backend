const Post = require('../models/post.model')

exports.createPost = async(req,res)=>{
    try {
        const {title , body} = req.body;
        const postObj = new Post({
            title,body
        });
        const savedPost = await postObj.save();

        res.status(201).json({
            success : true,
            post : savedPost
        })
        
    } catch (error) {
        res.json({
            success : false,
            error : error.message
        })
    }
}

exports.getAllPosts = async(req,res)=>{
    try {
        const posts = await Post.find({});
        res.status(200).json({
            success : true,
            posts : posts
        })
        
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : error.message
        })
    }
}