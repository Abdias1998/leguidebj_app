const mongoose = require("mongoose");

const validator = require("mongoose-unique-validator");
const destination_schema = mongoose.Schema(
  {
   titre: {
      type: String,
   
      trim: true,
      lowercase: true,  required: true,
     
    },
    texte: {
      type: String,  required: true,
     
    }, 
  duration: {
      type: String,  required: true,
     
    }, 
    price: {
      type: String,  required: true,
   
    }, 
    destination: {
        type: [
          {
            type: String,
            required: true,
          },
        ],
      },
 
  },
  {
    timestamps: true,
  }
);

destination_schema.plugin(validator);

module.exports = mongoose.model("destination", destination_schema);
