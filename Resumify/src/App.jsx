import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignIn from "./pages/Signin";
import Home from "./pages/Home";
import Templates from "./pages/Templates";
import ResumeForm from "./pages/ResumeForm";
import Review from "./pages/Review";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "./auth/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./pages/Register";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />

        <Routes>
          {/* Public Routes */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<SignIn />} />

          {/* Protected Routes */}
          <Route path="/" element={<Home />} />
          <Route
            path="/templates"
            element={
              <PrivateRoute>
                <Templates />
              </PrivateRoute>
            }
          />
          <Route
            path="/resumeform"
            element={
              <PrivateRoute>
                <ResumeForm />
              </PrivateRoute>
            }
          />
          <Route
            path="/review"
            element={
              <PrivateRoute>
                <Review />
              </PrivateRoute>
            }
          />
        </Routes>

        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
