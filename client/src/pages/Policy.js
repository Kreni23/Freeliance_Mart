import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/policy.jpg"
            alt="contactus"
            style={{ width: "100%", marginTop: "40px" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            <b>Information You Give Us: </b>We receive and store any information
            you provide in relation to Freeliance Services.
          </p>
          <p>
            <b>Purchase and delivery of products and services: </b>We use your
            personal information to take and fulfill orders, deliver products
            and services, process payments, and communicate with you about
            orders, products and services.
          </p>
          <p>
            <b>Fraud Prevention and Credit Risks: </b>
            We use personal information to prevent and detect fraud and abuse in
            order to protect the security of our customers, Amazon, and others.
            We may also use scoring methods to assess and manage credit risks.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
