const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      initials: {
        type: String,
        default: function () {
          return this.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase();
        },
      },
      color: {
        type: String,
        default: "blue-500",
      },
    },
    stats: {
      totalIncome: {
        type: Number,
        default: 0,
      },
      totalExpenses: {
        type: Number,
        default: 0,
      },
      transactionVolume: {
        type: Number,
        default: 0,
      },
      transactionCount: {
        type: Number,
        default: 0,
      },
      monthlyStats: {
        income: {
          amount: { type: Number, default: 0 },
          change: { type: Number, default: 0 }, // Percentage change from last month
        },
        expenses: {
          amount: { type: Number, default: 0 },
          change: { type: Number, default: 0 },
        },
        volume: {
          amount: { type: Number, default: 0 },
          change: { type: Number, default: 0 },
        },
      },
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual for transactions
UserSchema.virtual("transactions", {
  ref: "Transaction",
  localField: "_id",
  foreignField: "user",
});

// Virtual for categories
UserSchema.virtual("categories", {
  ref: "Category",
  localField: "_id",
  foreignField: "user",
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
