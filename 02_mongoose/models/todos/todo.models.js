
// This is a Basic Structure to make Model.
/* 
    import mongoose from "mongoose";
    const todoSchema = new mongoose.Schema({},{timestamps: true})
    export const Todo = mongoose.model("Todo", todoSchema) 
*/

 
import { type } from "express/lib/response";
import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({

    content: {
        type: String,
        require: true,

    },
    complete: {
        type: Boolean,
        default: false
    },
    createdBy: {
        // jaise hi ye code dikhta hai ye samjha jata hai ab koyi na koyi refrence milne wala hai 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    // Array of Sub-Todos
    subTodos: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "SubTodo"
        }
    ]


},{timestamps: true})

export const Todo = mongoose.model("Todo", todoSchema)
