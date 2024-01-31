import { useState, useEffect } from "react";
import axios from "axios";

export const Code = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/data")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if (error) return <h2>{error}</h2>;

  return (
    <>
      <h2>Bank Code</h2>
      {data.map((bankCode) => (
        <div key={bankCode.code}>{bankCode.code}</div>
      ))}
    </>
  );
};
