import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title ="Privacy & Policy">
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/policy.jpeg"
            alt="contactus"
            style={{ width: "50%" }}
          />
        </div>
        <div className="col-md-4">
        <details>
  <summary><h4>Privacy & Policy</h4></summary>
  <p>
At TeleCommerce, we prioritize your privacy. Here's a brief overview:

1. **Data Collection:** We collect basic information like your name, contact details, and purchase history to improve our services and fulfill orders.
2. **Data Usage:** Your information is used for order processing, personalized experiences, and communication purposes only.

3. **Data Sharing:** We may share data with trusted partners for essential services like payments and shipping.

4. **Data Security:** Your information is securely stored and protected against unauthorized access.

5. **Your Rights:** You have the right to access, correct, or delete your data. You can also opt out of promotional communications.

6. **Policy Updates:** We may update our policy occasionally, so please check back for any changes.

Your trust matters to us. If you have any questions, reach out to us at <b>[contact@telecommerce.com]</b>(mailto:contact@telecommerce.com).</p>
</details>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;