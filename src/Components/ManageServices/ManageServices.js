import React, { useEffect, useState } from "react";
import ManageService from "../ManageService/ManageService";

import "./ManageServices.css";

const ManageServices = () => {
  const [allBookings, setAllBookings] = useState([]);

  useEffect(() => {
    fetch("https://haunted-catacombs-99987.herokuapp.com/myBooking")
      .then((res) => res.json())
      .then((data) => setAllBookings(data));
  }, []);

  //update
  const handleUpdatedStatus = (id) => {
    console.log(id);
    const url = `https://haunted-catacombs-99987.herokuapp.com/${id}`;
    console.log(url);
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("updated successfully");

          window.location.reload();
        }
      });
  };

  //delete
  const handleDeleteBooking = (id) => {
    console.log(id);
    const url = `https://haunted-catacombs-99987.herokuapp.com/myBooking/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const remaining = allBookings.filter((order) => order._id !== id);
          alert("deleted");
          setAllBookings(remaining);
        }
      });
  };

  return (
    <div>
      {/* <h2>manage services</h2> */}
      {allBookings.map((booking) => (
        <ManageService
          booking={booking}
          handleUpdatedStatus={handleUpdatedStatus}
          handleDeleteBooking={handleDeleteBooking}
        ></ManageService>
      ))}
    </div>
  );
};

export default ManageServices;
