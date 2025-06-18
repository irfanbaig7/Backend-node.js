import mongoose from "mongoose";

// Mini Models
const orderItemsSchema = new mongoose({
    productId: {
        type: mongoose.Schema.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    },
})

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true,
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    oderItems: {
        type: [
            orderItemsSchema
        ]
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["PENDING", "CANCELLED", "DELIVERED"],
        default: "PENDING"
    }

},{timestamps: true})
export const Order = mongoose.model("Order", orderSchema)