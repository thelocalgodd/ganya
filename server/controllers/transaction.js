const Transaction = require("../models/transaction");
const User = require("../models/User");

const getAllTransactions = async (req, res) => {
  const transactions = await Transaction.find({})
    .populate("user", "name email phone")
    .populate("product", "name price")
    .sort({ createdAt: -1 });
  if (!transactions) {
    return res.status(404).json({
      message: "No transactions found",
    });
  }

  return res.status(200).json({
    message: "Transactions found",
    transactions,
  });
};

const getUserTransactions = async (req, res) => {
  const userId = req.user._id;
  const transactions = await Transaction.find({ user: userId })
    .populate("user", "name email phone")
    .populate("product", "name price")
    .sort({ createdAt: -1 });
  if (!transactions) {
    return res.status(404).json({
      message: "No transactions found",
    });
  }

  return res.status(200).json({
    message: "Transactions found",
    transactions,
  });
};

const createTransaction = async (req, res) => {
  const { product, quantity } = req.body;
  const userId = req.user._id;

  try {
    const transaction = await Transaction.create({
      user: userId,
      product,
      quantity,
    });

    return res.status(201).json({
      message: "Transaction created",
      transaction,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error [Creating Transaction]",
    });
  }
};

const deleteTransaction = async (req, res) => {
  const { id } = req.params;

  try {
    const transaction = await Transaction.findByIdAndDelete(id);
    if (!transaction) {
      return res.status(404).json({
        message: "Transaction not found",
      });
    }

    return res.status(200).json({
      message: "Transaction deleted",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error [Deleting Transaction]",
    });
  }
};

const updateTransaction = async (req, res) => {
  const { id } = req.params;
  const { product, quantity } = req.body;

  try {
    const transaction = await Transaction.findByIdAndUpdate(
      id,
      { product, quantity },
      { new: true }
    );

    if (!transaction) {
      return res.status(404).json({
        message: "Transaction not found",
      });
    }

    return res.status(200).json({
      message: "Transaction updated",
      transaction,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error [Updating Transaction]",
    });
  }
};

const getTransactionById = async (req, res) => {
  const { id } = req.params;

  try {
    const transaction = await Transaction.findById(id)
      .populate("user", "name email phone")
      .populate("product", "name price");

    if (!transaction) {
      return res.status(404).json({
        message: "Transaction not found",
      });
    }

    return res.status(200).json({
      message: "Transaction found",
      transaction,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error [Getting Transaction]",
    });
  }
};

module.exports = {
  getAllTransactions,
  getUserTransactions,
  createTransaction,
  deleteTransaction,
  updateTransaction,
  getTransactionById,
};
