export const FeaturesBlocks = () => {
  return (
    <section className="relative flex pb-20 flex-grow">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute bottom-0 left-0 right-0 w-px h-20 p-px m-auto transform translate-y-1/2 bg-grayscale-200"></div>
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
            <h2 className="mb-4 h2">
              Make styling a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                breeze
              </span>
            </h2>
            <p className="text-xl text-grayscale-600">
              Stop wasting your time. Vivid makes CSS easier than recursive
              depth-first search.{" "}
            </p>
          </div>

          {/* Items */}
          <div className="grid items-start max-w-sm gap-6 mx-auto md:max-w-2xl lg:max-w-none lg:grid-cols-3">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 mb-2 -mt-1"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="text-blue-600 fill-current"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2">
                    <path
                      className="text-blue-300 stroke-current"
                      d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285"
                    />
                    <path
                      className="text-white stroke-current"
                      d="M20.571 37.714h5.715L36.57 26.286h8"
                    />
                    <path
                      className="text-blue-300 stroke-current"
                      strokeLinecap="square"
                      d="M41.143 34.286l3.428 3.428-3.428 3.429"
                    />
                    <path
                      className="text-white stroke-current"
                      strokeLinecap="square"
                      d="M41.143 29.714l3.428-3.428-3.428-3.429"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="mb-1 text-xl font-bold leading-snug tracking-tight">
                In-browser
              </h4>
              <p className="text-center text-grayscale-600">
                Edit your styling from the most natural place - where it renders
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 mb-2 -mt-1"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="text-blue-600 fill-current"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2" transform="translate(19.429 20.571)">
                    <circle
                      className="text-white stroke-current"
                      strokeLinecap="square"
                      cx="12.571"
                      cy="12.571"
                      r="1.143"
                    />
                    <path
                      className="text-white stroke-current"
                      d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696"
                    />
                    <path
                      className="text-blue-300 stroke-current"
                      d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="mb-1 text-xl font-bold leading-snug tracking-tight">
                Code first
              </h4>
              <p className="text-center text-grayscale-600">
                Use Vivid's command palette and code pane to edit styling using
                code
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 mb-2 -mt-1"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="text-blue-600 fill-current"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeLinecap="square" strokeWidth="2">
                    <path
                      className="text-blue-300 stroke-current"
                      d="M38.826 22.504a9.128 9.128 0 00-13.291-.398M35.403 25.546a4.543 4.543 0 00-6.635-.207"
                    />
                    <path
                      className="text-white stroke-current"
                      d="M19.429 25.143A6.857 6.857 0 0126.286 32v1.189L28 37.143l-1.714.571V40A2.286 2.286 0 0124 42.286h-2.286v2.285M44.571 25.143A6.857 6.857 0 0037.714 32v1.189L36 37.143l1.714.571V40A2.286 2.286 0 0040 42.286h2.286v2.285"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="mb-1 text-xl font-bold leading-snug tracking-tight">
                Modern frameworks
              </h4>
              <p className="text-center text-grayscale-600">
                Build components using Vivid in React styled with Tailwind CSS
              </p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 mb-2 -mt-1"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="text-blue-600 fill-current"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g transform="translate(22.857 19.429)" strokeWidth="2">
                    <path
                      className="text-white stroke-current"
                      strokeLinecap="square"
                      d="M12.571 4.571V0H0v25.143h12.571V20.57"
                    />
                    <path
                      className="text-white stroke-current"
                      d="M16 12.571h8"
                    />
                    <path
                      className="text-white stroke-current"
                      strokeLinecap="square"
                      d="M19.429 8L24 12.571l-4.571 4.572"
                    />
                    <circle
                      className="text-blue-300 stroke-current"
                      strokeLinecap="square"
                      cx="12.571"
                      cy="12.571"
                      r="3.429"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="mb-1 text-xl font-bold leading-snug tracking-tight">
                Production-ready code
              </h4>
              <p className="text-center text-grayscale-600">
                Modify your styling in-browser and update your IDE with code
                that looks like your own
              </p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 mb-2 -mt-1"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="text-blue-600 fill-current"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeLinecap="square" strokeWidth="2">
                    <path
                      className="text-white stroke-current"
                      d="M20.571 20.571h13.714v17.143H20.571z"
                    />
                    <path
                      className="text-blue-300 stroke-current"
                      d="M38.858 26.993l6.397 1.73-4.473 16.549-13.24-3.58"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="mb-1 text-xl font-bold leading-snug tracking-tight">
                Your workflow
              </h4>
              <p className="text-center text-grayscale-600">
                Keep using your browser and IDE without needing an extra window
              </p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 mb-2 -mt-1"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="text-blue-600 fill-current"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2">
                    <path
                      className="text-white stroke-current"
                      d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714"
                    />
                    <path
                      className="text-white stroke-current"
                      d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286"
                    />
                    <path
                      className="text-white stroke-current"
                      d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286"
                    />
                    <path
                      className="text-blue-300 stroke-current"
                      d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572"
                      strokeLinecap="square"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="mb-1 text-xl font-bold leading-snug tracking-tight">
                Smarter inspect element
              </h4>
              <p className="text-center text-grayscale-600">
                Understand and modify the components making up your design with
                just one click
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Built with Vivid ⚡️
