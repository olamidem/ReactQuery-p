import { useParams } from "react-router-dom";
import { useBankDetails } from "../hooks/useBankDetails";

export const BankDetails = () => {
  const { bankId } = useParams();
  const { isLoading, data, isError, error } = useBankDetails(bankId);

  if (isLoading) return <h2>Loading............</h2>;
  if (isError) return <h2>{error.message}</h2>;

  return (
    <div>
      {data?.data.name} - {data?.data.code}
    </div>
  );
};
