const express =require("express")
const router =express.Router()
const {setPost,getPost,getPostById} = require('../controller/PostController')
const Post = require('../model/PostModel');
const {
    verifyToken,
  } = require("./verifyToken");
router.post('/post',setPost )
router.get('/post',verifyToken,getPost)
router.post('/posts/:postId/like',async(req,res) =>{
    try {
        const post = await Post.findById(req.params.postId);
        if (!post) {
          return res.status(404).json({ error: 'Post not found' });
        }
        post.likes++;
        const savedPost = await post.save();
        res.json(savedPost);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
})
router.post('/posts/:postId/unlike', async (req, res) => {
    try {
      const post = await Post.findById(req.params.postId);
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
      if (post.likes > 0) {
        post.likes--;
        const savedPost = await post.save();
        res.json(savedPost);
      } else {
        res.status(400).json({ error: 'Post is not liked' });
      }
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  router.post('/posts/:postId/comment', async (req, res) => {
    try {
      const post = await Post.findById(req.params.postId);
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
      const { comment } = req.body;
      post.comments.push(comment);
      const savedPost = await post.save();
      res.json(savedPost);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
router.get('/:id',verifyToken,getPostById)

// router.get('/:id',verifyToken, getPostDetail)
// router.get('/blog/me',verifyToken, getUserPost)
// router.post('/',verifyToken, setPost)
// router.put('/:id', putPost)
// router.delete('/:id', deletePost)

module.exports = router;