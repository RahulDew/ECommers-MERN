import mongoose from "mongoose";

const cartSchema = mongoose.Schema(
  {
    userId: {
      type: String,
    },
    items: [
      {
        productId: {
          type: String,
        },
        name: String,
        quantity: {
          type: Number,
          required: true,
          min: [1, "Quantity can not be less then 1."],
          default: 1,
        },
        price: Number,
      },
    ],
    bill: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
