const {Schema, Types } = require('mongoose');


const reactionSchema = new mongoose.Schema({
    reactionId: { type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),},
    reactionBody: {type: String, required: true, maxlength: 280 },
    username: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},

},
{
    toJSON: {
      getters: true,
    },
    id: false,
  }
);


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String, 
            required: true
        },
        reactions: [reactionSchema]

    }
)

