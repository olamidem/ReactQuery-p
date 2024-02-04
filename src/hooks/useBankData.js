/* eslint-disable no-empty-pattern */
// Disable eslint rule for empty patterns as it seems intentional in this code

import { useMutation, useQuery, useQueryClient } from "react-query";
import { request } from "../utils/axios-utils";

// Function to fetch bank data
const fetchBanks = () => {
  // Using the custom request function to handle API calls
  return request({
    url: "/data",
    method: "get",
  });
};

// Function to add color
const addColor = (color) => {
  // Using the custom request function to handle API calls
  return request({ url: "/color", method: "post", data: color });
};

// Custom hook for fetching bank data with React Query
export const useBankData = (onError, onSuccess) => {
  return useQuery("banks", fetchBanks, {
    // Various options for configuring the useQuery hook
    onError,
    onSuccess,
  });
};

// Custom hook for fetching bank gateway data with React Query
export const useBankGateway = (enabled) => {
  return useQuery("gateways", fetchBanks, {
    enabled: enabled,
  });
};

// Custom hook for adding color with React Query
export const useAddColor = () => {
  const queryClient = useQueryClient();

  return useMutation(addColor, {
    // Callbacks for various mutation events
    onSuccess: (data) => {
      // Invalidate the "colors" query to trigger a refetch
      queryClient.invalidateQueries("colors");

      // Example of updating the query data manually (commented out)
      // queryClient.setQueryData("colors", (oldQueryData) => {
      //   return oldQueryData
      //     ? {
      //         ...oldQueryData,
      //         data: [...oldQueryData.data.data, data.data.data],
      //       }
      //     : oldQueryData;
      // });
    },
  });
};
