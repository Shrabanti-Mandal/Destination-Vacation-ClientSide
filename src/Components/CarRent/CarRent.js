import React from "react";
import "./CarRent.css";
const CarRent = () => {
  return (
    <div className="car-rentals">
      <div className="px-5">
        <h1 className="p-5 car-heading">Car rentals </h1>
        <h3 className="text-primary">
          Do you need car ? Don't worry about It. We are trying to give you the
          best support as we can. These are our car-rental-details
        </h3>
      </div>
      <div className="carbox">
        <div className=" shadow-lg p-3 mb-5 rounded bg-info text-primary box">
          <h3>Free Cancellations</h3>
          <p className="text-dark">
            Most car rental bookings have no cancellation fee when canceled
            before pick-up.
          </p>
        </div>
        <div className=" shadow-lg p-3 mb-5  rounded bg-success text-warning box">
          <h3>No Credit Card Fees</h3>
          <p className="text-dark">
            We won't charge you an extra fee when paying by credit card.
          </p>
        </div>
        <div className=" shadow-lg p-3 mb-5  rounded bg-warning text-danger box">
          <h3>Customer Support</h3>
          <p className="text-dark">One-on-one support in multiple languages</p>
        </div>
      </div>
    </div>
  );
};

export default CarRent;
