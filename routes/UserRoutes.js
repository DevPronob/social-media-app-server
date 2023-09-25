const express =require("express")
const router =express.Router()
const {setUser,getAdmin,getAllUser,makeAdmin} = require('../controller/UserController')
// const {
//     verifyToken,
//     // verifyTokenAndAdmin
//   } = require("./verifyToken");
router.post('/', setUser)
// router.get('/users/admin/:email',getAdmin)
router.get('/', getAllUser)
// router.get('/', (req,res) =>{
//     res.send("pronob")
// })
// router.patch('/users/admin/:id', makeAdmin)
// router.get('/users/admin/', makeAdmin)


module.exports = router;