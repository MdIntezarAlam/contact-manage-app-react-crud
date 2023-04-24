import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const initialValue = {
  name: "",
  email: "",
  class: "",
  phone: "",
  address: "",
  college: "",
};

const AddUser = () => {
  const [users, setUsers] = useState(initialValue);
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

  const adduserDataHandler = async () => {
    try {
      if (users.name === "") {
        return alert("Pleasr Enter Name");
      } else if (users.email === "") {
        return alert("Pleasr Enter Email Address");
      } else if (!users.email.includes("@")) {
        return alert("Pleasr Enter Valid Email Address");
      } else if (users.class === "") {
        return alert("Pleasr Enter Present Class");
      } else if (users.phone === Number) {
        return alert("Please Enter Phone Number");
      } else if (users.phone.length < 10) {
        return alert("Phone length should not be less than 10 digit");
      } else if (users.phone.length > 11) {
        return alert("Phone length should not be greater than 10 digit");
      } else {
        const postData = await axios.post("http://localhost:3001/users", users);
        setUsers(postData);
        setTimeout(() => {
          navigate("/app-two");
        }, 1000);
      }
    } catch (error) {
      console.log("something went wrong");
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
          <button className="btn btn-primary" onClick={adduserDataHandler}>
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
