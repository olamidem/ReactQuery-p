import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

const fetchBanks = async (bankId) => {
  return await axios.get(`http://localhost:4000/data/${bankId}`);
};

export const useBankDetails = (bankId) => {
  const queryCLient = useQueryClient();

  return useQuery(["bank", bankId], () => fetchBanks(bankId), {
    initialData: () => {
      const bank = queryCLient
        .getQueryData("banks")
        ?.data?.find((data) => data.id === parseInt(bankId));

      if (bank) {
        return { data: bank };
      } else {
        return undefined;
      }
    },
  });
};
