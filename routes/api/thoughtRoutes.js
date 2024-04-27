const thoughtController = require("../../controllers/thoughtController");

const router = require("express").Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addThoughtReaction,
  removeThoughtReaction,
} = require("../../controllers/thoughtController");

router.route("/").get(getThoughts).post(createThought);

router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughId/reaction/:reactionId").post(addThoughtReaction);

router.route(":/thoughtId/reactions/:reactionId").delete(removeThoughtReaction);

module.exports = router;
