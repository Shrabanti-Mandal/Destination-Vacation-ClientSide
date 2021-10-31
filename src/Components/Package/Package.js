import React from "react";
import { Link } from "react-router-dom";
import "./Package.css";
const Package = (props) => {
  const { name, description, image, _id } = props.service;
  return (
    <div className="card-group  p-3 col-lg-3 col-md-4 col-12">
      <div class="card p-2">
        <img
          className="service-img"
          src={image}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{description}</p>
        </div>
        <div class="card-footer">
          <Link to={`/packageForm/${_id}`}>
            <button type="button" class="btn btn-success ">
              Take A Visit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Package;
