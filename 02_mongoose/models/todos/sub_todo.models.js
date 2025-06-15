import { type } from "express/lib/response";
import mongoose from "mongoose";
const subTodoSchema = new mongoose.Schema({

  content: {
    type: String,
    require: true
  },
  complete: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User"
  }

},{timestamps: true})
export const SubTodo = mongoose.model("SubTodo", subTodoSchema)