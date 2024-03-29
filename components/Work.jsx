import React from 'react';
const Work = () => {
  return (
    <div
      name="Work"
      className="w-full pt-10 text-black md:h-screen bg-GreyColor"
    >
      <div className="max-w-[1000px] mx-auto  p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-black">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-2">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: 'url(./AcmeStore.jpg)' }}
            className="shadow-lg shadow-[#b8b5ad] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider text-white">
                Ecommerce Application with Tailwind CSS, Firebase & Stripe
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://acmestore.vercel.app/ "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-black bg-white rounded-lg hover:bg-black hover:text-white">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/VandanRogheliya/ACME-e-comm-Nextjs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-black bg-white rounded-lg hover:bg-black hover:text-white">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: 'url(./Dashboard.jpg)' }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider text-white">
                React Dashboard
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://stevenovak123.github.io/Dashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-black bg-white rounded-lg hover:bg-black hover:text-white">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/stevenovak123/Dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-black bg-white rounded-lg hover:bg-black hover:text-white">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: 'url(./crypto.jpg)' }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider text-white">
                React app using CryptoAPI
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://crypto-tracker-c6c70.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-black bg-white rounded-lg hover:bg-black hover:text-white">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/stevenovak123/cryptoapiReact"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-black bg-white rounded-lg hover:bg-black hover:text-white">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: 'url(./QRGen.jpg)' }}
            className="shadow-lg shadow-[#b8b5ad] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider text-white">
                QR Code Generator
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://stevenovak123.github.io/QrCodeGenerator/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-black bg-white rounded-lg hover:bg-black hover:text-white">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/stevenovak123/QrCodeGenerator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-black bg-white rounded-lg hover:bg-black hover:text-white">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
