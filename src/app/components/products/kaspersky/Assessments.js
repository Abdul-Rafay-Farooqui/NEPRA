import React from "react";

const Assessments = () => {
  return (
    <section className=" flex flex-col lg:flex-row justify-between items-center px-6 py-12 bg-[#fffff] rounded-xl shadow-lg  border border-gray-200 m-4">
      <div className="w-full lg:w-[67%] flex flex-col justify-center ">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-left lg:text-left">
          Why Kaspersky for IT &amp; OT Asset Assessment?
        </h2>
        <div className="text-black text-base space-y-6 text-left lg:text-left">
          <div>
            <h3 className="font-medium text-lg mb-1">
              Comprehensive IT &amp; OT Asset Protection
            </h3>
            <p>
              Secure all interconnected systems, from IT infrastructure to
              operational technologies (OT), against cyberattacks.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-1">
              Proactive Threat Detection
            </h3>
            <p>
              Advanced AI-driven tools to identify vulnerabilities before they
              can be exploited.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-1">
              Streamlined NEPRA Compliance
            </h3>
            <p>
              Tailored tools that align with NEPRA’s regulatory standards to
              simplify compliance processes.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-1">
              24/7 Security Monitoring
            </h3>
            <p>
              Continuous surveillance to ensure uptime and operational
              reliability.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-1">
              Industry-Specific Expertise
            </h3>
            <p>
              Solutions designed for the critical needs of power generation,
              transmission, and distribution sectors.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[33%] flex justify-end items-start mt-8 lg:mt-0 h-full">
        <img
          src="/images/kaspersky.png"
          alt="Kaspersky"
          className="w-full h-full object-cover "
        />
      </div>
    </section>
  );
};

export default Assessments;
