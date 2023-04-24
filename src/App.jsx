import React from "react";
import { Routes, Route } from "react-router-dom";
import Headers from "./components/Header/Header";
import AppOne from "./components/app-one/AppOne";
import AppTwo from "./components/app-two/AppTwo";
import AddUser from "./components/app-two/AddUser";
import EditUser from "./components/app-two/EditUser";
import ViewUser from "./components/app-two/ViewUser";
const Apps = () => {
  return (
    <div className="App">
      <Headers />
      <Routes>
        <Route path="/" element={<AppOne />} />
        <Route path="/app-two" element={<AppTwo />} />
        <Route path="/user-add" element={<AddUser />} />
        <Route path="/user/edit/:id" element={<EditUser />} />
        <Route path="/user/view/:id" element={<ViewUser />} />
      </Routes>
    </div>
  );
};

export default Apps;
