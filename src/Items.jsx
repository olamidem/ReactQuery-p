export const Items = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex font-sans">
        <div className="flex-none w-48 relative">
          <img
            src="https://images.unsplash.com/photo-1699412958387-2fe86d46d394?q=80&w=3329&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <form className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-xl font-semibold text-gray-900">
              Pullover Unisex
            </h1>
            <div className="text-lg font-semibold text-black-500">$110.00</div>
          </div>

          <div className="flex space-x-4 mb-6 text-sm font-medium">
            <button
              className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
              type="button"
              aria-label="Favorites"
            >
              buy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
