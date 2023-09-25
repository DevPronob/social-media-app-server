const express =require("express")
const router =express.Router()
const {setProfile, getProfileByEmail} = require('../controller/ProfileController')
// const Post = require('../model/PostModel');
// const {
//     verifyToken,
//   } = require("./verifyToken");
router.post('/',setProfile)

router.get('/:email',getProfileByEmail)

// router.get('/:id',verifyToken, getPostDetail)
// router.get('/blog/me',verifyToken, getUserPost)
// router.post('/',verifyToken, setPost)
// router.put('/:id', putPost)
// router.delete('/:id', deletePost)

module.exports = router;