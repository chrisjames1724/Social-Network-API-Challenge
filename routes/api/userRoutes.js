const router = require("express").Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addUserFriend,
  removeUserFriend,
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(addUserFriend);

//http://localhost:3001/api/users/66317b625c923e24d526e182/friends/66317c6e5c923e24d526e189

router.route("/:userId/friends/:friendId").delete(removeUserFriend);

module.exports = router;
