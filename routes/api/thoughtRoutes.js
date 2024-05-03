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

router.route("/:thoughtId/reactions").post(addThoughtReaction);


router.route("/:thoughtId/reactions/:reactionId").delete(removeThoughtReaction);

module.exports = router;

// http://localhost:3001/api/thoughts/662ef6e2d7d173e58699622d/reactions/66318bc270d55714b9a4e803
