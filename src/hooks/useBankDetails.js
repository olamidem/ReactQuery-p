import axios from "axios";
import { useQuery } from "react-query";

const fetchBanks = async (bankId) => {
  return await axios.get(`http://localhost:4000/data/${bankId}`);
};

export const useBankDetails = (bankId) => {
  return useQuery(["banks", bankId], () => fetchBanks(bankId));
};
