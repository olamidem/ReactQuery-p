
import axios from "axios";
import { useQueries } from "react-query";

const fetchBankID = async (bankID) => {
  return await axios.get(`http://localhost:4000/data/${bankID}`);
};

export const DynamicParallelQuery = ({ bankIds }) => {
  if (!Array.isArray(bankIds)) {
    return <div>Invalid bank IDs</div>;
  }

  const queryResults = useQueries(
    bankIds.map((id) => ({
      queryKey: ["banks", id],
      queryFn: () => fetchBankID(id),
    }))
  );

  console.log("🚀 ~ DynamicParallelQuery ~ queryResults:", { queryResults });

  return <div>ParallelQuery</div>;
};
