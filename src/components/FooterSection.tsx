import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-15 w-full">
      <div className="max-w-6xl w-full px-4  mx-auto">
        <h2 className="text-5xl font-extralight font-serif mb-40 text-center">Let’s work together</h2>

        <div className="flex flex-col md:flex-row justify-between  md:items-start gap-8 md:gap-16">
          <div className="mb-14">
            <p className="text-primary text-lg font-medium mb-2">Kaduna, Nigeria</p>
            <p className="text-gray-700">
              +234 093 206 7404 &nbsp;|&nbsp;{" "}
              <a href="mailto:adekeyeimmanuel@gmail.com" className="hover:underline">
                adekeyeimmanuel@gmail.com
              </a>
            </p>
          </div>

          <div>
            <p className="text-primary text-lg font-medium mb-1">Socials</p>
            <div className="flex gap-4  md:justify-start">
              <a href="https://instagram.com/graphlinkz" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 transition">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M11.999 7.377C10.7726 7.377 9.59651 7.86417 8.72934 8.73134C7.86217 9.59851 7.375 10.7746 7.375 12.001C7.375 13.2274 7.86217 14.4035 8.72934 15.2707C9.59651 16.1378 10.7726 16.625 11.999 16.625C13.2254 16.625 14.4015 16.1378 15.2687 15.2707C16.1358 14.4035 16.623 13.2274 16.623 12.001C16.623 10.7746 16.1358 9.59851 15.2687 8.73134C14.4015 7.86417 13.2254 7.377 11.999 7.377Z"
                    fill="currentColor"
                  />
                  <path
                    d="M16.806 8.285C17.4014 8.285 17.884 7.80236 17.884 7.207C17.884 6.61164 17.4014 6.129 16.806 6.129C16.2107 6.129 15.728 6.61164 15.728 7.207C15.728 7.80236 16.2107 8.285 16.806 8.285Z"
                    fill="currentColor"
                  />
                  <path
                    d="M20.533 6.111C20.3015 5.51318 19.9477 4.97028 19.4943 4.51706C19.041 4.06384 18.4979 3.71027 17.9 3.479C17.2004 3.21636 16.4612 3.07434 15.714 3.059C14.751 3.017 14.446 3.005 12.004 3.005C9.56201 3.005 9.24901 3.005 8.29401 3.059C7.5474 3.07356 6.80877 3.2156 6.11001 3.479C5.51195 3.71 4.96878 4.06347 4.51535 4.51673C4.06192 4.96999 3.70824 5.51302 3.47701 6.111C3.21432 6.81061 3.07263 7.54984 3.05801 8.297C3.01501 9.259 3.00201 9.564 3.00201 12.007C3.00201 14.449 3.00201 14.76 3.05801 15.717C3.07301 16.465 3.21401 17.203 3.47701 17.904C3.70889 18.5018 4.06291 19.0446 4.51645 19.4978C4.96999 19.951 5.51308 20.3046 6.11101 20.536C6.80845 20.8092 7.54739 20.9614 8.29601 20.986C9.25901 21.028 9.56401 21.041 12.006 21.041C14.448 21.041 14.761 21.041 15.716 20.986C16.4631 20.9708 17.2022 20.8291 17.902 20.567C18.4998 20.3352 19.0426 19.9813 19.496 19.528C19.9493 19.0746 20.3032 18.5318 20.535 17.934C20.798 17.234 20.939 16.496 20.954 15.748C20.997 14.786 21.01 14.481 21.01 12.038C21.01 9.595 21.01 9.285 20.954 8.328C20.9424 7.57027 20.7999 6.82025 20.533 6.111Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <a href="https://dribbble.com/solinkz" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="currentColor">
                  <circle cx="10.5" cy="10.5" r="10" stroke="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center pt-8">
          <p>Developed by Me.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
