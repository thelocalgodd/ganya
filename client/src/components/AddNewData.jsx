import { useState } from "react";
import {
  PlusCircleIcon,
  XMarkIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  TagIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { toast } from "sonner";

export default function AddNewData() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [amount, setAmount] = useState("0");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isExpense, setIsExpense] = useState(true);

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
    resetForm();
  };

  const resetForm = () => {
    setAmount("0");
    setDescription("");
    setCategory("");
    setDate(new Date().toISOString().split("T")[0]);
    setIsExpense(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically save the data
    console.log({ amount, description, category, date, isExpense });

    // Show success message briefly
    setTimeout(() => {
      setShowSuccess(false);
      handleClose();
    }, 500);

    // setShowSuccess(true);
    toast.success(`${isExpense ? "Expense" : "Income"} of GHS${amount} added!`);
  };

  const handleSwitchTransactionType = () => {
    setIsExpense(!isExpense);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isExpanded ? (
        <button
          onClick={handleExpand}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-all duration-300 ease-in-out"
        >
          <PlusCircleIcon className="h-6 w-6" />
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-4 w-80 transition-all duration-300 ease-in-out">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-800">
              Add {isExpense ? "Expense" : "Income"}
            </h3>
            <button
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>

          {showSuccess ? (
            <div className="flex flex-col items-center justify-center py-6 text-green-600">
              <CheckCircleIcon className="h-12 w-12" />
              <p className="mt-2 font-medium">
                {isExpense ? "Expense" : "Income"} added!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="select-none">
              <div className="space-y-4">
                <div>
                  <label className=" flex items-center gap-2  justtext-sm font-medium text-gray-700 mb-1">
                    Transaction Type
                    <p className="text-xs text-zinc-400">tap to switch</p>
                  </label>
                  <div className="flex gap-4">
                    <div className="flex w-full justify-between items-center">
                      <div
                        className={`${
                          isExpense
                            ? "bg-red-200 text-red-400"
                            : "bg-none rounded-l-md text-blue-500 border-blue-200 bg-blue-200"
                        } px-2 flex justify-center font-semibold cursor-pointer rounded-md p-1 w-full`}
                        onClick={handleSwitchTransactionType}
                      >
                        {isExpense ? "Expense" : "Income"}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Amount
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <CurrencyDollarIcon className="h-4 w-4 text-gray-500" />
                    </div>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      min="0"
                      step="0.01"
                      required
                      className="block w-full pl-10 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="What was this for?"
                    required
                    className="block w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <TagIcon className="h-4 w-4 text-gray-500" />
                    </div>
                    <input
                      type="text"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      placeholder="e.g. Food, Transport, Salary"
                      required
                      className="block w-full pl-10 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <CalendarIcon className="h-4 w-4 text-gray-500" />
                    </div>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                      className="w-full px-2 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200"
                >
                  Save {isExpense ? "Expense" : "Income"}
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
