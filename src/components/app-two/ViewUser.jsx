import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const initialValue = {
  name: "",
  email: "",
  class: "",
  phone: "",
  college: "",
  address: "",
};
const ViewUser = () => {
  const [users, setUsers] = useState(initialValue);
  const { id } = useParams();

  useEffect(() => {
    loadSingleData();
  }, []);

  const loadSingleData = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/users/${id}`);
      setUsers(res.data);
    } catch (error) {
      console.log("Error=>>>>No Data Found", error);
    }
  };
  console.log("View user", users);
  return (
    <div className="container">
      <div className="row bg-info">
        <h1 className="text-center py-5 ">Student Details</h1>
        <div className="col-10 mb-5 m-auto">
          <div className="card px-2 py-2">
            <div className=" me-2 fs-bolder fs-3">
              Name: <span className="fs-bold fs-5">{users.name}</span>
            </div>
            <div className=" me-2 fs-bolder fs-3">
              Email: <span className="fs-bold fs-5">{users.email}</span>
            </div>
            <div className=" me-2 fs-bolder fs-3">
              Class: <span className="fs-bold fs-5">{users.class}</span>
            </div>
            <div className=" me-2 fs-bolder fs-3">
              College: <span className="fs-bold fs-5">{users.college}</span>
            </div>
            <div className=" me-2 fs-bolder fs-3">
              Phone: <span className="fs-bold fs-5">{users.phone}</span>
            </div>
            <div className=" me-2 fs-bolder fs-3">
              Address: <span className="fs-bold fs-5">{users.address}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
