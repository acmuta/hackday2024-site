"use client";
import NavBar from "../components/AfterLoginNavBar";
import { useState } from "react";
import { iceland } from "../components/ui/fonts";
import ScoreSubmission from "../components/scoreSubmission";

export default function JudgePage() {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [activeCyberSecurity, setActiveCyberSecurity] = useState(0);
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleAccordion = async (index: any, categoryProp: string) => {
    setActiveAccordion(activeAccordion === index ? null : index);
    const category = categoryProp;
    await fetch("api/submissions/getSubmissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ category }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        //@ts-ignore
        return data.filter((submission) => submission.reviewCount < 5);
      })
      .then((filtereddata) => {
        console.log(filtereddata);
        setSubmissions(filtereddata);
        setLoading(false);
      });
  };

  return (
    <div className="h-full static">
      <NavBar />
      <div className=" flex flex-row justify-center items-center w-full  mt-20">
        <div
          id="accordion-collapse"
          data-accordion="collapse"
          className="md:w-3/6 w-80"
        >
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              className="flex items-center justify-between p-5 w-full   border-white border border-b-0 bg-white bg-opacity-20 rounded-t-xl focus:ring-2 focus:ring-gray-200 dark:text-gray-400 hover:bg-opacity-30 gap-3"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded={activeAccordion === 1}
              aria-controls="accordion-collapse-body-1"
              onClick={() => toggleAccordion(1, "cyber security")}
            >
              <span className={`${iceland.className}  text-white text-3xl`}>
                Cyber Security
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
            {loading ? (
              <p>Loading...</p>
            ) : submissions.length === 0 ? (
              <p>No submissions</p>
            ) : (
              submissions.map((submission, index) => (
                <ScoreSubmission
                  submission={submission}
                  order={index}
                ></ScoreSubmission>
              ))
            )}
          </div>

          {/* Repeat for other accordions */}
        </div>
      </div>
      <div className=" flex flex-row justify-center items-center w-full  mt-10">
        <div
          id="accordion-collapse"
          data-accordion="collapse"
          className="md:w-3/6 w-80"
        >
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              className="flex items-center justify-between p-5 w-full   border-white border border-b-0 bg-white bg-opacity-20 rounded-t-xl focus:ring-2 focus:ring-gray-200 dark:text-gray-400 hover:bg-opacity-30 gap-3"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded={activeAccordion === 2}
              aria-controls="accordion-collapse-body-1"
              onClick={() => toggleAccordion(2, "real estate")}
            >
              <span className={`${iceland.className}  text-white text-3xl`}>
                Real Estate
              </span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 shrink-0 text-white ${
                  activeAccordion === 2 ? "rotate-180" : ""
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
            className={`${activeAccordion === 2 ? "" : "hidden"}`}
            aria-labelledby="accordion-collapse-heading-1"
          >
            {loading ? (
              <p>Loading...</p>
            ) : submissions.length === 0 ? (
              <p>No submissions</p>
            ) : (
              submissions.map((submission, index) => (
                <ScoreSubmission
                  submission={submission}
                  order={index}
                ></ScoreSubmission>
              ))
            )}
          </div>

          {/* Repeat for other accordions */}
        </div>
      </div>
      <div className=" flex flex-row justify-center items-center w-full  mt-10">
        <div
          id="accordion-collapse"
          data-accordion="collapse"
          className="md:w-3/6 w-80"
        >
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              className="flex items-center justify-between p-5 w-full   border-white border border-b-0 bg-white bg-opacity-20 rounded-t-xl focus:ring-2 focus:ring-gray-200 dark:text-gray-400 hover:bg-opacity-30 gap-3"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded={activeAccordion === 3}
              aria-controls="accordion-collapse-body-1"
              onClick={() => toggleAccordion(3, "education")}
            >
              <span className={`${iceland.className}  text-white text-3xl`}>
                Education
              </span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 shrink-0 text-white ${
                  activeAccordion === 3 ? "rotate-180" : ""
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
            className={`${activeAccordion === 3 ? "" : "hidden"}`}
            aria-labelledby="accordion-collapse-heading-1"
          >
            {loading ? (
              <p>Loading...</p>
            ) : submissions.length === 0 ? (
              <p>No submissions</p>
            ) : (
              submissions.map((submission, index) => (
                <ScoreSubmission
                  submission={submission}
                  order={index}
                ></ScoreSubmission>
              ))
            )}
          </div>

          {/* Repeat for other accordions */}
        </div>
      </div>
      <div className=" flex flex-row justify-center items-center w-full  mt-10">
        <div
          id="accordion-collapse"
          data-accordion="collapse"
          className="md:w-3/6 w-80"
        >
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              className="flex items-center justify-between p-5 w-full   border-white border border-b-0 bg-white bg-opacity-20 rounded-t-xl focus:ring-2 focus:ring-gray-200 dark:text-gray-400 hover:bg-opacity-30 gap-3"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded={activeAccordion === 4}
              aria-controls="accordion-collapse-body-1"
              onClick={() => toggleAccordion(4, "artifical intelligence")}
            >
              <span className={`${iceland.className}  text-white text-3xl`}>
                Artifical Intelligence
              </span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 shrink-0 text-white ${
                  activeAccordion === 4 ? "rotate-180" : ""
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
            className={`${activeAccordion === 4 ? "" : "hidden"}`}
            aria-labelledby="accordion-collapse-heading-1"
          >
            {loading ? (
              <p>Loading...</p>
            ) : submissions.length === 0 ? (
              <p>No submissions</p>
            ) : (
              submissions.map((submission, index) => (
                <ScoreSubmission
                  submission={submission}
                  order={index}
                ></ScoreSubmission>
              ))
            )}
          </div>

          {/* Repeat for other accordions */}
        </div>
      </div>
    </div>
  );
}
