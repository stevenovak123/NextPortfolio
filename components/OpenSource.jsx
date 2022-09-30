import React from 'react';

const OpenSource = () => {
  return (
    <div
      name="OpenSource"
      className="w-full pt-10 text-black md:h-screen bg-GreyColor"
    >
      <div className="max-w-[1000px] mx-auto  p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-black">
            Open Source
          </p>
          <p className="py-6">
            Check out some of my recent Open Source Contribution
          </p>
        </div>

        {/* Container */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-2">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: 'url(./validkube.jpg' }}
            className="shadow-lg shadow-[#b8b5ad] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider text-white">
                Added Light & Dark themes to the Website
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://validkube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-black bg-white rounded-lg hover:bg-black hover:text-white">
                    Live
                  </button>
                </a>
                <a
                  href="https://github.com/komodorio/validkube/pull/40"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-black bg-white rounded-lg hover:bg-black hover:text-white">
                    PR code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* //* Element End */}
      </div>

      {/* //* Parent div end */}
    </div>
  );
};

export default OpenSource;
