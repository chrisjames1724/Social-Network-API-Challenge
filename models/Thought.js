const { Schema, Types, model } = require("mongoose");
const dayjs = require("dayjs");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: { type: String, required: true, maxlength: 280 },
    username: { type: String, required: true },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => {
        return dayjs(date).format();
      },
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (date) => {
      return dayjs(date).format();
    },
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
});

thoughtSchema.set("toJSON", { getters: false, virtuals: true });
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
