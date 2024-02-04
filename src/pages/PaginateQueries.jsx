import axios from "axios";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useAddColor } from "../hooks/useBankData";
import { request } from "../utils/axios-utils";

export const PaginateQueries = () => {
  // State for managing page number, id, and label for new color
  const [pageNumber, setPageNumber] = useState(1);
  const [id, setId] = useState();
  const [label, setLabel] = useState();

  // React Query hook for handling the mutation to add a new color
  const { mutate } = useAddColor();

  // Function to fetch colors from the server
  const fetchColors = async (pageNumber) => {
    try {
      // Use the custom request function to make the API call
      const response = await request({
        url: `/colors?_page=${pageNumber}&_per_page=5`,
        method: "get",
      });
      return response.data;
    } catch (error) {
      // Handle errors if they occur during the API call
      console.error(error);
      throw error; // Re-throw the error if you want to handle it further up the call stack
    }
  };

  // React Query hook for fetching colors with pagination
  const { isLoading, isError, error, data, isFetching } = useQuery(
    ["colors", pageNumber], // Unique key for the query
    () => fetchColors(pageNumber), // Function to fetch data
    {
      keepPreviousData: true, // Keep the previous data while fetching the new one
    }
  );

  // Loading state
  if (isLoading) {
    return <h2>Loading.......</h2>;
  }

  // Error state
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  // Event handlers for input changes and adding a new color
  function handleInputID(e) {
    e.preventDefault();
    setId(e.target.value);
  }

  function handleInputLabel(e) {
    e.preventDefault();
    setLabel(e.target.value);
  }

  function handleAddColor() {
    // Log the new color data
    console.log({ id, label });

    // Create an object for the new color
    const color = { id, label };

    // Use the mutation function to add the new color
    mutate(color);
  }

  // JSX for rendering the component
  return (
    <>
      <h2>Color Page</h2>
      <div>
        {/* Input fields for ID and Label */}
        <input type="text" value={id} onChange={handleInputID} />
        <input type="text" value={label} onChange={handleInputLabel} />

        {/* Button to add a new color */}
        <div>
          <button
            className="bg-blue-500 cursor-pointer"
            onClick={handleAddColor}
          >
            Add Color
          </button>
        </div>
      </div>

      {/* Display the list of colors */}
      <div>
        {data?.data?.map((color) => (
          <div key={color.id}>
            {color.id}. {color.label}
          </div>
        ))}
      </div>

      {/* Pagination buttons */}
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
          disabled={pageNumber === 5} // Disable if the last page is reached
        >
          Next Page
        </button>
      </div>

      {/* Loading indicator while fetching data */}
      {isFetching && "Loading..."}
    </>
  );
};
