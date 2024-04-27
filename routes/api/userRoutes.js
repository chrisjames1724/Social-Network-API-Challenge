const router = require("express").Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  addUserFriend,
  deleteUserFriend,
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getSingleUser);

router.route("/:userId/:userId/friend/:friendID").post(addUserFriend);

router.route("/:userId/:userId/friends/:friendID").delete(deleteUserFriend);

module.exports = router;
