import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Home } from "./pages/Home";
import { Code } from "./pages/Code";
import { Gateway } from "./pages/Gateway";
import { BankDetails } from "./pages/bankDetails";
import { ParallelQuery } from "./pages/ParallelQuery";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-sm lg:flex-grow">
                <Link
                  to="/"
                  className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
                >
                  Home
                </Link>
                <Link
                  to="/code"
                  className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
                >
                  Code
                </Link>
                <Link
                  to="/gateway"
                  className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white"
                >
                  Gateway
                </Link>
                <Link
                  to="/parallel-query"
                  className="block mt-4 ml-5 lg:inline-block lg:mt-0 text-gray-300 hover:text-white"
                >
                  Parallel Query
                </Link>
              </div>
            </div>
          </nav>

          <Routes>
            <Route index element={<Home />} />
            <Route path="/code" element={<Code />} />
            <Route path="/gateway" element={<Gateway />} />
            <Route path="/parallel-query" element={<ParallelQuery />} />
            <Route path="/bank-details/:bankId" element={<BankDetails />} />
          </Routes>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
}

export default App;
