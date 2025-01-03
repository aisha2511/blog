const mongoose = require("mongoose")

const connectDB = () => {
    mongoose
      .connect("mongodb+srv://aishadavra:aishadavra@cluster0.ldzpm.mongodb.net/blog")
      .then(() => {
        console.log("db connect success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
module.exports = { connectDB };