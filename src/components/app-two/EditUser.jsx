import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const initialValue = {
  name: "",
  email: "",
  class: "",
  phone: "",
  address: "",
  college: "",
};

const EditUser = () => {
  const [users, setUsers] = useState(initialValue);
  const { id } = useParams();
  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    setUsers(() => {
      const { name, value } = e.target;
      return {
        ...users,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    loadUserdata();
  }, []);
  
  const loadUserdata = async () => {
    try {
      const result = await axios.get(`http://localhost:3001/users/${id}`);
      setUsers(result.data);
    } catch (error) {
      console.log("Error=>>>>>>>>>>>", error);
    }
  };

  const editDataHandler = async () => {
    try {
      console.log(id);
      const updateData = await axios.put(
        `http://localhost:3001/users/${id}`,
        users
      );
      setUsers(updateData.data);
      navigate("/app-two")
    } catch (error) {
      console.log("Error=>>>>>>>", error);
    }
  };

  return (
    <div className="container bg-lightt">
      <div className="row my-5">
        <h1 className="text-center">Student Contact-Manager-App</h1>
        <div className="col-6">
          <label className="form-label mt-4">Enter Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            className="form-control mt-1"
            name="name"
            value={users.name}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="col-6">
          <label className="form-label mt-4">Enter Email</label>
          <input
            type="text"
            placeholder="Enter Email Address"
            className="form-control mt-1"
            name="email"
            value={users.email}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="col-6">
          <label className="form-label mt-4">Enter College/UN</label>
          <input
            type="text"
            placeholder="Enter College/university name"
            className="form-control mt-1"
            name="college"
            value={users.college}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="col-6">
          <label className="form-label mt-4">Enter Present Class</label>
          <input
            type="text"
            placeholder="Enter Present Class"
            className="form-control mt-1"
            name="class"
            value={users.class}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="col-6">
          <label className="form-label mt-4">Enter Phone</label>
          <input
            type="text"
            placeholder="Enter Phone Number"
            className="form-control mt-1"
            name="phone"
            value={users.phone}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="col-6">
          <label className="form-label mt-4">Enter Address</label>
          <input
            type="text"
            placeholder="Enter Address"
            className="form-control mt-1"
            name="address"
            value={users.address}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="d-flex align-items-center justify-content-center my-5">
          <button className="btn btn-primary" onClick={editDataHandler}>
            Update User
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
