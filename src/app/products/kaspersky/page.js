import Form from "@/app/components/products/Form";
import Header from "@/app/components/products/Header";
import Assessments from "@/app/components/products/kaspersky/Assessments";
import Products from "@/app/components/products/kaspersky/Products";
import Services from "@/app/components/products/kaspersky/Services";
import Support from "@/app/components/products/kaspersky/Support";
import React from "react";

const page = () => {
  const headerContent = {
    title: "NEPRA Compliance as a Service: Powered by Kaspersky",
    subtitle: "Empowering IT & OT Asset Security in the Power Sector",
    description:
      "Achieve NEPRA compliance effortlessly with our specialized service leveraging Kaspersky's cutting-edge solutions. Ensure comprehensive protection and assessment for your IT and OT assets, safeguarding your critical power sector operations from evolving cyber threats.",
  };

  return (
    <div>
      <Header
        title={headerContent.title}
        subtitle={headerContent.subtitle}
        description={headerContent.description}
      />
      <Products />
      <Services />
      <Assessments/>
      <Support/>
      <Form/>
    </div>
  );
};

export default page;
