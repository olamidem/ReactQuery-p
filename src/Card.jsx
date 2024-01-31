export const Card = () => {
  return (
    <>
      <div className="relative flex w-full max-w-[20rem] flex-col  bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
        <div className="relative m-0 mb-10 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
          <p className="block font-sans text-sm font-normal uppercase leading-normal text-white antialiased">
            standard
          </p>
          <h1 className="mt-6 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-white antialiased">
            <span className="mt-2 text-4xl">$</span>29
            <span className="self-end text-4xl">/mo</span>
          </h1>
        </div>
       
        <div className="mt-5 p-0">
          <button
            className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-dark="true"
          >
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};
