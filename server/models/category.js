const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      enum: ["income", "expense"],
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    icon: {
      type: String,
      default: "TagIcon", // Default icon from heroicons
    },
    color: {
      type: String,
      default: "gray", // Default color for the category
    },
  },
  {
    timestamps: true,
  }
);

// Ensure unique categories per user
CategorySchema.index({ name: 1, user: 1 }, { unique: true });

const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;
