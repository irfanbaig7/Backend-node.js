import mongoose from "mongoose";

// mogooese help to make schema like that below
const userSchema = new mongoose.Schema(
  // define karta hai kya kya data aap loge
  {
    // username: String,  this is better but goodPractive so that's why we Added some validations look Below.
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      // required: [true, "Password is required"],
      required: true,
      unique: true,
    },
  },

  // ye define karta hai kya kya TimeStamp le rahe. they store ceratedAt and UpdatedAt.
  {
    timestamps: true,
  }
);

// now export this schema bcz use anyweher other files
// mongoose.model() it well take 2 things which model we make and kiske ke bases pr bana na hai.
// "User" how this look like in database so ans is in lowercase mean users like that but MongoDb's inner work. also use for give someOne as a Refrence
export const User = mongoose.model("User", userSchema);
