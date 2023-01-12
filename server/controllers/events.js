import Event from "../models/events.js";
import User from "../models/User.js";

// CREATE
export const createEvent = async (req, res) => {
    try {
        const { userId, description, picturePath } = req.body;
        const user = await User.findById(userId);
        const newEvent = new Event({
            userId,
            name: user.firstName,
            location: event.location,
            date,
            description,
            userPicturePath,
            picturePath
        })
        await newEvent.save();
        const event = await event.find();
        res.status(201).json(event);
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}

// READ
export const getFeedEvents = async (req, res) => {
    try {
        const { userId } = req.params;
        const event = await event.find({ userId });
        res.status(200).json(event);
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
};

export const getUserEvents = async (req, res) => {
    try {
      const { userId } = req.params;
      const event = await Event.find({ userId });
      res.status(200).json(event);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };

  /* UPDATE */
export const likeEvents = async (req, res) => {
    try {
      const { id } = req.params;
      const { userId } = req.body;
      const event = await Event.findById(id);
      const isLiked = event.likes.get(userId);
  
      if (isLiked) {
        event.likes.delete(userId);
      } else {
        event.likes.set(userId, true);
      }
  
      const updatedEvent = await Event.findByIdAndUpdate(
        id,
        { likes: event.likes },
        { new: true }
      );
  
      res.status(200).json(updatedEvent);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };
  