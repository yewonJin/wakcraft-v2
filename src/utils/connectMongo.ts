import mongoose from "mongoose";

const connectMongo = async () =>
  mongoose
    .connect(process.env.MONGO_URI as string)
    .then(() => console.log("DB Connection Successfull"))
    .catch((err) => {
      console.log(err);

      mongoose.connect(process.env.EC2_MONGO_URI as string, {
        dbName: "wakcraft",
      });
    });

export default connectMongo;
