import React from "react";

const Form = () => {
  return (
    <section className=" flex flex-col lg:flex-row justify-between items-stretch  pr-6 lg:pr-0 pl-6 py-12 bg-white rounded-xl shadow-lg  border border-gray-200 m-4">
      <div className="w-full lg:w-[60%] flex flex-col justify-center">
        <h2 className="text-2xl md:text-2xl font-semibold text-gray-900 mb-8 text-left">
          Get Started with NEPRA Compliance: Schedule Your Consultation Today
        </h2>
        <form className="space-y-5">
          <div>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500 "
              placeholder="Name"
            />
          </div>
          <div className="flex gap-4">
            <input
              type="email"
              className="w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500 "
              placeholder="Email"
            />
            <input
              type="tel"
              className="w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500 "
              placeholder="Phone"
            />
          </div>
          <div className="flex gap-4">
            <input
              type="text"
              className="w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500 "
              placeholder="Company/Organization"
            />
            <input
              type="text"
              className="w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500 "
              placeholder="Job Title/Role"
            />
          </div>
          <div className="text-gray-700 font-medium mt-6 mb-2">
            What date and time work best for you to meet with our consultant?
          </div>
          <div className="flex gap-4">
            <input
              type="time"
              className="w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder:text-black "
            />
            <input
              type="date"
              className="w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder:text-black "
            />
          </div>
          <button
            type="submit"
            className=" bg-blue-800 hover:bg-blue-500 text-white py-3 px-8 rounded-lg shadow transition-colors duration-150 text-lg font-semibold mt-6"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="w-[18%] hidden lg:flex justify-end items-end mt-8 lg:mt-0">
        <img
          src="/images/form.png"
          alt="Form"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
};

export default Form;
