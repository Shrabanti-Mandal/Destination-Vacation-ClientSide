import React, { useEffect, useState } from "react";
import "./MyPackage.css";
import { useHistory } from "react-router";
import useAuth from "../../hooks/useAuth";
import MyBooking from "../myBooking/MyBooking";

const MyPackage = () => {
  const [packages, setPackages] = useState([]);
  const [singlepackages, setSinglePackages] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    fetch("https://haunted-catacombs-99987.herokuapp.com/myBooking")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  useEffect(() => {
    const found = packages?.filter((detail) => detail.email === user.email);
    setSinglePackages(found);
  }, [packages]);

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
          const remaining = packages.filter((order) => order._id !== id);
          alert("deleted");
          setPackages(remaining);
        }
      });
  };
  return (
    <div className="container myPackage">
      {singlepackages.map((packages) => (
        <MyBooking
          packages={packages}
          handleDeleteBooking={handleDeleteBooking}
        ></MyBooking>
      ))}
    </div>
  );
};

export default MyPackage;
