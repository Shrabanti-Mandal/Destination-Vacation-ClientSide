import React, { useEffect, useState } from "react";
import Package from "../Package/Package";

const Packages = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    setLoading(false);
    fetch("https://haunted-catacombs-99987.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
    setTimeout(() => {
      setLoading(!loading);
    }, 2000);
    setShow(!show);
  }, []);
  return (
    <div>
      <div className="Container">
        <h2>Our current available services :{services.length}</h2>

        <div className="row">
          {loading ? (
            services.map((service) => (
              <Package key={service._id} service={service}></Package>
            ))
          ) : (
            <div class="spinner-border text-warning ms-5 " role="status">
              <span class="visually-hidden"></span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Packages;
