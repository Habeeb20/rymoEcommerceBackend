const mongoose =require("mongoose");
const colors =require("colors");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://Habeeb:Ademola1234@habeeb.pal57xa.mongodb.net/Coniah?retryWrites=true&w=majority");
    console.log(
      `Conneted To  Database ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

module.exports= connectDB;