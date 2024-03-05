import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title="Contact Us">
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contact.jpeg"
            alt="contactus"
            style={{ width: "50%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            avaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@telecommerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 01732-277419
          </p>
          <p className="mt-3">
            <BiSupport /> : 01521-705586 (Whatsapp)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;