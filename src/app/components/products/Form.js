import React from "react";

const Form = () => {
  return (
    <section className=" flex flex-col lg:flex-row items-stretch px-6 py-12 bg-white rounded-xl shadow-lg  border border-gray-200 m-4">
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-left">
          Get Started with NEPRA Compliance: Schedule Your Consultation Today
        </h2>
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Phone
            </label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Phone"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Company/Organization
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Company/Organization"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Job Title/Role
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Job Title/Role"
            />
          </div>
          <div className="text-gray-700 font-medium mt-6 mb-2">
            What date and time work best for you to meet with our consultant?
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-medium mb-1">
                Date
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 font-medium mb-1">
                Time
              </label>
              <input
                type="time"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-800 hover:bg-blue-500 text-white py-3 px-8 rounded-lg shadow transition-colors duration-150 text-lg font-semibold mt-6"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
        <img
          src="/images/form.png"
          alt="Form"
          className="max-w-xs w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default Form;
