const mongoose = require("mongoose");
// const mongoose_sanitize = require("mongoose-sanitize");

const unique_validator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    password: {
      type: String,
      required: true, 
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true,
    },
    resetPasswordToken: {
      type: String,
      default: "",
    },
    resetPasswordExpires: {
      type: Date,
      default: "",
    },
    picture: {
      type: String,
      default: "./user.png",
    },
    like: {
      type: [String],
    },

    phoneName: {
      type: String,
      default: "",
    },
    phoneType: {
      type: String,
      default: "",
    },
    isAdmin: {
      type: Boolean,
      default:false,
    },
    user_banned: {
      type: Boolean,
    },
    reporting: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);
userSchema.plugin(unique_validator);

module.exports = mongoose.model("user", userSchema);
