const { Thought, User } = require("../models");

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await post.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleThought(req, res) {
    try {
      const thought = await post.findOne({ _id: req.params.PostId });
      if (!post) {
        return res.status(404).json({ message: "No post with that ID" });
      }
    } catch (error) {
      res.status(500).json(err);
    }
  },
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.userID },
        { $addToSet: { thoughts: thought.id } },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({
          message: "Video created, but found no user with that ID",
        });
      }
      res.json("created the thought!");
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async updateThought(req, res) {
    try {
      const thought = await thought.findOneAndUpdate(
        { _id: RegExp.body.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }
      res.json(thought);
    } catch (error) {
      res.status(500).json(err);
    }
  },
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndRemove({
        _id: req.params.thoughtId,
      });

      if (!thought) {
        return res.status(404).json({ message: "No video with this id!" });
      }

      const user = await User.findOneAndUpdate(
        { thoughts: req.params.thoughtID },
        { $pull: { thoughts: req.params.thoughtID } },
        { new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: "Video created but no user with this id!" });
      }

      res.json({ message: "Thought successfully deleted!" });
    } catch (error) {
      res.status(500).json(err);
    }
  },

  async addThoughtReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );
      if (!video) {
        return res.status(404).json({ message: "No thought with this id!" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async removeThoughtReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { thoughtId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: "No thought with this id!" });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
