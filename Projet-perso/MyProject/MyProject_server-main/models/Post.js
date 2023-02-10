const mongoose = require("mongoose");
const postSchema = new mongoose.Schema(
    {
        author:{
            type:mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },
        title: {
            type: String,
            require: true
        },
        content: {
            type: String,
            require: true
        },
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model("Post", postSchema);