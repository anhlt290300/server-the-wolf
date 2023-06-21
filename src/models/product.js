import mongoose, { Schema, ObjectId } from "mongoose";
import isEmail from "validator/lib/isEmail.js";
export default mongoose.model(
  "Product",
  new Schema({
    id: { type: ObjectId },
    type: [
      {
        type: String,
        required: true, //NOT NULL
        validate: {
          validator: (value) => value.length > 1,
          message: "type must be at least 2 characters",
        },
      },
    ],
    soldout: {
      type: Number,
      required: true,
      enum: {
        values: [1, 0],
        default: 1,
        message: "please chose 0 or 1",
      },
    },
    title: {
      content: {
        type: String,
        required: true,
        validate: {
          validator: (value) => value.length > 1,
          message: "content must be at least 2 characters",
        },
      },
      href: {
        type: String,
        required: true,
        validate: {
          validator: (value) => value.length > 1,
          message: "href must be at least 2 characters",
        },
      },
    },
    imgcard: {
      src1: {
        type: String,
        required: true,
        validate: {
          validator: (value) => value.length > 1,
          message: "src1 must be at least 2 characters",
        },
      },
      src2: {
        type: String,
        required: true,
        validate: {
          validator: (value) => value.length > 1,
          message: "src2 must be at least 2 characters",
        },
      },
      href: {
        type: String,
        required: true,
        validate: {
          validator: (value) => value.length > 1,
          message: "href must be at least 2 characters",
        },
      },
    },
    discount: {
      type: Number,
      required: true,
      validate: {
        validator: (value) => value >= 0,
        message: "discount must be number and > 0",
      },
    },
    buyinstallment: {
      href: {
        type: String,
        required: false,
        validate: {
          validator: (value) => value.length > 0,
          message: "app must be at least 1 characters",
        },
      },
      src_app: {
        type: String,
        required: false,
        validate: {
          validator: (value) => value.length > 0,
          message: "content must be at least 1 characters",
        },
      },
    },
    imgs: [
      {
        src: {
          type: String,
          required: true,
          validate: {
            validator: (value) => value.length > 2,
            message: "srcimgs must be at least 3 characters",
          },
        },
        dataid: {
          type: String,
          required: true,
          validate: {
            validator: (value) => value.length > 2,
            message: "dataid must be at least 3 characters",
          },
        },
      },
    ],
    code: {
      type: String,
      required: true,
      validate: {
        validator: (value) => value.length > 2,
        message: "code must be at least 3 characters",
      },
    },
    price: {
      type: String,
      required: true,
      validate: {
        validator: (value) => value.length > 2,
        message: "saleprice must be at least 3 characters",
      },
    },
    guarantee: {
      type: String,
      required: true,
      validate: {
        validator: (value) => value.length > 2,
        message: "guarantee must be at least 3 characters",
      },
    },
    exchange: {
      type: String,
      required: true,
      validate: {
        validator: (value) => value.length > 2,
        message: "exchange must be at least 3 characters",
      },
    },
    colors: {
      color: {
        type: String,
        required: true,
        validate: {
          validator: (value) => value.length > 2,
          message: "color must be at least 3 characters",
        },
      },
      title: {
        type: String,
        required: true,
        validate: {
          validator: (value) => value.length > 2,
          message: "title must be at least 3 characters",
        },
      },
    },
    sizes: {
      type: String,
      required: true,
      validate: {
        validator: (value) => value.length > 2,
        message: "sizes must be at least 3 characters",
      },
    },
  })
);
