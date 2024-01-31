import { useBankGateway } from "../hooks/useBankData";

export const Gateway = () => {
  const { data, isFetching, refetch } = useBankGateway(false);
  if (isFetching) return <p>Loading......</p>;

  return (
    <>
      <h2>Gateway</h2>

      <button
        className="p-2 text-sm bg-emerald-400 text-white"
        onClick={refetch}
      >
        Get Bank Gateway
      </button>

      {data?.data.map((code) => {
        return <div key={code.code}>{code.gateway}</div>;
      })}
    </>
  );
};
