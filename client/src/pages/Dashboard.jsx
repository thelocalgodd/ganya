import React, { useEffect, useRef, useState } from "react";
import { Toaster, toast } from "sonner";
import {
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/react/24/solid";
import Chart from "../components/Chart";
import AddNewData from "../components/AddNewData";
import Transaction from "../components/Transaction";
import Card from "../components/Card";

import { animate, createScope, createSpring, createDraggable } from "animejs";

function Dashboard() {
  let time = new Date().getHours();

  const root = useRef(null);
  const scope = useRef(null);

  useEffect(() => {
    scope.current = createScope({ root }).add((scope) => {
      animate(".logo", {
        scale: [
          { to: 1.25, ease: "inOut(4)", duration: 1000 },
          { to: 1, ease: createSpring({ stiffness: 100 }) },
        ],
        loop: true,
        loopDelay: 250,
      });

      createDraggable(".logo", {
        container: [0, 0, 0, 0],
        releaseEase: createSpring({ stiffness: 500 }),
      });

      // Register function methods to be used outside the useEffect.
      scope.add("rotateLogo", (i) => {
        animate(".logo", {
          rotate: i * 360,
          ease: "out(4)",
          duration: 1500,
        });
      });
    });

    return () => scope.current.revert();
  }, []);

  return (
    <main ref={root} className="mx-4 md:mx-auto md:w-[850px]">
      <AddNewData />
      <Toaster richColors closeButton={false} duration={2000} />
      <header>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2">
            <p className="logo text-xl font-bold text-gray-800">
              ganya
              <span className="text-zinc-400">.</span>
            </p>{" "}
          </div>
          <div>
            <div className="w-8 h-8 rounded-full bg-red-400 flex justify-center items-center hover:bg-blue-500 transition duration-300 ease-in-out">
              <p className="flex justify-center items-center w-full h-full font-bold text-white">
                VK
              </p>
            </div>
          </div>
        </div>
      </header>

      <section>
        <p className="text-xl font-semibold mt-8">
          {time >= 0 && time < 12
            ? "Good Morning "
            : time > 12 && time < 16
            ? "Good Afternoon "
            : "Good Evening "}
          <span className="text-blue-500">Vincent!</span>
        </p>
      </section>

      <section className="grid grid-cols-2 gap-x-2 mt-2">
        <div className="border border-gray-200 rounded-lg mt-2 w-full flex flex-col gap-2">
          <p className="font-semibold px-2 py-1 bg-gray-100 rounded-t-lg">
            Transaction Volume{" "}
          </p>
          <div className="px-2 pb-2 flex flex-col items-start font-semibold rounded-b-lg text-gray-600 justify-between">
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
          color="bg-green-100"
          title="Total Income"
          amount={28900}
          increase={true}
          percentage={8}
        />
        <Card
          color="bg-red-100"
          title="Total Expenses"
          amount={19200}
          increase={false}
          percentage={5}
        />
        <div className="border border-gray-200 rounded-lg w-full mt-2 flex flex-col gap-2">
          <p className="font-semibold px-2 py-1 bg-gray-100 rounded-t-lg">
            Total Transactions{" "}
          </p>
          <div className="px-2 pb-2 flex flex-col items-start font-semibold rounded-b-lg text-gray-600 justify-between">
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

      <section className="mt-2 border border-gray-200 rounded-lg w-full flex flex-col gap-2">
        <p className="font-semibold px-2 py-1 bg-gray-100 rounded-t-lg">
          Recent Transactions
        </p>

        <div className="mx-2 flex flex-col gap-1 overflow-y-auto max-h-40">
          <Transaction amount={200} expense title={"Data Bundle"} />
          <Transaction amount={1000} expense title={"Rent"} />
          <Transaction amount={500} expense title={"Groceries"} />
          <Transaction amount={200} expense title={"Transport"} />
          <Transaction amount={500} expense title={"Food"} />
          <Transaction amount={200} expense title={"Utilities"} />
          <Transaction amount={100} expense title={"Entertainment"} />
          <Transaction amount={200} expense title={"Subscriptions"} />
          <Transaction amount={500} expense title={"Insurance"} />
          <Transaction amount={200} expense title={"Clothing"} />
          <Transaction amount={19000} title={"Salary"} />
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
        <p className="text-gray-400 text-xs">
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

export default Dashboard;
