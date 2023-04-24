import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AppTwo = () => {
  const [users, setUsers] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    loadAllData();
  }, []);

  const loadAllData = async () => {
    try {
      const res = await axios.get("http://localhost:3001/users");
      setUsers(res.data);
    } catch (error) {
      console.log("server error=>>>>>>>>>>>", error);
      setError(error);
    }
  };

  const deleteuserHandler = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
  };

  return (
    <div className="container my-5 bg-black">
      <div className="d-flex flex-row align-items-end justify-content-end my-5">
        <Link
          to="/user-add"
          className="btn btn-primary text-white btn-outline-primary rounded-pill"
        >
          Add New User
        </Link>
      </div>
      <table className="table table-bordered border-primary table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">SN.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Class</th>
            <th scope="col">College/UN</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th
              scope="col"
              className="d-flex align-items-center justify-content-center"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((items, id) => (
              <tr key={items.id}>
                <th scope="row">{id + 1}</th>
                <td>{items.name}</td>
                <td>{items.email}</td>
                <td>{items.class}</td>
                <td>{items.college}</td>
                <td>{items.phone}</td>
                <td>{items.address}</td>
                <td className="d-flex align-items-center justify-content-center">
                  <Link
                    to={`/user/view/${items.id}`}
                    className="btn btn-primary me-1"
                  >
                    View
                  </Link>
                  <Link
                    to={`/user/edit/${items.id}`}
                    className="btn btn-success me-1"
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-danger"
                    onClick={() => deleteuserHandler(items.id)}
                  >
                    Delte
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppTwo;
