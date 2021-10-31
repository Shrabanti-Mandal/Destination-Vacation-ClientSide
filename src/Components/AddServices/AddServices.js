import React, { useRef } from "react";
import "./AddServices.css";
import { useEffect, useState } from "react";

const AddServices = () => {
  const [services, setServices] = useState([]);

  const nameRef = useRef();
  const descriptionRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    fetch("https://haunted-catacombs-99987.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleAddService = (e) => {
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;

    const image = imageRef.current.value;

    const newService = { name: name, description: description, image: image };

    fetch("https://haunted-catacombs-99987.herokuapp.com/services", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Added successfully");
          e.target.reset();
        }
      });
    nameRef.current.value = "";
    descriptionRef.current.value = "";

    imageRef.current.value = "";
    e.preventDefault();
  };

  return (
    <div className="serviceDetails">
      <div className="w-75">
        <img
          src="https://i.pinimg.com/originals/02/e9/36/02e9369be42adc6f154f207c38fa8eb3.jpg"
          alt=""
        />
      </div>
      <div className="w-75">
        <form onSubmit={handleAddService}>
          <div className="input-form  ">
            <input type="text" placeholder="name" ref={nameRef} />
            <input type="text" placeholder="description" ref={descriptionRef} />

            <input
              type="url"
              name=""
              placeholder="Image URL"
              ref={imageRef}
              id=""
            />

            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddServices;
