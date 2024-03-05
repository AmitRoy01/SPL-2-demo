import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title = {"About-TeleCommerce App"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="about"
            style={{ width: "50%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          "TeleCommerce" is an innovative e-commerce application that seamlessly integrates with Telegram, 
          one of the most popular messaging platforms worldwide. 
          With TeleCommerce, users can browse, search for, and purchase products directly within the familiar interface of Telegram, 
          leveraging its convenient messaging features.
          </p>
        </div>
      </div>
    </Layout>
  );
};

Layout.defaultProps ={
  title :"TeleCommerce App - Shop Now",
  description : "SPL2 Project",
  keywords: "mern,react,node,mongodb",
  author:"TeleCommerce",
};
export default About;