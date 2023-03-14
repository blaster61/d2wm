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
        comments: [{
            login: String,
            image: String,
            comment: String,
            date: Date
        }],
        image: {
            type: String,
            default: "http://localhost:4000/public/uploads/manga-club.jpg"
        }
    },
    {
        timestamps: true
    }
);

postSchema.virtual("auteur", {
    ref: "User",
    foreignField: "login",
    localField: "_id"

})
postSchema.index({title: "text"})

const Post = mongoose.model(
    "Post",
    postSchema
)

Post.createIndexes()
module.exports = Post;