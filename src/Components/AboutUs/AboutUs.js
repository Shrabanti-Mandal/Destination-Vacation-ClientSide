import React from "react";
import Question from "../Question/Question";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div className="container">
      <h4 className="p-5 m-3  ourPackage ">
        Normally, you are on the tour with at least 2 or more people; therefore,
        you have to follow the strict schedule. Each company has its own
        itinerary of tours so you have to stick with the pickup time, the
        destinations and activities.
      </h4>
      <Question></Question>
    </div>
  );
};

export default AboutUs;
