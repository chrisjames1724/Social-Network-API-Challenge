const { Schema, model } = require('mongoose');




const userSchema = new Schema(
    {
        Username: {
            type: String, 
            required: true, 
            unique: true, 
            trimmed: true},
        email: {
            type: String, 
            required: true, 
            unique: true,
            validate: {
                validator: function(v) {
                        return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
                    },
                    message: props => '${props.value} is not a valid email!'
                }
            },
        thoughts: [{_id:Number}],
        friends:[{_id:Number}]
    }
)

userSchema
.virtual('friendCount')
.get(function () {
    return `$[friends]`
});




module.exports = User;


const User = mongoose.model('User',userSchema);
