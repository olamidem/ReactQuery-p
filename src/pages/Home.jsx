/* eslint-disable no-unused-vars */
import { useQuery } from "react-query";
import axios from "axios";
import { useBankData } from "../hooks/useBankData";
import { Link } from "react-router-dom";

export const Home = () => {
  const onSuccess = () => {
    console.log("Perform side effect after data fetching");
  };
  const onError = () => {
    console.log("Perform side effect after encounter error fetching");
  };

  const { isLoading, data, isError, error, isFetching, refetch } = useBankData(
    onError,
    onSuccess
  );

  if (isLoading || isFetching) {
    return <h2>Loading......</h2>;
  }

  if (isError) return <h2>{error.message}</h2>;
  return (
    <>
      <h1 className="text-4xl uppercase underline font-mono font-extrabold">
        Bank Names
      </h1>
      <button onClick={refetch}>Fetch Banks</button>
      {data?.data.map((bankName) => {
        return (
          <div key={bankName.code}>
            <Link to={`/bank-details/${bankName.id}`} className="underline">
              {bankName.name}
            </Link>
          </div>
        );
      })}

      {/* {data.map((bankNames) => {
        return <div key={bankNames}>{bankNames}</div>;
      })} */}
    </>
  );
};
//   .filter(task => task.taskStatus === 'To do')
