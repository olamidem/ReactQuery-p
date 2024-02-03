import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

export const PaginateQueries = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const fetchColors = async (pageNumber) => {
    const response = await axios.get(
      `http://localhost:4000/colors?_page=${pageNumber}&_per_page=2`
    );
    return response.data;
  };

  const { isLoading, isError, error, data } = useQuery(
    ["colors", pageNumber],
    () => fetchColors(pageNumber)
  );

  if (isLoading) {
    return <h2>Loading.......</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <div>
        {data?.data?.map((color) => (
          <div key={color.id}>
            {color.id}. {color.label}
          </div>
        ))}
      </div>
      <div>
        <button
          onClick={() => setPageNumber((old) => Math.max(old - 1, 0))}
          disabled={pageNumber === 0}
        >
          Previous Page
        </button>{" "}
        <button
          onClick={() => {
            setPageNumber((old) => old + 1);
          }}
          // Disable the Next Page button until we know a next page is available
          disabled={pageNumber === 5}
        >
          Next Page
        </button>
      </div>
    </>
  );
};
