import React from "react";

function AddNewData() {
  return (
    <main className="border mt-3 p-2">
      <form action="">
        <input
          className="border px-2 rounded-md py-1 w-1/2 md:w-1/4 focus:outline-none focus:ring-1 focus:ring-blue-400"
          type="number"
          placeholder="amount"
        />

        <div className="flex flex-row items-center bg-gray-100 md:w-1/4 w-1/2 p-2 rounded-md font-semibold md:flex-row gap-2 mt-2">
          <input type="radio" name="income" id="" />
          <label htmlFor="">income</label>
          <input type="radio" name="expense" id="" />
          <label htmlFor="">expense</label>
        </div>
      </form>
    </main>
  );
}

export default AddNewData;
