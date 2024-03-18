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
    isManager: {
      type: Boolean,
      default: false,
    },
    isAdminPrincipal: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      required: true,
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
