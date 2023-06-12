import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../view/dashboard/Dashboard";
import { Aboutus } from "../view/dashboardhead/about-us/Aboutus";
import { Contactus } from "../view/dashboardhead/contact-us/Contactus";
import { Founding } from "../view/dashboardhead/founding/Founding";
import { Dashboardhead } from "../view/dashboardhead/headoption/Dashboardhead";
import { Login } from "../view/dashboardhead/login/Login";
import { Services } from "../view/dashboardhead/services/Services";
import { Dashboardfooter } from "../view/dashboradfooter/Dashboardfooter";


function MainNavigator() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboardhead" element={<Dashboardhead />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/founding" element={<Founding />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboardfooter" element={<Dashboardfooter />} />
      </Routes>
    </div>
  );
}

export default MainNavigator;
