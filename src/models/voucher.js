import mongoose, { Schema, ObjectId } from "mongoose";

export default mongoose.model(
  "voucher",
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
    price: {
      type: Number,
      required: true,
      validate: {
        validator: (value) => value > 0,
        message: "price must > 0",
      },
    },
    condition: {
      type: Number,
      required: true,
      validate: {
        validator: (value) => value > 0,
        message: "price must > 0",
      },
    },
    price_content: {
      type: String,
      required: true, //NOT NULL
      validate: {
        validator: (value) => value.length > 1,
        message: "price content must be at least 2 characters",
      },
    },
    condition_content: {
      type: String,
      required: true, //NOT NULL
      validate: {
        validator: (value) => value.length > 1,
        message: " condition content must be at least 2 characters",
      },
    },
    discount: {
      type: Number,
      required: true,
      validate: {
        validator: (value) => value >= 0,
        message: "discount must > 0",
      },
    },
    time: {
      start: {
        type: Date,
        required: true,
        //min: "2023-01-01",
      },
      end: {
        type: Date,
        required: true,
        //min: "2023-01-01",
      },
    },
  })
);
