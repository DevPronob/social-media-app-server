const Post = require('../model/PostModel');

const setPost =async(req, res) => {
    const newPost = new Post(req.body);
    try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
    } catch (err) {
      res.status(401).json(err);
      console.log(err)
    }
  };

  const getPost = async (req,res) => {
    try {
        const posts = await Post.find();
        return res.status(200).json(posts);
    } catch (error) {
        console.error("Error fetching:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}
const getPostById = async (req,res) => {
    const postId =req.params.id.trim();
 try{
    Post.findById(postId).then((tool) =>{
        return res.send(tool)
        
    })
 } catch(err) {
  return  res.status(403).json(err);
 }
// console.log(postId)
// res.send("pronob")
}



  module.exports ={
    setPost,
    getPost,
    getPostById
    // getUserPost
  }