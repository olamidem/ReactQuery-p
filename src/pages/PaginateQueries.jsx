import axios from "axios";
import { useState } from "react";
import { useQuery, useMutation } from "react-query";

export const PaginateQueries = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [id, setId] = useState();
  const [label, setLabel] = useState();

  const addColor = (color) => {
    return axios.post("http://localhost:4000/colors", color);
  };

  const useAddColor = useMutation(addColor);
  const { mutate } = useAddColor;

  const fetchColors = async (pageNumber) => {
    const response = await axios.get(
      `http://localhost:4000/colors?_page=${pageNumber}&_per_page=5`
    );
    return response.data;
  };

  const { isLoading, isError, error, data, isFetching } = useQuery(
    ["colors", pageNumber],
    () => fetchColors(pageNumber),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <h2>Loading.......</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  function handleAddColor() {
    console.log({ id, label });
    const color = { id, label };
    mutate(color);
  }
  return (
    <>
      <h2>Color Page</h2>
      <div>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
        <div>
          <button
            className="bg-blue-500 cursor-pointer"
            onClick={handleAddColor}
          >
            Add Color
          </button>
        </div>
      </div>
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
      {isFetching && "Loading..."}
    </>
  );
};
