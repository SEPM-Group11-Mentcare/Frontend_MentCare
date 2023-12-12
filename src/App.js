import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/common/Footer";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import PatientDashboard from "./pages/PatientDashboard";
import TherapistDashboard from "./pages/TherapistDashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/signin" element={<SigninPage />}></Route>
        <Route path="/patientdashboard" element={<PatientDashboard />}></Route>
        <Route
          path="/therapistdashboard"
          element={<TherapistDashboard />}
        ></Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
