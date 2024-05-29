const Comment = require('../models/comment.model')
const Post = require('../models/post.model')
exports.createComments = async(req,res)=>{
    try {
        const {body,user,post} = req.body;
    
        const commentObj = new Comment({
            body,user,post
        });
        const savedComment = await commentObj.save();
        const updatedPost = await Post.findByIdAndUpdate({_id : post}, {$push : {comments : savedComment._id}} , {new : true})
        res.status(201).json({
            success : true,
            updatedPost : updatedPost
        })
    } catch (error) {
        return res.status(500).json({
            success : true,
            error : error.message
        })
    }
}

exports.getAllComments = async(req,res) =>{
    try {
        const allComments = await Comment.find({});
        res.json({
            success : true,
            comments : allComments
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            error : error.message
        })
    }
}

exports.deleteComment = async(req,res)=>{
    try {
        const id = req.params.id; 
        const {post} = req.body;
    
        await Comment.findByIdAndDelete({_id : id})
        const updatedPost = await Post.findByIdAndUpdate({_id : post}, {$pull : {comments : id}}, {new : true})
        res.status(200).json({
            success : true,
            updatedPost : updatedPost
        })
    } catch (error) {
        return res.status(500).json({
            success : true,
            error : error.message
        })
    }

}