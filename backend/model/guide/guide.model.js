const mongoose = require("mongoose");

const validator = require("mongoose-unique-validator");
const guide_schema = mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      uppercase: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
    },
    names: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: () => !this.tel,
    },
    tel: {
      type: String,
      unique: true,
      required: () => !this.email,
    },
    country: {
      type: String,
      required: true,
    },
    zone: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    profil: {
      type: String,
    },
    comments: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        text: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
    document: {
      type: [
        {
          type: String,
          required: true,
        },
      ],
    },
    available: {
      type: String,
      required: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
    is_desactive: {
      type: Boolean,
      default: false,
    },
    date_created: {
      type: Date,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

guide_schema.plugin(unique_validator);

module.exports = mongoose.model("guide", guide_schema);
