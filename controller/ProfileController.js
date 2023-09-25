const Profile = require('../model/ProfileModel');

const setProfile =async(req, res) => {
    const newPost = new Profile(req.body);
    try {
      const savedPost = await newPost.save();
      return res.status(200).json(savedPost);
    } catch (err) {
     return res.status(401).json(err);
      console.log(err)
    }
    res.send(newPost)
  };


const getProfileByEmail = async (req,res) => {
    try {
        const email = req.params.email;
        const user = await Profile.findOne({ email }); // Query the database by email
        if (user) {
         return res.json(user); // Return the user if found
        } else {
         return res.status(404).json({ message: 'User not found' });
        }
      } catch (error) {
        console.error(error);
       return res.status(500).json({ message: 'Server error' });
      }
}



  module.exports ={
    setProfile,
    getProfileByEmail
    // getUserPost
  }