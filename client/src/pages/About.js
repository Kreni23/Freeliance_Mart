import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            At Freeliance Mart, we strive to provide you with the ultimate
            online shopping experience. Our platform is designed to offer a wide
            range of high-quality products and convenient browsing options.
            Customer satisfaction is at the core of our business. Our support
            team is always ready to assist you with any questions or inquiries
            you may have. To ensure a secure and seamless shopping experience,
            we have implemented robust security measures to safeguard your
            personal and financial information. We partner with reliable payment
            gateways to offer secure payment options. At Freeliance Mart, we
            value your feedback and continuously work to improve our services.
            Thank you for choosing Freeliance Mart. Happy shopping!
          </p>
          <p className="text-justify mt-2">
            <b>Freeliance</b>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
