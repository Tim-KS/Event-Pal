import mongoose from "mongoose";

const eventSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            default: " ",
        },
        name: {
            type: String,
            require: true,
        },
        location: {
            type: String,
            require: true,
        },
        date: {
            type: String,
            require: true,
        },
        description: {
            type: String,
            require: true,
        },
        userPicturePath: {
            type: String,
            default: " ",
        },
        picturePath: {
            type: String,
            default: " ",
        },
    },
);

const Event = mongoose.model("Event", eventSchema);

export default Event;