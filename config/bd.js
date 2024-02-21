/* global process */

const mongoose = require("mongoose");
// </>
mongoose.set("strictQuery");
mongoose
  .connect(`${process.env.mongoDbUrl}`)
  .then(() => {
    console.log(`Connected to dataBase`);
  })
  .catch((error) => {
    console.log(`Error to Connected to dataBase ${error}`);
  });
