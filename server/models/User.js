import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            require: true,
            min: 2,
            max: 50,
        },
        lastName: {
            type: String,
            require: true,
            min: 2,
            max: 50,
        },
        email: {
            type: String,
            require: true,
            min: 2,
            max: 50,
            unique: true,
        },
        friends: {
            type: Array,
            default: [],
        },
        phoneNumber: {
            type: String,
            require: true,
            unique: true,
        },
        password: {
            type: String,
            require: true,
            min: 8,
        },
        interest: {
            type: Array,
            default: [],
            require: true,
        },
        picturePath: {
            type: String,
            default: " ",
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;