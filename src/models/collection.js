import mongoose, { Schema, ObjectId } from "mongoose";


export default mongoose.model(
  "Collection",
  new Schema({
    id: { type: ObjectId },
    title: {
      type: String,
      required: true, //NOT NULL
      validate: {
        validator: (value) => value.length > 4,
        message: "title of collection must be at least 5 characters",
      },
    },
    collectionChildArr: [
      {
        title: {
          type: String,
          required: true, //NOT NULL
          validate: {
            validator: (value) => value.length > 4,
            message: "title of collection child  must be at least 5 characters",
          },
        },
      },
    ],
  })
);
