const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_Db);
    console.log(
      "Connected to database"
    );
  } catch (error) {
    console.log(`MongoDbdb Database Error ${error}`);
  }
};

module.exports = connectDB;