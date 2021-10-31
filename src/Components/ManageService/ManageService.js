import React from "react";
import { Table } from "react-bootstrap";
import "./ManageService.css";
const ManageService = (props) => {
  const { name, email, packageName, person, date, totalDay, status, _id } =
    props.booking;
  return (
    <div>
      <Table className='table-responsive container striped bordered hover m-lg-5 size="sm"'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Package Name</th>
            <th>Person</th>
            <th>status</th>
            <th>Booking Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="">{name}</td>
            <td className="">{email}</td>
            <td className="">{packageName}</td>
            <td className="">{person}</td>
            <td className="">{status}</td>
            <td className="">{totalDay}</td>
            <td className="">
              {status}{" "}
              {status === "pending" && (
                <button
                  onClick={() => props.handleUpdatedStatus(_id)}
                  className="btn btn-success"
                >
                  Confirm
                </button>
              )}
            </td>
            <td>
              {" "}
              <button
                onClick={() => props.handleDelete(_id)}
                className=" btn btn-danger"
              >
                delete
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
      <Table className='table-responsive container striped bordered hover m-lg-5 size="sm"'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Package Name</th>
            <th>Person</th>
            <th>status</th>
            <th>Booking Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="">{name}</td>
            <td className="">{email}</td>
            <td className="">{packageName}</td>
            <td className="">{person}</td>
            <td className="">{status}</td>
            <td className="">{date}</td>
            <td className="">
              {status}{" "}
              {status === "pending" && (
                <button
                  onClick={() => props.handleUpdatedStatus(_id)}
                  className="btn btn-success"
                >
                  Confirm
                </button>
              )}
            </td>
            <td>
              {" "}
              <button
                onClick={() => props.handleDeleteBooking(_id)}
                className=" btn btn-danger"
              >
                delete
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ManageService;
