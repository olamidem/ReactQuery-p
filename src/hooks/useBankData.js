/* eslint-disable no-empty-pattern */
import axios from "axios";
import { useQuery } from "react-query";
const fetchBanks = () => {
  return axios.get("http://localhost:4000/data");
};
export const useBankData = (onError, onSuccess) => {
  return useQuery("banks", fetchBanks, {
    // cacheTime:5000,
    //   staleTime: 30000,
    // refetchOnMount:true,"always",
    //   refetchOnWindowFocus:true,
    //   refetchInterval: 2000,
    // refetchIntervalInBackground:true,
    //   enabled: false,
    onError,
    onSuccess,
    // select: (data) => {
    //   const bankNames = data.data.map((bank) => bank.name);
    //   return bankNames;
    // },
  });
};

export const useBankGateway = (enabled) => {
  return useQuery("gateways", fetchBanks, {
    enabled: enabled,
  });
};

