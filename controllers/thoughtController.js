const { Thought, User } = require ('../models');

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
            const thought = await post.findOne({_id: req.params.PostId})
            if (!post) {
                return res.status(404).json({ message: 'No post with that ID' });
              }
        } catch (error) {
            res.status(500).json(err);
        }
    }
}