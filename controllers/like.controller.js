const Like = require("../models/like.model")
const Post = require("../models/post.model")

exports.createLike = async(req,res)=>{
    try {
        const {post,user} = req.body;
        const likeObj = new Like({
            post,user
        });
        const savedLike = await likeObj.save();
        const response =await Post.findByIdAndUpdate({_id : post}, {$push : {likes : savedLike}} , {new : true})
        res.status(201).json({
            success : true,
            post : response
        })
        
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : "error while like the post.",
            error : error.message
        })
    }
}

exports.getAllLikes = async(req,res)=>{
   try {
     const likes = await Like.find({});
     res.status(200).json({
        success : true,
        likes : likes
     })
     
   } catch (error) {
        res.status(500).json({
            success : true,
            message : "error while fetching all likes.",
            error : error.message
        })   
   }
}

exports.unlike = async(req,res)=>{
    try {
        const {post} = req.body;
        const id = req.params.id;
    
        await Like.findByIdAndDelete({_id : id});
        const response = await Post.findByIdAndUpdate({_id : post}, {$pull : {likes : id}}, {new : true})
        res.status(200).json({
            success : true,
            post : response
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : "error while unlike the post",
            error : error.message
        })
    }
}