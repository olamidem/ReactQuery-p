import axios from "axios";
import { Fragment } from "react";
import { useInfiniteQuery } from "react-query";

export const InfiniteQueries = () => {
  const fetchColors = async ({ pageParam = 1 }) => {
    const response = await axios.get(
      `http://localhost:4000/colors?_page=${pageParam}&_per_page=2`
    );
    return response.data;
  };

  const {
    isLoading,
    isError,
    error,
    data,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(["colors"], fetchColors, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 5) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  if (isLoading) {
    return <h2>Loading.......</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <div>
        {data?.pages?.map((group, i) => (
          <Fragment key={i}>
            {group.data.map((color) => (
              <h2 key={color.id}>
                {color.id}. {color.label}
              </h2>
            ))}
          </Fragment>
        ))}
      </div>
      <div>
        <button
          disabled={!hasNextPage}
          className="bg-green-800"
          onClick={fetchNextPage}
        >
          Load more
        </button>
      </div>

      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : ""}</div>
    </>
  );
};
