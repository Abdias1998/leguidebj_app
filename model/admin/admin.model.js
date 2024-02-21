const mongoose = require("mongoose");

const validator = require("mongoose-unique-validator");
const admin_schema = mongoose.Schema(
  {
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
    password: {
      type: String,
      required: true,
    },
    reset_password_token_Admin: {
      type: String,
      default: "",
    },
    reset_password_expires_Admin: {
      type: Date,
      default: "",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

admin_schema.plugin(validator);

module.exports = mongoose.model("admin", admin_schema);
