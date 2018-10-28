import  mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL
    ? process.env.MONGODB_URL
    : "mongodb://admin:admin2018@ds020168.mlab.com:20168/mb_helper";
console.log("Using: " + MONGODB_URL);

mongoose.Promise = global.Promise;

export const connectToMongoose = async () => {
  try {
    await mongoose.connect(MONGODB_URL, { useNewUrlParser: true });
  }
  catch (err) {
    console.log("MongoDb connection error: " + err);
  }
};
