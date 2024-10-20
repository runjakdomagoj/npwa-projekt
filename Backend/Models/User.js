const mongoose = require("mongoose");
const bycrpt = require("bcryptjs");

const userSchema = new mongoose.Schema({
   username: {
      type: String,
      required: true,
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
   role: {
      type: String,
      enum: ["User", "Admin"],
      default: "User",
   },
});

userSchema.pre("save", async (next) => {
   if (!this.isModified("password")) {
      next();
   }
   const salt = await bycrpt.genSalt(10);
   this.password = await bycrpt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async (enteredPassword) => {
   return await bycrpt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
