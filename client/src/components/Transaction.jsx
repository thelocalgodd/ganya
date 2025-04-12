const Transaction = ({ title, amount, expense }) => {
  return (
    <div className="px-2 py-1.5 mx-auto rounded-lg w-full flex flex-row items-center border border-gray-300 bg-gray-100 gap-2">
      <p className="w-full font-semibold rounded-lg">{title}</p>
      <p
        className={`${
          expense ? "text-red-500" : "text-green-500"
        }  font-semibold flex`}
      >
        {expense ? "-" : "+"}
        {amount.toFixed(2)}
      </p>
    </div>
  );
};

export default Transaction;
