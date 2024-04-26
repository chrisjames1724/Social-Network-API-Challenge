const User = require("../models/User");

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await user.find();
      res.json(users);
    } catch (err) {
      res.status(500).json;
    }
  },
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userID })
        .select("-__V")
        .populate("friend, thoughts");
      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500), json(err);
    }
  },
  async 
};
