"use client";
import NavBar from "../components/AfterLoginNavBar";
import { useState } from "react";
import { iceland } from "../components/ui/fonts";

export default function JudgePage() {
  const [activeAccordion, setActiveAccordion] = useState("");
  const [activeCyberSecurity, setActiveCyberSecurity] = useState(0);

  const toggleAccordion = (index: any) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  const toggleCyberSecurity = (index: any) => {
    setActiveCyberSecurity(activeCyberSecurity === index ? null : index);
  };

  return (
    <div className="h-full static">
      <NavBar />
      <div className=" flex flex-row justify-center items-center w-full  mt-10">
        <div
          id="accordion-collapse"
          data-accordion="collapse"
          className="w-3/6"
        >
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              className="flex items-center justify-between p-5 w-full   border-white border border-b-0 bg-white bg-opacity-20 rounded-t-xl focus:ring-2 focus:ring-gray-200 dark:text-gray-400 hover:bg-opacity-30 gap-3"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded={activeCyberSecurity === 1}
              aria-controls="accordion-collapse-body-1"
              onClick={() => toggleCyberSecurity(1)}
            >
              <span className={`${iceland.className}  text-white text-3xl`}>
                Cyber Security
              </span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 shrink-0 text-white ${
                  activeCyberSecurity === 1 ? "rotate-180" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-1"
            className={`${activeCyberSecurity === 1 ? "" : "hidden"}`}
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="flex flex-row p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <div className="flex-grow">
                <h1 className={`${iceland.className} text-white text-3xl`}>
                  1.{" "}
                  <span className={`${iceland.className} text-white text-xl`}>
                    Submit URL
                  </span>
                </h1>
              </div>
              <div className="relative mr-1 flex flex-col items-end">
                <form>
                  <label
                    className={`${iceland.className} text-white text-xl mb-2`}
                  >
                    Score
                  </label>
                  <input
                    type="text"
                    className={`${iceland.className} bg-white bg-opacity-20 rounded-md p-2 mb-2 w-10 ml-2`}
                  />
                  <button
                    className={`${iceland.className} text-white bg-opacity-20 rounded-md p-2 hover:bg-opacity-30 transition duration-200`}
                  >
                    <svg
                      className="w-4 h-4 transform rotate-45 "
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
            <div className="flex flex-row p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <div className="flex-grow">
                <h1 className={`${iceland.className} text-white text-3xl`}>
                  2.{" "}
                  <span className={`${iceland.className} text-white text-xl`}>
                    Submit URL
                  </span>
                </h1>
              </div>
              <div className="relative mr-1 flex flex-col items-end">
                <form>
                  <label
                    className={`${iceland.className} text-white text-xl mb-2`}
                  >
                    Score
                  </label>
                  <input
                    type="text"
                    className={`${iceland.className} bg-white bg-opacity-20 rounded-md p-2 mb-2 w-10 ml-2`}
                  />
                  <button
                    className={`${iceland.className} text-white bg-opacity-20 rounded-md p-2 hover:bg-opacity-30 transition duration-200`}
                  >
                    <svg
                      className="w-4 h-4 transform rotate-45 "
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Repeat for other accordions */}
        </div>
      </div>
      <div className=" flex flex-row justify-center items-center w-full  mt-10">
        <div
          id="accordion-collapse"
          data-accordion="collapse"
          className="w-3/6"
        >
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              className="flex items-center justify-between p-5 w-full   border-white border border-b-0 bg-white bg-opacity-20 rounded-t-xl focus:ring-2 focus:ring-gray-200 dark:text-gray-400 hover:bg-opacity-30 gap-3"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded={activeAccordion === 1}
              aria-controls="accordion-collapse-body-1"
              onClick={() => toggleAccordion(1)}
            >
              <span className={`${iceland.className}  text-white text-3xl`}>
                Real Estate
              </span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 shrink-0 text-white ${
                  activeAccordion === 1 ? "rotate-180" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-1"
            className={`${activeAccordion === 1 ? "" : "hidden"}`}
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">FUck it</p>
            </div>
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">FUck it</p>
            </div>
          </div>

          {/* Repeat for other accordions */}
        </div>
      </div>
      <div className=" flex flex-row justify-center items-center w-full  mt-10">
        <div
          id="accordion-collapse"
          data-accordion="collapse"
          className="w-3/6"
        >
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              className="flex items-center justify-between p-5 w-full   border-white border border-b-0 bg-white bg-opacity-20 rounded-t-xl focus:ring-2 focus:ring-gray-200 dark:text-gray-400 hover:bg-opacity-30 gap-3"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded={activeAccordion === 1}
              aria-controls="accordion-collapse-body-1"
              onClick={() => toggleAccordion(1)}
            >
              <span className={`${iceland.className}  text-white text-3xl`}>
                Education
              </span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 shrink-0 text-white ${
                  activeAccordion === 1 ? "rotate-180" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-1"
            className={`${activeAccordion === 1 ? "" : "hidden"}`}
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">FUck it</p>
            </div>
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">FUck it</p>
            </div>
          </div>

          {/* Repeat for other accordions */}
        </div>
      </div>
      <div className=" flex flex-row justify-center items-center w-full  mt-10">
        <div
          id="accordion-collapse"
          data-accordion="collapse"
          className="w-3/6"
        >
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              className="flex items-center justify-between p-5 w-full   border-white border border-b-0 bg-white bg-opacity-20 rounded-t-xl focus:ring-2 focus:ring-gray-200 dark:text-gray-400 hover:bg-opacity-30 gap-3"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded={activeAccordion === 1}
              aria-controls="accordion-collapse-body-1"
              onClick={() => toggleAccordion(1)}
            >
              <span className={`${iceland.className}  text-white text-3xl`}>
                Artificial Intelligence
              </span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 shrink-0 text-white ${
                  activeAccordion === 1 ? "rotate-180" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-1"
            className={`${activeAccordion === 1 ? "" : "hidden"}`}
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">FUck it</p>
            </div>
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">FUck it</p>
            </div>
          </div>

          {/* Repeat for other accordions */}
        </div>
      </div>
    </div>
  );
}
