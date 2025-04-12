import {
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/react/24/solid";

const Card = ({
  title,
  color = "bg-gray-100",
  amount,
  increase = true,
  percentage,
  timeframe = "Last 30 Days",
}) => {
  return (
    <div className="border border-gray-200 rounded-lg w-full flex flex-col gap-2 mt-2">
      <p className={`font-semibold px-2 py-1 ${color} rounded-t-lg`}>{title}</p>
      <div className="px-2 pb-2 flex flex-col items-start font-semibold rounded-b-lg text-gray-600 justify-between">
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

export default Card;
