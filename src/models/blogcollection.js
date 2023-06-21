import mongoose, { Schema, ObjectId } from "mongoose";

export default mongoose.model(
  "BlogCollection",
  new Schema({
    id: { type: ObjectId },
    title: {
      type: String,
      required: true, //NOT NULL
      validate: {
        validator: (value) => value.length > 2,
        message: "title of blog collection must be at least 3 characters",
      },
    },
    content: {
      type: String,
      required: true, //NOT NULL
      validate: {
        validator: (value) => value.length > 2,
        message: "content of blog collection must be at least 3 characters",
      },
    },
  })
);
