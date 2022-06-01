import React from "react";

const Input = () => {
  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
        <div className="input-group relative flex flex-wrap">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute mt-5 ml-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="search"
              className="form-control relative flex-auto min-w-0  block px-10 py-9 tablet:py-1.5 pt-7 tablet:pt-3 text-base h-[55px] font-normal text-gray-700 bg-whiteChange bg-clip-padding  w-[99%] tablet:w-[420px]    rounded-xl transition ease-in-out m-0  focus:outline-none border-none body-copy "
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            ></input>
          </div>
          <div className="hidden mobile:block">
          <button
            className="btn absolute right-2 top-2 w-4 h-7 bg-blue  px-8 py-5 bg-blue-600 text-white font-medium text-xs leading-tight rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center justify-center "
            type="button"
            id="button-addon2"
          >
            <span className="">Go</span>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
