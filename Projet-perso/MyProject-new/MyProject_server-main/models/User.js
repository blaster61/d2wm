const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema(
    {
        login: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        password: {
            type: String,
            require: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        image:{
            type: String,
            default: "http://localhost:4000/public/uploads/manga-club.jpg"
        }
    },
    {
        timestamps: true,
    }
);

userSchema.pre("save", async function () {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10)
    }
})

module.exports = mongoose.model("User", userSchema);