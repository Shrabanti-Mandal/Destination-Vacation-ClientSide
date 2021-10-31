import React from "react";

const MyBooking = (props) => {
  const { _id, name, packageName, status, image } = props.packages;

  return (
    <div>
      <div class="card" style={{ width: "18rem" }}>
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{packageName}</p>
          <p class="card-text">{status}</p>
          <button onClick={() => props.handleDeleteBooking(_id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
