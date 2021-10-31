import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <div className="contact-details p-3">
        <div className="contact-info text-center">
          <h4>Our contact details are : </h4>
          <p>
            {" "}
            <i class="fas fa-phone-square-alt"></i> 477 3700
          </p>
          <p>
            <i class="fas fa-fax"></i> 477 3701
          </p>
          <p>
            <i class="fas fa-envelope-open"></i> destination@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
