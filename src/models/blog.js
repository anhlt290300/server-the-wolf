import mongoose, { Schema, ObjectId } from "mongoose";

export default mongoose.model(
  "Blog",
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
    content_trailer: {
      type: String,
      required: false, //NOT NULL
    },
    author: {
      type: String,
      required: true, //NOT NULL
    },
    img: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    collection_: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  })
);
