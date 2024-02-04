/* eslint-disable no-unused-vars */
// Disable eslint rule for unused variables as you might have intentional unused variables, like the success and error callback functions

import { useBankData } from "../hooks/useBankData";
import { Link } from "react-router-dom";

// React component for the Home page
export const Home = () => {
  // Success callback function to be executed after data fetching
  const onSuccess = () => {
    console.log("Perform side effect after data fetching");
  };

  // Error callback function to be executed if there is an error during data fetching
  const onError = () => {
    console.log(
      "Perform side effect after encountering an error fetching data"
    );
  };

  // Destructure the values returned by the useBankData hook
  const { isLoading, data, isError, error, isFetching, refetch } = useBankData(
    onError,
    onSuccess
  );

  // If data is still loading or fetching, display a loading message
  if (isLoading || isFetching) {
    return <h2>Loading......</h2>;
  }

  // If there is an error, display the error message
  if (isError) return <h2>{error.message}</h2>;

  // Render the component with the fetched data
  return (
    <>
      <h1 className="text-4xl uppercase underline font-mono font-extrabold">
        Bank Names
      </h1>
      <button onClick={refetch}>Fetch Banks</button>
      {/* Map through the data and display each bank name as a link */}
      {data?.data.map((bankName) => {
        return (
          <div key={bankName.code}>
            <Link to={`/bank-details/${bankName.id}`} className="underline">
              {bankName.name}
            </Link>
          </div>
        );
      })}
    </>
  );
};
