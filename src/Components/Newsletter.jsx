const Newsletter = () => {
  return (
    <div className="my-10 shadow bg-[#433d8b]">
      <div className="w-11/12 mx-auto px-6 sm:px-10 py-16 text-center space-y-2">
        <h2 className="text-3xl font-bold text-white">Join our newsletter</h2>
        <p className="text-xl font-medium text-white">
          get weekly access to our top posts, news, and more
        </p>
        <div className="mt-6 grid grid-cols-4 md:w-1/2 mx-auto">
          <div className="col-span-3 outline outline-black">
            <label className="input validator w-full rounded-r-none focus-within:outline-none">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
          <button className="btn btn-neutral rounded-l-none hover:bg-neutral-800">
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
