import React from "react";

const Support = () => {
  return (
    <section className=" flex flex-col lg:flex-row justify-between px-6 py-12 bg-white rounded-xl shadow-lg border border-gray-200 m-4">
      <div className="w-full lg:w-[65%] flex flex-col justify-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-left">
          How We Support NEPRA Compliance
        </h2>
        <ul className="pl-0 text-gray-700 text-base space-y-4">
          <li className="flex items-start gap-2">
            <img
              src="/images/checkbox.png"
              alt="Checked"
              className="w-5 h-5 mt-[2px]"
            />
            <span>
              IT &amp; OT Asset Inventory: Comprehensive identification and
              documentation of all assets.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <img
              src="/images/checkbox.png"
              alt="Checked"
              className="w-5 h-5 mt-[2px]"
            />
            <span>
              Risk Assessments: Evaluate vulnerabilities in alignment with NEPRA
              guidelines.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <img
              src="/images/checkbox.png"
              alt="Checked"
              className="w-5 h-5 mt-[2px]"
            />
            <span>
              Implementation of Security Controls: Deploy measures to secure
              assets as required by NEPRA standards.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <img
              src="/images/checkbox.png"
              alt="Checked"
              className="w-5 h-5 mt-[2px]"
            />
            <span>
              Incident Response Planning: Prepare for swift action in case of a
              breach.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <img
              src="/images/checkbox.png"
              alt="Checked"
              className="w-5 h-5 mt-[2px]"
            />
            <span>
              Regular Compliance Reporting: Stay audit-ready with detailed
              compliance documentation.
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full lg:w-[35%] flex flex-col justify-start mt-5 lg:mt-0">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-left">
          Who Can Benefit?
        </h2>
        <p className="text-gray-700 text-base mb-2 text-left">
          This service is tailored for:
        </p>
        <ul className="pl-0 text-gray-700 text-base space-y-2 text-left">
          <li className="flex items-start gap-2">
            <img
              src="/images/checkbox.png"
              alt="Checked"
              className="w-5 h-5 mt-[2px]"
            />
            <span>Power Generation Companies</span>
          </li>
          <li className="flex items-start gap-2">
            <img
              src="/images/checkbox.png"
              alt="Checked"
              className="w-5 h-5 mt-[2px]"
            />
            <span>Transmission Network Operators</span>
          </li>
          <li className="flex items-start gap-2">
            <img
              src="/images/checkbox.png"
              alt="Checked"
              className="w-5 h-5 mt-[2px]"
            />
            <span>Distribution Companies</span>
          </li>
          <li className="flex items-start gap-2">
            <img
              src="/images/checkbox.png"
              alt="Checked"
              className="w-5 h-5 mt-[2px]"
            />
            <span>Independent Power Producers (IPPs)</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Support;
