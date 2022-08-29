const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      require: true,
    },
    apellido: {
      type:String,
      required: true,
    },
    numero: {
      type:Number,
    },
    genero:{
      type:String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);