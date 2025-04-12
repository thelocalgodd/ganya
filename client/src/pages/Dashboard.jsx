import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import {
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/react/24/solid";
import Chart from "../components/Chart";
import AddNewData from "../components/AddNewData";

function Dashboard() {
  let time = new Date().now;

  return (
    <main className="mx-4 md:mx-auto md:w-[850px]">
      <AddNewData />
      <Toaster richColors closeButton={false} duration={2000} />
      <header>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2">
            <p className="text-xl font-bold text-gray-800">
              ganya
              <span className="text-zinc-400">.</span>
            </p>{" "}
          </div>
          <div>
            <div className="w-8 h-4 rounded-full bg-red-400 "></div>
          </div>
        </div>
      </header>

      <section>
        <p className="text-xl font-semibold mt-8">
          {time === 0
            ? "Good Morning " + "Vincent!"
            : time > 0 && time < 12
            ? "Good Afternoon " + "Vincent!"
            : "Good Evening " + "Vincent!"}
        </p>
      </section>

      <section className="grid grid-cols-2 gap-x-2 mt-4">
        <div className="border border-gray-200 rounded-lg mt-2 w-full flex flex-col gap-2">
          <p className="font-semibold px-2 py-1 bg-gray-100 rounded-t-lg">
            Cash Flow
          </p>
          <div className="px-2 pb-2 flex flex-col items-start font-semibold rounded-b-lg text-gray-600 flex justify-between items-center">
            <p className="flex items-center justify-between text-gray-800 w-full">
              GHC 5,200.25
            </p>

            <p className="text-green-500 mt-4">
              <ChevronDoubleUpIcon className="w-4 h-4 inline-block" /> +2.5%{" "}
              <span className="text-gray-400 font-normal text-sm">
                Last 30 Days
              </span>
            </p>
          </div>
        </div>
        <Card
          title="Total Income"
          amount={28900}
          increase={true}
          percentage={8}
        />
        <Card
          title="Total Expenses"
          amount={19200}
          increase={false}
          percentage={5}
        />
        <div className="border border-gray-200 rounded-lg w-full mt-2 flex flex-col gap-2">
          <p className="font-semibold px-2 py-1 bg-gray-100 rounded-t-lg">
            Total Transactions{" "}
          </p>
          <div className="px-2 pb-2 flex flex-col items-start font-semibold rounded-b-lg text-gray-600 flex justify-between items-center">
            <p className="flex items-center justify-between text-gray-800 w-full">
              28{" "}
            </p>

            <p className="text-green-500 mt-4">
              <ChevronDoubleUpIcon className="w-4 h-4 inline-block" /> +55%{" "}
              <span className="text-gray-400 font-normal text-sm">
                Last 30 Days
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <Chart />

        <div className="w-full md:-mt-2 flex md:w-1/2 md:flex md:flex-col gap-4">
          <Card
            title="Chilling"
            amount={5000}
            increase={true}
            percentage={10}
          />
          <Card
            title="Tithes & Offerings"
            amount={12000}
            increase={false}
            percentage={5}
          />
        </div>
      </section>

      <footer className="pb-4">
        <div className="flex justify-between items-center mt-16"></div>
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()}{" "}
          <a
            className="underline text-red-400"
            href="https://github.com/thelocalgodd"
            target="_blank"
          >
            thelocalgodd
          </a>
        </p>
      </footer>
    </main>
  );
}

const Card = ({
  title,
  amount,
  increase = true,
  percentage,
  timeframe = "Last 30 Days",
}) => {
  return (
    <div className="border border-gray-200 rounded-lg w-full flex flex-col gap-2 mt-2">
      <p className="font-semibold px-2 py-1 bg-gray-100 rounded-t-lg">
        {title}
      </p>
      <div className="px-2 pb-2 flex flex-col items-start font-semibold rounded-b-lg text-gray-600 flex justify-between items-center">
        <p className="flex items-center justify-between text-gray-800 w-full">
          GHC {amount.toFixed(2)}
        </p>

        <p className={`${increase ? "text-green-500" : "text-red-500"} mt-4`}>
          {increase ? (
            <ChevronDoubleUpIcon className="w-4 h-4 inline-block" />
          ) : (
            <ChevronDoubleDownIcon className="w-4 h-4 inline-block" />
          )}{" "}
          {increase ? "+" : "-" + percentage + "%"}{" "}
          <span className="text-gray-400 font-normal text-sm">{timeframe}</span>
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
