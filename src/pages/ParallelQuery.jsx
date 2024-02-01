import axios from "axios";
import { useQuery } from "react-query";

const fetchUsers = async () => {
  return await axios.get("https://jsonplaceholder.typicode.com/users");
};

const fetchBanks = async () => {
  return await axios.get("http://localhost:4000/data");
};

export const ParallelQuery = () => {
  useQuery("banks", fetchBanks);
  useQuery("users", fetchUsers);
  return <div>ParallelQuery</div>;
};
