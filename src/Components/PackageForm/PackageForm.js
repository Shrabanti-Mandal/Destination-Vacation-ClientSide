import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./PackageForm.css";
import { useForm } from "react-hook-form";
const PackageForm = () => {
  const { user } = useAuth();
  const { Id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const [packageDetails, setPackageDetails] = useState([]);
  const [singlePackage, setSinglePackage] = useState({});
  const history = useHistory();
  const redirect = "/myOrder";
  const onSubmit = (data) => {
    data.image = singlePackage.image;
    data.packageName = singlePackage.name;
    console.log(data);
    fetch("https://haunted-catacombs-99987.herokuapp.com/createBooking", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Added successfully");
          reset();
          history.push(redirect);
        }
      });
  };

  useEffect(() => {
    fetch("https://haunted-catacombs-99987.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setPackageDetails(data));
  });

  useEffect(() => {
    const found = packageDetails?.find((detail) => detail._id === Id);
    setSinglePackage(found);
  }, [packageDetails]);

  return (
    <div className="package-details">
      <div className="w-50">
        <img src={singlePackage?.image} alt="" />
      </div>
      <div className="w-50">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div class="form-group row">
              <label for="fname" class="col-sm-4 col-form-label">
                Name :
              </label>
              <div class="col-sm-6">
                <input
                  {...register("name")}
                  type="text"
                  class="form-control"
                  value={user.displayName}
                  id="fname"
                  placeholder="Name"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="femail" class="col-sm-4 col-form-label">
                Email :
              </label>
              <div class="col-sm-6">
                <input
                  {...register("email")}
                  type="text"
                  class="form-control"
                  value={user.email}
                  id="femail"
                  placeholder="Email"
                />
              </div>
            </div>

            <div class="form-group row">
              <label for="fdate" class="col-sm-4 col-form-label">
                Desire date :
              </label>
              <div class="col-sm-6">
                <input
                  {...register("date")}
                  type="date"
                  class="form-control"
                  id="fdate"
                  placeholder="Your Desire Date "
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="ftotal" class="col-sm-4 col-form-label">
                Total Person :
              </label>
              <div class="col-sm-6">
                <input
                  {...register("person")}
                  type="number"
                  class="form-control"
                  id="ftotal"
                  placeholder="Total person  "
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="ftotalday" class="col-sm-4 col-form-label">
                Day visit :
              </label>
              <div class="col-sm-6">
                <input
                  {...register("totalDay")}
                  type="number"
                  class="form-control"
                  id="ftotalday"
                  placeholder="How many days you want to travel  "
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-6">
                <input
                  {...register("status")}
                  type="hidden"
                  value="pending"
                  class="form-control"
                  id="status"
                  placeholder="Your status "
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-6">
                <input
                  {...register("image")}
                  type="hidden"
                  value={singlePackage?.image}
                  class="form-control"
                  id="image"
                  placeholder="image "
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-6">
                <input
                  {...register("packageName")}
                  type="hidden"
                  value={singlePackage?.name}
                  class="form-control"
                  id="name"
                  placeholder="Package name  "
                />
              </div>
            </div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PackageForm;
