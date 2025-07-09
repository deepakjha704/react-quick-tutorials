import React, { useState } from "react";

function Faq({ item }) {
  const [toggle, setToggle] = useState(false);
  const { question, answer } = item;
  return (
    <section className="flex flex-col  gap-4 rounded-md bg-gray-100 border border-gray-500 w-[400px] text-black">
      <div className="px-8 py-4 border-b-2 flex justify-between">
        <h3 className="text-black">Qes: {question}</h3>
        <a onClick={() => setToggle(!toggle)} className="text-black">
          {!toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          )}
        </a>
      </div>
      {toggle && (
        <p className="px-8 py-4 flex items-start justify-start">
          Ans: {answer}
        </p>
      )}
    </section>
  );
}

export default Faq;
