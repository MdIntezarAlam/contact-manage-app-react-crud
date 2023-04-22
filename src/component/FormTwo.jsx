//easy to understand but may be hard
import React, { useState } from "react";
const initialVlaue = {
  user_name: "",
  user_email: "",
  user_phone: "",
  user_admin_no: "",
  user_class_name: "",
  user_branch_name: "",
  user_passing_year: "",
  user_college: "",
};

const FormTwo = () => {
  const [inputValues, setInputValues] = useState(initialVlaue);
  const [formValues, setFromValues] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editedId, setEditedId] = useState("");

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValues(() => {
      return {
        ...inputValues,
        [name]: value,
      };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (edit) {
      const tempData = formValues;
      Object.assign(tempData[editedId], inputValues);
      setFromValues([...tempData]);
      setEdit(false);
      setInputValues({
        user_name: "",
        user_email: "",
        user_phone: "",
        user_admin_no: "",
        user_class_name: "",
        user_branch_name: "",
        user_passing_year: "",
        user_college: "",
      });
    } else {
      setFromValues([...formValues, inputValues]);
      setInputValues({
        user_name: "",
        user_email: "",
        user_phone: "",
        user_admin_no: "",
        user_class_name: "",
        user_branch_name: "",
        user_passing_year: "",
        user_college: "",
      });
    }
  };

  //delete
  const handleDelete = (id) => {
    const filterData = formValues.filter((item, index) => index !== id);
    setFromValues(filterData);
  };
  const clearAll = () => {
    setFromValues([]);
  };
  //edit
  const handleEdit = (id) => {
    const prevData = formValues[id];
    setInputValues({
      user_name: prevData.user_name,
      user_email: prevData.user_email,
      user_phone: prevData.user_phone,
      user_admin_no: prevData.user_admin_no,
      user_class_name: prevData.user_class_name,
      user_branch_name: prevData.user_branch_name,
      user_passing_year: prevData.user_passing_year,
      user_college: prevData.user_college,
    });
    setEdit(true);
    setEditedId(id);
  };

  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="text-center my-5">
          <h1>Student Contact-Manager-App Eg-->2</h1>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
          <label className="form-label">Enter Name</label>
          <input
            type="text"
            name="user_name"
            value={inputValues.user_name}
            onChange={inputChangeHandler}
            className="form-control"
            placeholder="enter name"
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
          <label className="form-label">Enter Email</label>
          <input
            type="text"
            name="user_email"
            value={inputValues.user_email}
            onChange={inputChangeHandler}
            className="form-control"
            placeholder="enter name"
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
          <label className="form-label">Enter Phone No.</label>
          <input
            type="text"
            name="user_phone"
            value={inputValues.user_phone}
            onChange={inputChangeHandler}
            className="form-control"
            placeholder="enter name"
          />
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
          <label className="form-label">Enter Admin No</label>
          <input
            type="text"
            name="user_admin_no"
            value={inputValues.user_admin_no}
            onChange={inputChangeHandler}
            className="form-control"
            placeholder="enter "
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
          <label className="form-label">Enter Class</label>
          <input
            type="text"
            name="user_class_name"
            value={inputValues.user_class_name}
            onChange={inputChangeHandler}
            className="form-control"
            placeholder="enter present class"
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
          <label className="form-label">Enter Branch</label>
          <input
            type="text"
            name="user_branch_name"
            value={inputValues.user_branch_name}
            onChange={inputChangeHandler}
            className="form-control"
            placeholder="enter present class"
          />
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
          <label className="form-label">Passing Year</label>
          <input
            type="text"
            name="user_passing_year"
            value={inputValues.user_passing_year}
            onChange={inputChangeHandler}
            className="form-control"
            placeholder="enter passing year"
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
          <label className="form-label">Enter Name of College/ UN</label>
          <input
            type="text"
            name="user_college"
            value={inputValues.user_college}
            onChange={inputChangeHandler}
            className="form-control"
            placeholder="enter college/university"
          />
        </div>
        <div className="text-center my-5">
          <button className="btn btn-secondary w-50" onClick={submitHandler}>
            {edit ? "Update" : "Save"}
          </button>
        </div>
      </div>
      <div className="row mt-5 shadow">
        <table class="table-dark table table-hover shadow p-lg-5">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Admin No</th>
              <th scope="col">Class</th>
              <th scope="col">Branch</th>
              <th scope="col">Passing Year</th>
              <th scope="col">Collgee/UN</th>
              <th
                scope="col"
                className="d-flex justify-content-center align-items-center"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {formValues?.map((data, id) => (
              <tr key={data.id}>
                <td>{data.user_name}</td>
                <td>{data.user_email}</td>
                <td>{data.user_phone}</td>
                <td>{data.user_admin_no}</td>
                <td>{data.user_class_name}</td>
                <td>{data.user_branch_name}</td>
                <td>{data.user_passing_year}</td>
                <td>{data.user_college}</td>
                <th>
                  <tr className="d-flex justify-content-between align-items-center">
                    <button
                      className="text-white w-50 border-0 rounded-2 bg-success"
                      onClick={() => handleEdit(id)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-white w-50 border-0 rounded-2 ms-2 bg-danger"
                      onClick={() => handleDelete(id)}
                    >
                      Delte
                    </button>
                  </tr>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-center mb-5">
          <div className="m-auto">
            <button
              className="text-white w-50 border-0 rounded-2 ms-2 bg-primary p-2 rounded-pill"
              onClick={() => clearAll()}
            >
              clrar all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormTwo;
