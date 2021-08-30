export const WhyUSSection = () => {
  return (
    <div id="whyUs" className="flex flex-col overflow-hidden pt-20 pb-60">
      <div className="max-w-md mx-auto text-center">
        <h2 className="my-5 text-base font-medium tracking-tight text-purple uppercase text-center lg:text-3xl">
          Why Us?
        </h2>

        <div className="divide-y divide-gray-200 text-left mx-5 mb-4">
          <div className="p-8 text-base leading-6 space-y-5 text-gray-700 sm:text-lg sm:leading-7">
            <h3 className="text-2xl text-purple font-black leading-tight text-center text-gray-800 sm:px-0 sm:text-3xl">
              What makes tishatsu special ?<br />
            </h3>
            <ul className="list-disc space-y-4 text-gray-600">
              <li className="flex items-start border-b-2">
                <span className="h-6 flex items-center sm:h-7">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-cyan-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <p className="ml-2 xl:text-2xl">
                  <b>Get printed T-shirts</b>
                </p>
              </li>
              <li className="flex items-start border-b-2">
                <span className="h-6 flex items-center sm:h-7">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-cyan-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <p className="ml-2 xl:text-2xl">
                  <b>Look good in the metaverse</b>
                </p>
              </li>
              <li className="flex items-start">
                <span className="h-6 flex items-center sm:h-7">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-cyan-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <p className="ml-2 xl:text-2xl">
                  <b>Unique and rare t-shirts as drops to early holders</b>
                </p>
              </li>
            </ul>
            {/* <p>Doggo ipsum long bois lotsa pats blep. What a nice floof Doggo ipsum long bois lotsa pats blep. What a nice floof</p> */}
          </div>
        </div>
        <a
          href="https://nftvisionhack.herokuapp.com/"
          className="xl:text-xl relative self-start inline-block w-auto px-8 py-4 mx-auto mt-0 text-base font-bold text-white bg-color-purple border-t border-gray-200 rounded-md shadow-xl sm:mt-1 fold-bold lg:mx-0"
        >
          Mint Now
        </a>
      </div>
    </div>
  );
};
