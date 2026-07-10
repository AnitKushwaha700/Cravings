import mongoose from "mongoose";

const MenuSchema = mongoose.Schema({
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "restaurant",
    required: true,
  },

  MenuItems: {
    type: [
      {
        itemName: { type: String, reuired: true },
      },
    ],
  },
});
