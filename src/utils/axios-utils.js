import axios from "axios";

// Create an Axios client with a base URL
const client = axios.create({ baseURL: "http://localhost:4000" });

// A function to make HTTP requests with optional authorization
export const request = ({ ...options }) => {
  // Check if the request requires authorization
  if (options.headers && options.headers.Authorization) {
    // Set the Authorization header with a placeholder token (replace with actual token logic)
    client.defaults.headers.common.Authorization = "Bearer token";
  }

  // Define a success callback function
  const onSuccess = (response) => response;

  // Define an error callback function
  const onError = (error) => {
    // Optional: catch errors and add additional logging or error handling logic here
    // For now, simply return the error as is
    return error;
  };

  // Make the HTTP request using the Axios client
  return client(options).then(onSuccess).catch(onError);
};

// Note: Make sure to replace "Bearer token" with your actual authorization token logic.
