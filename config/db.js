import mongoose from "mongoose";

const mongoDBConnection = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connection Successful");
  } catch (error) {
    console.log(error.message);
  }
};

export default mongoDBConnection;
